import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

interface EditListTitleModalProps {
    open: boolean;
    handleClose: () => void;
    handleSave: (newTitle: string) => void;
    currentTitle: string;
    error: string;
}

const EditListTitleModal: React.FC<EditListTitleModalProps> = ({ open, handleClose, handleSave, currentTitle, error }) => {
    const [newTitle, setNewTitle] = useState<string>(currentTitle);
    const [localError, setLocalError] = useState<string>('');

    useEffect(() => {
        setNewTitle(currentTitle); // Update newTitle when currentTitle changes
    }, [currentTitle]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTitle(event.target.value);
    };

    const handleSaveClick = () => {
        if (newTitle.trim() === '') {
            setLocalError('Le titre de la tâche ne peut pas être vide');
        } else {
            handleSave(newTitle);
            setNewTitle('');
            setLocalError('');
            handleClose();
        }
    };

    const handleCancelClick = () => {
        handleClose();
        setNewTitle('');
        setLocalError('');
    };

    return (
        <Modal open={open} onClose={handleCancelClick}>
            <div className='titleDialogForm'>
                <p className='outline' style={{ height: '30px', textAlign: 'center' }}> Modifier le titre de la liste </p>
                <textarea value={newTitle} onChange={handleChange} className='textareaTitleTab' />

                <div style={{ width: '100%', marginTop: '3%', marginBottom: '3%' }}>
                    {(error || localError) && <p style={{ color: 'red' }}>{error || localError}</p>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type='button' className='buttonForm' onClick={handleCancelClick} style={{ width: '47%', height: '30px' }}> Annuler </button>
                    <button type='button' className='buttonForm' onClick={handleSaveClick} style={{ width: '47%', height: '30px' }}> Accepter </button>
                </div>
            </div>
        </Modal>
    );
};

export default EditListTitleModal;