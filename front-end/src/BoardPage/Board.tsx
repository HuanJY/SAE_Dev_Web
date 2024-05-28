import React, { useEffect, useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import SetTitleBoard from './SetTitleBoard';
import axios from 'axios';

interface ButtonData {
    text: string;
    path: string;
}

const ResponsiveBoard: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [buttonsTab, setButtonsTab] = useState<ButtonData[]>([]);

    const idUser = 1; // Pour le test (à enlever)

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/board/${idUser}`);
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
            const response = await axios.post('http://localhost:8080/api/board/addBoard', {
                boardName: title,
                idUser: idUser
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
        <div className="right-side" style={{ maxHeight: '900px', overflowY: 'auto' }}>
            <h3>Vue d'ensemble</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {buttonsTab.map((button, index) => (
                    <Link key={index} to={button.path} style={{ textDecoration: 'none', width: 'calc(33% - 2% - 1px)', height: '300px', marginRight: index % 3 === 2 ? '0' : '3%', marginBottom: '3%' }}>
                        <button type='button' className='buttonForm' style={{ width: '100%', height: '100%' }}>
                            <p>{button.text}</p>
                        </button>
                    </Link>
                ))}
                <button type='button' className='buttonBoard buttonForm' onClick={handleClickOpen}>
                    <AddBoxIcon /> <p style={{ marginLeft: '1%' }}>Ajouter un tableau</p>
                </button>
                <SetTitleBoard open={open} handleClose={handleClose} handleCancel={handleCancel} error={error} />
            </div>
        </div>
    );
};

export default ResponsiveBoard;
