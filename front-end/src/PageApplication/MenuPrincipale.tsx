import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import WorkspaceDialog from '../components/WorkspaceDialog';
import axios from 'axios';

interface ButtonData {
    text: string;
    path: string;
}

const ResponsiveMenuPrincipale: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<ButtonData[]>([
        { text: 'Exemple tableau', path: '/Liste'}
    ]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (title: string) => {
        setOpen(false);
        if (title) {
            const newBoard = { title: title }; // Adaptez cette ligne en fonction de votre modèle de données
            try {
                const response = await axios.post('http://localhost:8080/api/board/addBoard', newBoard, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setButtonsTab([...buttonsTab, { text: title, path: `/path/${title.toLowerCase().replace(/\s+/g, '-')}` }]);
            } catch (error) {
                console.error('Error creating board:', error);
            }
        }
    };

    return (
        <div className="right-side" style={{ maxHeight: '900px', overflowY: 'auto'}}>
            <h3>Vue d'ensemble</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {buttonsTab.map((button, index) => (
                    <Link key={index} to={button.path} style={{textDecoration: 'none', width: 'calc(33% - 2% - 1px)', height: '300px', marginRight: index % 3 === 2 ? '0' : '3%', marginBottom:'3%' }}>
                        <button type='button' style={{width:'100%', height:'100%'}}>
                            <p>{button.text}</p>
                        </button>
                    </Link>
                ))}
                <button type='button' className='buttonBoard' onClick={handleClickOpen}>
                    <AddBoxIcon /> <p style={{marginLeft:'1%'}}>Ajouter un tableau</p>
                </button>
                <WorkspaceDialog open={open} handleClose={handleClose} />
            </div>
        </div>
    );
};

export default ResponsiveMenuPrincipale;
