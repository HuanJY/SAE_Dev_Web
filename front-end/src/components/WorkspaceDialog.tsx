import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface WorkspaceDialogProps {
    open: boolean;
    handleClose: (title: string) => void;
}

const ResponsiveWorkspaceDialog: React.FC<WorkspaceDialogProps> = ({ open, handleClose }) => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleCloseDialog = () => {
        handleClose(title);
        setTitle('');
    };

    return (
        <Dialog open={open} onClose={handleCloseDialog}>
            <DialogTitle>Ajouter un tableau</DialogTitle>
            <TextField autoFocus margin="dense" label="Titre du tableau" type="text" value={title} onChange={handleChange} fullWidth />
            <Button onClick={handleCloseDialog}>Ajouter</Button>
        </Dialog>
    );
};

export default ResponsiveWorkspaceDialog;
