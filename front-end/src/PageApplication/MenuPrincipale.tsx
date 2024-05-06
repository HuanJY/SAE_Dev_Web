import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import WorkspaceDialog from '../components/WorkspaceDialog';

interface ButtonData {
    text: string;
    path: string;
}

const ResponsiveMenuPrincipale: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<ButtonData[]>([
        { text: 'Exemple tableau', path: '/Liste' }
    ]);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = (title: string) => {
        setOpen(false);
        if (title) {
            setButtonsTab([...buttonsTab, { text: title, path: `/path/${title.toLowerCase().replace(/\s+/g, '-')}` }]);
        }
    };

    return (
        <div className="right-side" style={{ maxHeight: '900px', overflowY: 'auto'}}>
            <h3>Vue d'ensemble</h3>

            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                {buttonsTab.map((button, index) => (
                    <Link key={index} to={button.path} style={{ textDecoration: 'none', width: `31%`, marginRight: index % 3 === 2 ? '0' : '3%' }}>
                        <Button sx={{ color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: '100%', border: 'solid black', borderRadius: '20px', height: '300px', marginBottom: '10%'}}>
                            <p>{button.text}</p>
                        </Button>
                    </Link>
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
