import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface LabelMenuProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
    handleSelectLabel: (labelStyle: string) => void;
}

const LabelMenu: React.FC<LabelMenuProps> = ({ anchorEl, handleClose, handleSelectLabel }) => {
    return (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleSelectLabel('Principale')} style={{ color: 'red' }}>Principale</MenuItem>
            <MenuItem onClick={() => handleSelectLabel('Secondaire')} style={{ color: 'orange' }}>Secondaire</MenuItem>
            <MenuItem onClick={() => handleSelectLabel('Enlever l\'étiquette')}>Enlever l'étiquette</MenuItem>
        </Menu>
    );
};

export default LabelMenu;
