import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';

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

            <div>
                {buttonsData.map((button, index) => (
                <Link key={index} to={button.path} style={{textDecoration:'none'}}>
                    <button type='button' className='buttonBar buttonForm' key={index}>
                        <p>{button.icon} <br/> {button.text}</p>
                    </button>
                </Link>
            ))}
            </div>

            <hr/>

            <p style={{paddingTop: '5px'}}> Vos tableaux </p>

            <Box sx={{ flexGrow: 1 }}>
                {buttonsTab.map((button, index) => (
                    <Link key={index} to={button.path} style={{textDecoration:'none'}}>
                        <button type='button' className='buttonBar buttonForm' key={index}>
                            <p>{button.text}</p>
                        </button>
                    </Link>
                ))}
            </Box>
        </div>
    )
};

export default ResponsiveMainBar;