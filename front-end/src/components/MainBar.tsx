import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WorkspaceDialog from './WorkspaceDialog';
import SettingsIcon from '@mui/icons-material/Settings';

interface ButtonData {
    text: string;
    icon: JSX.Element;
}

interface ButtonTab {
    text: string;
    link?: string;
}

const buttonsData: ButtonData[] = [
    { text: 'Tableau', icon: <SpaceDashboardIcon /> },
    { text: 'Paramètres', icon: <SettingsIcon /> }
];

const ResponsiveMainBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<ButtonTab[]>([
        { text: 'Exemple tableau', link: '/Exemple'}
    ]);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (title?: string) => {
        setOpen(false);
        if (title) {
            setButtonsTab([...buttonsTab, { text: title }]);
        }
    };

    return (
        <div className="left-side">
            <Box>
                <p style={{paddingTop: '5px'}}> Vous êtes ici </p>
                    
                <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width:'100%', border:'solid black', borderRadius:'20px', height:'90px'}}>
                     A remplir
                </Button>
            </Box>

            <hr/>

            <Box sx={{ flexGrow: 1}}>
                    {buttonsData.map((button, index) => (
                <Button key={index} sx={{my: 2, color: 'black', fontFamily: 'monospace', display: 'block', width: '100%', border: 'solid black', borderRadius: '20px', height: '90px'}}>
                    <p>{button.icon} <br/> {button.text}</p>
                </Button>
            ))}
            </Box>

            <hr/>

            <p style={{paddingTop: '5px'}}> Vous êtes ici </p>

            <Box sx={{ flexGrow: 1 }}>
                {buttonsTab.map((button, index) => (
                <Button key={index} sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: '100%', border: 'solid black', borderRadius: '20px', height: '90px' }}>
                    <p>{button.text}</p>
                </Button>
                ))}

                <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: '100%', border: 'solid black', borderRadius: '20px', height: '90px' }} onClick={handleClickOpen}>
                    Ajouter un tableau
                </Button>
                <WorkspaceDialog open={open} handleClose={handleClose} />
            </Box>
        </div>
    )
};

export default ResponsiveMainBar;
