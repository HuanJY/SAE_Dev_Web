import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WorkspaceDialog from '../components/WorkspaceDialog';

interface ButtonData {
    text: string;
}

const ResponsiveMenuPrincipale: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<ButtonData[]>([
        { text: 'Exemple tableau'},
        { text: 'Exemple tableau'},
        { text: 'Exemple tableau'}
    ]);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = (title: string) => {
        setOpen(false);
        if (title) {
            setButtonsTab([...buttonsTab, { text: title }]);
        }
    };

    return (
        <div className="right-side">
            <h3>Vue d'ensemble</h3>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {buttonsTab.map((button, index) => (
                <Button key={index} sx={{ color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: 'calc(33% - 2% - 1px)', border: 'solid black', borderRadius: '20px', height: '300px', marginBottom: '3%', marginRight: index % 3 === 2 ? '0' : '3%' }}>
                    <p>{button.text}</p>
                </Button>
                ))}
                <Button sx={{ color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: 'calc(33% - 2% - 1px)', border: 'solid black', paddingRight: '15px', borderRadius: '20px', height: '300px', marginBottom: '3%' }} onClick={handleClickOpen}>
                    <AddBoxIcon /> Ajouter un tableau
                </Button>
                <WorkspaceDialog open={open} handleClose={handleClose} />
            </Box>
        </div>
    );
};

export default ResponsiveMenuPrincipale;
