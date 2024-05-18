import React, { useState, useEffect } from 'react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

interface UserData {
    IdUser: number;
    LoginName: string;
}

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
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const simulatedUserData: UserData = {
            IdUser: 1,
            LoginName: 'JohnDoe',
        };

        setUser(simulatedUserData);
    }, []);

    return (
        <div className="left-side">
            <p>{user ? `Bonjour ${user.LoginName}` : 'Vous êtes ici'}</p>

            <button type='button' className='buttonBar'>
                A remplir
            </button>

            <hr/>

            {buttonsData.map((button, index) => (
                <Link key={index} to={button.path} style={{ textDecoration: 'none'}}>
                    <button type='button' className="buttonBar" key={index}>
                        <p>{button.icon} <br/> {button.text}</p>
                    </button>
                </Link>
                ))}

            <hr/>
        </div>
    );
};

export default ResponsiveBarreTableau;