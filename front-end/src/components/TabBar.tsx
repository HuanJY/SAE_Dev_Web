import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkspaceDialog from './WorkspaceDialog';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import MenuIcon from '@mui/icons-material/Menu';

interface ButtonData {
    text: string;
    icon: JSX.Element;
}

const buttonsData: ButtonData[] = [
    { text: 'Menu Principale', icon: <MenuIcon /> },
    { text: 'Tableau', icon: <SpaceDashboardIcon /> },
    { text: 'Membres', icon: <GroupsIcon /> },
    { text: 'Modèles', icon : <BurstModeIcon/>},
    { text: 'Paramètres', icon: <SettingsIcon /> }
];

const ResponsiveBarreTableau: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<{ text: string }[]>([
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
        <div className="page">
            <div className="left-side">

                <Box>
                    <p style={{ paddingTop: '5px' }}> Vous êtes ici </p>
                    
                    <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width:'100%', border:'solid black', borderRadius:'20px', height:'90px'}}>
                        A remplir
                    </Button>
                </Box>

                <hr/>

                <Box sx={{ flexGrow: 1}}>
                     {buttonsData.map((button, index) => (
                    <Button key={index} sx={{ my: 2, fontSize:'100%', color: 'black', fontFamily: 'monospace', display: 'block', width: '100%', border: 'solid black', borderRadius: '20px', height: '90px'}}>
                        <p>{button.icon} <br/> {button.text}</p>
                    </Button>
                ))}
                </Box>

                <hr/>

                <p style={{ paddingTop: '5px' }}> Vos tableaux</p>

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
        </div>
    )
};

export default ResponsiveBarreTableau;
