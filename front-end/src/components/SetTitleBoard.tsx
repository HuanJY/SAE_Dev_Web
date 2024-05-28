import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

interface SetTitleBoard {
    open: boolean;
    handleClose: (title: string) => void;
    handleCancel: () => void;
    error: string;
}

const SetTitleBoard: React.FC<SetTitleBoard> = ({ open, handleClose, handleCancel, error }) => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.target.value);
    };

    const handleAdd = () => {
        handleClose(title);
        setTitle('');
    };

    const handleCancelClick = () => {
        handleCancel();
        setTitle('');
    };

    return (
        <Modal open={open} onClose={handleCancelClick}>
            <div className='titleDialogForm'>
                <p className='outline' style={{height:'30px' ,textAlign: 'center'}}> Ajouter un tableau </p>
                <textarea value={title} onChange={handleChange} className='textareaTitleTab'/>

                <div style={{width:'100%', marginTop:'3%', marginBottom:'3%'}}>
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichez le message d'erreur si il n'y a pas de titre */}
                </div>


                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button type='button' onClick={handleCancelClick} style={{width: '47%', height:'30px'}}> Annuler </button>
                    <button type='button' onClick={handleAdd} style={{width: '47%', height:'30px'}}> Ajouter </button>
                </div>
            </div>
        </Modal>
    );
};

export default SetTitleBoard;
