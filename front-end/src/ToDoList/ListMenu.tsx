import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import EditListTitleModal from './EditListTitle';

interface ListMenuProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
    handleAddTask: () => void;
    handleDeleteAllTasks: () => void;
    handleDeleteList: () => void;
    handleTitleChangeList: (newTitle: string) => void;
    currentTitle: string;
}

interface ButtonMenu {
    text: string;
    icon?: JSX.Element;
    action: () => void;
}

const ResponsiveListMenu: React.FC<ListMenuProps> = ({anchorEl, handleClose, handleAddTask, handleDeleteAllTasks, handleDeleteList, handleTitleChangeList, currentTitle}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [error, setError] = useState('');

    const openEditModal = () => {
        setError(''); // Clear any previous error messages
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const saveTitle = (newTitle: string) => {
        if (newTitle.trim() === '') {
            setError('Le titre de la tâche ne peut pas être vide');
        } else {
            handleTitleChangeList(newTitle);
            setError('');
            closeEditModal();
        }
    };

    const buttonMenu: ButtonMenu[] = [
        { text: 'Modifier le titre', action: openEditModal },
        { text: 'Ajouter une tâche', icon: <AddIcon />, action: handleAddTask },
        { text: 'Supprimer toutes les tâches', icon: <ClearAllIcon />, action: handleDeleteAllTasks },
        { text: 'Supprimer cette liste', icon: <ClearIcon />, action: handleDeleteList },
        { text: 'Archiver cette liste', icon: <CheckIcon />, action: handleClose }
    ];

    const buttonFirst = buttonMenu.slice(0, 3);
    const buttonSecond = buttonMenu.slice(3, 5);

    return (
        <>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} PaperProps={{ style: { minWidth: '300px', backgroundColor: 'grey', border: 'solid black', borderRadius: '20px', color: 'white' } }}>
                <p style={{ textAlign: 'center' }}>Liste des actions</p>

                <hr className='sepButton' />

                {buttonFirst.map((button, index) => (
                    <button type="button" className='buttonMenu buttonForm' key={index} onClick={button.action}>
                        {button.icon} <p style={{ marginLeft: '2%' }}> {button.text} </p>
                    </button>
                ))}

                <hr className='sepButton' />

                {buttonSecond.map((button, index) => (
                    <button type="button" className='buttonMenu buttonForm' key={index} onClick={button.action}>
                        {button.icon} <p style={{ marginLeft: '2%' }}> {button.text} </p>
                    </button>
                ))}
            </Menu>

            <EditListTitleModal
                open={isEditModalOpen}
                handleClose={closeEditModal}
                handleSave={saveTitle}
                currentTitle={currentTitle}
                error={error}
            />
        </>
    );
};

export default ResponsiveListMenu;