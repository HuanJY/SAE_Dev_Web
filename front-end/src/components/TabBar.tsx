import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface ButtonData {
    text: string;
    icon: JSX.Element;
    path: string;
}

const buttonsData: ButtonData[] = [
    { text: 'Menu Principale', icon: <MenuIcon />, path: '/'},
    { text: 'Tableau', icon: <SpaceDashboardIcon />, path: '/Liste'},
    { text: 'Membres', icon: <GroupsIcon />, path: '/Membres' },
    { text: 'Modèles', icon : <BurstModeIcon/>, path: 'Modele'},    
    { text: 'Paramètre', icon: <SettingsIcon />, path: 'Parametre'}
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
            setButtonsTab([...buttonsTab, { text: title, path: `/path/${title.toLowerCase().replace(/\s+/g, '-')}` }]);
        }
    };

    return (
        <div className="left-side">

            <p> Vous êtes ici </p>

            <Box sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'flex', textTransform: 'none', width:'100%', border:'solid black', 
                borderRadius:'20px', height:'90px', justifyContent: 'center', alignItems: 'center'}}>
                A remplir
            </Box>

            <hr/>

            <Box sx={{ flexGrow: 1}}>
                 {buttonsData.map((button, index) => (
                    <Link key={index} to={button.path} style={{ textDecoration: 'none'}}>
                        <Button key={index} sx={{ my: 2, fontSize:'100%', color: 'black', fontFamily: 'monospace', display: 'block', 
                            width: '100%', border: 'solid black', borderRadius: '20px', height: '90px'}}>
                            <p>{button.icon} <br/> {button.text}</p>
                        </Button>
                    </Link>
                ))}
            </Box>

            <hr/>
        </div>
    )
};

export default ResponsiveBarreTableau;
