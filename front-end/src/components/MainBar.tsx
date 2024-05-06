import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WorkspaceDialog from './WorkspaceDialog';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

interface ButtonData {
    text: string;
    icon: JSX.Element;
    path: string;
}

interface ButtonTab {
    text: string;
    path: string;
}

const buttonsData: ButtonData[] = [
    { text: 'Tableau', icon: <SpaceDashboardIcon/>, path:'/'},
    { text: 'Paramètre', icon: <SettingsIcon/>, path:'/Parametre' }
];

const ResponsiveMainBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<ButtonTab[]>([
        { text: 'Exemple tableau', path: '/Liste'}
    ]);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (title: string) => {
        setOpen(false);
        if (title) {
            setButtonsTab([...buttonsTab, { text: title, path:`/path/${title.toLowerCase().replace(/\s+/g, '-')}`}]);
        }
    };

    return (
        <div className="left-side">

            <Box sx={{ flexGrow: 1}}>
                {buttonsData.map((button, index) => (
                <Link key={index} to={button.path} style={{textDecoration:'none'}}>
                    <Button key={index} sx={{my: 2, color: 'black', fontFamily: 'monospace', display: 'block', width: '100%', border: 'solid black', borderRadius: '20px', height: '90px'}}>
                        <p>{button.icon} <br/> {button.text}</p>
                    </Button>
                </Link>
            ))}
            </Box>

            <hr/>

            <p style={{paddingTop: '5px'}}> Vos tableaux </p>

            <Box sx={{ flexGrow: 1 }}>
                {buttonsTab.map((button, index) => (
                    <Link key={index} to={button.path} style={{textDecoration:'none'}}>
                        <Button key={index} sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: '100%', border: 'solid black', borderRadius: '20px', height: '90px' }}>
                            <p>{button.text}</p>
                        </Button>
                    </Link>
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