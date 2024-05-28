import React, { useState } from 'react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WorkspaceDialog from './SetTitleBoard';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useHistory } from 'react-router-dom';

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
    { text: 'Tableau', icon: <SpaceDashboardIcon />, path: '/' },
    { text: 'Paramètre', icon: <SettingsIcon />, path: '/Parametre' }
];

const ResponsiveMainBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [buttonsTab, setButtonsTab] = useState<ButtonTab[]>([
        { text: 'Exemple tableau', path: '/Liste' }
    ]);
    const [error] = useState<string>('');
    const history = useHistory(); // Utilisation de useHistory pour obtenir l'objet history

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (title: string) => {
        setOpen(false);
        if (title) {
            setButtonsTab([...buttonsTab, { text: title, path: `/path/${title.toLowerCase().replace(/\s+/g, '-')}` }]);
            history.push(`/board/idUser`); // Redirection vers /board/idUser
        }
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="left-side">

            <div>
                {buttonsData.map((button, index) => (
                    <Link key={index} to={button.path} style={{ textDecoration: 'none' }}>
                        <button type='button' className='buttonBar' key={index}>
                            <p>{button.icon} <br /> {button.text}</p>
                        </button>
                    </Link>
                ))}
            </div>

            <hr />

            <p style={{ paddingTop: '5px' }}> Vos tableaux </p>

            <div>
                {buttonsTab.map((button, index) => (
                    <Link key={index} to={button.path} style={{ textDecoration: 'none' }}>
                        <button type='button' className='buttonBar' key={index}>
                            <p>{button.text}</p>
                        </button>
                    </Link>
                ))}

                <button type='button' className='buttonBar' onClick={handleClickOpen}>
                    <p>Ajouter un tableau</p>
                </button>
                <WorkspaceDialog
                    open={open}
                    handleClose={handleClose}
                    handleCancel={handleCancel}
                    error={error}
                />
            </div>
        </div>
    )
};

export default ResponsiveMainBar;
