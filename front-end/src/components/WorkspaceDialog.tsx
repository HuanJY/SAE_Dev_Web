import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface WorkspaceDialogProps {
    open: boolean;
    handleClose: (title: string) => void;
    handleCancel: () => void;
    error: string;
}

const WorkspaceDialog: React.FC<WorkspaceDialogProps> = ({ open, handleClose, handleCancel, error }) => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <Dialog open={open} onClose={handleCancelClick}>
            <DialogTitle>Ajouter un tableau</DialogTitle>
            <TextField
                autoFocus
                margin="dense"
                label="Titre du tableau"
                type="text"
                value={title}
                onChange={handleChange}
                fullWidth
            />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichez le message d'erreur */}
            <Button onClick={handleAdd}>Ajouter</Button>
            <Button onClick={handleCancelClick}>Annuler</Button>
        </Dialog>
    );
};

export default WorkspaceDialog;
