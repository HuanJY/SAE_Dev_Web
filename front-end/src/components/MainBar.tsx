import React, { useEffect, useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import SetTitleBoard from '../BoardPage/SetTitleBoard';
import axios from 'axios';

interface ButtonData {
    text: string;
    path: string;
}

interface ButtonNav {
    text: string;
    icon: JSX.Element;
    path: string;
}

const ResponsiveMainBar: React.FC = () => {

    const buttonsNav: ButtonNav[] = [
        { text: 'Tableau', icon: <SpaceDashboardIcon />, path: '/accueil'},
        { text: 'Paramètre', icon: <SettingsIcon />, path: '/Parametre'}
    ];

    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [buttonsTab, setButtonsTab] = useState<ButtonData[]>([]);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.post(`api/board/user`, {
                }, {
                    withCredentials: true // Important pour inclure les cookies de session
                });
                const boards = response.data.map((board: any) => ({
                    text: board.boardName,
                    path: `/board/${board.idBoard}`
                }));
                setButtonsTab(boards);
            } catch (error) {
                console.error('Erreur lors de la récupération des tableaux :', error);
            }
        };

        fetchBoards();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (title: string) => {
        if (!title.trim()) {
            setError('Veuillez saisir un titre valide pour le tableau.');
            return;
        }

        try {
            const response = await axios.post('api/board/addBoard', {
                boardName: title
            }, {
                withCredentials: true // Important pour inclure les cookies de session
            });

            console.log('Création du tableau réussi');

            // Ajouter le nouveau tableau à l'état
            const newButton: ButtonData = { text: title, path: `/board/${response.data.idBoard}` };
            setButtonsTab([...buttonsTab, newButton]);
            setError('');
            setOpen(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du tableau :', error);
        }
    };

    const handleCancel = () => {
        setOpen(false);
        setError('');
    };

    return (
        <div className="left-side">
            <div>
                <h3>Vue d'ensemble</h3>

                <div>
                    {buttonsNav.map((button, index) => (
                        <Link key={index} to={button.path} style={{textDecoration: 'none'}}>
                            <button type='button' className='buttonBar buttonForm' key={index}>
                                <p>{button.icon} <br/> {button.text}</p>
                            </button>
                        </Link>
                    ))}
                </div>

                <hr/>

                <p style={{paddingTop: '5px'}}> Vos tableaux </p>

                <div style={{flexWrap: 'wrap'}}>
                    {buttonsTab.map((button, index) => (
                        <Link key={index} to={button.path}>
                            <button type='button' className='buttonBar buttonForm'>
                                <p>{button.text}</p>
                            </button>
                        </Link>
                    ))}
                    <button type='button' className='buttonBar buttonForm' onClick={handleClickOpen}>
                        <AddBoxIcon/> <p style={{marginLeft: '1%'}}>Ajouter un tableau</p>
                    </button>
                    <SetTitleBoard open={open} handleClose={handleClose} handleCancel={handleCancel} error={error}/>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMainBar;