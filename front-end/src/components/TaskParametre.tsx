import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface ListParametreProps {
    open: boolean;
    handleClose: () => void;
    handleTitleChange: (newTitle: string) => void;
    taskTitle: string;
    handleDeleteTask: () => void;
    handleToggleLabel: (labelStyle: string) => void; // Modifier la signature pour accepter une string en argument
}

interface ButtonAction{
    text: string;
    action?: () => void;
}

interface LabelParametre{
    text: string;
    action?: () => void;
}

const ResponsiveTaskParametre: React.FC<ListParametreProps> = ({open, handleClose, handleTitleChange, taskTitle, handleDeleteTask, handleToggleLabel,}) => {

    const [title, setTitle] = useState<string>(() => taskTitle || '');
    const [description, setDescription] = useState<string>(() => {
        const storedDescription = localStorage.getItem('taskDescription');
        return storedDescription || '';
    });

    useEffect(() => {
        localStorage.setItem('taskDescription', description);
        localStorage.setItem('taskTitle', title);
    }, [description, title]);

    const [isEditableTitle, setIsEditableTitle] = useState<boolean>(false);
    const [isEditableDescription, setIsEditableDescription] = useState<boolean>(false);
    const [initialTitle, setInitialTitle] = useState<string>('');
    const [initialDescription, setInitialDescription] = useState<string>('');

    const changeTitleTask = () => {
        setIsEditableTitle(!isEditableTitle);
        if (!isEditableTitle) {
            setInitialTitle(title);
        } else {
            handleTitleChange(title);
        }
    };

    const changeDescription = () => {
        setIsEditableDescription(!isEditableDescription);
        if (!isEditableDescription) {
            setInitialDescription(description);
        }
    };

    const cancelChangeTitle = () => {
        setTitle(initialTitle);
        setIsEditableTitle(false);
    };

    const cancelChangeDescription = () => {
        setDescription(initialDescription);
        setIsEditableDescription(false);
    };

    const deleteAllDescription = () => {
        setDescription('');
    };

    const handleApplyChanges = () => {
        console.log('Applying changes...');
        handleTitleChange(title);
        handleClose();
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenLabelMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseLabelMenu = () => {
        setAnchorEl(null);
    };

    const handleSelectLabel = (labelStyle: string) => {
        handleToggleLabel(labelStyle);
        handleCloseLabelMenu();
    };

    const buttonAction: ButtonAction[] = [
        { text: 'Déplacer' },
        { text: 'Supprimer', action: handleDeleteTask },
        { text: 'Archiver' },
    ];

    const labelParametre: LabelParametre[] = [
        { text: 'Principale', action: () => handleSelectLabel('Principale') },
        { text: 'Secondaire', action: () => handleSelectLabel('Secondaire') },
        { text: 'Retirer les étiquettes', action: () => handleSelectLabel('Retirer les étiquettes')}
    ];
    

    return (
        <Modal open={open} onClose={handleClose}>
            <div
                style={{
                    width: '50%',
                    height: '80%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    borderRadius: '15px',
                    backgroundColor: 'bisque',
                    border: 'solid black',
                }}
            >
                <div className='outlineLeftTaskParametre'>
                    <textarea
                        className='titleTask'
                        placeholder='Ajouter un titre'
                        disabled={!isEditableTitle}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {isEditableTitle ? (
                        <>
                            <button type='button' className='buttonLeftTaskParametre' onClick={cancelChangeTitle} style={{ float: 'left' }}>
                                Annuler
                            </button>
                            <button type='button' className='buttonLeftTaskParametre' onClick={changeTitleTask} style={{ float: 'right' }}>
                                Valider
                            </button>
                        </>
                    ) : (
                        <button type='button' className='buttonLeftTaskParametre' onClick={changeTitleTask} style={{ float: 'right' }}>
                            Modifier le titre
                        </button>
                    )}
                    <p className='textLeftTaskParametre outline'>Description</p>
                    <textarea
                        className='descriptionTask'
                        placeholder='Ajouter une description'
                        disabled={!isEditableDescription}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {isEditableDescription ? (
                        <>
                            <button type='button' className='buttonLeftTaskParametre' onClick={cancelChangeDescription} style={{ float: 'left' }}>
                                Annuler
                            </button>
                            <button type='button' className='buttonLeftTaskParametre' onClick={changeDescription} style={{ float: 'right' }}>
                                Valider
                            </button>
                        </>
                    ) : (
                        <>
                            <button type='button' className='buttonLeftTaskParametre' onClick={deleteAllDescription} style={{ float: 'left' }}>
                                Tout supprimer
                            </button>
                            <button type='button' className='buttonLeftTaskParametre' onClick={changeDescription} style={{ float: 'right' }}>
                                Modifier la description
                            </button>
                        </>
                    )}
                    <button type='button' className='buttonApplyTaskParametre' onClick={handleApplyChanges} style={{ float: 'right' }}>
                        Appliquer les modifications
                    </button>
                </div>
                <div className='outlineRightTaskParametre'>
                    <p>Suggérées</p>
                    <button type='button' className='buttonRightTaskParametre'>
                        Rejoindre
                    </button>
                    <hr />
                    <p>Ajouter à la carte</p>
                    <button type='button' className='buttonRightTaskParametre'>
                        Membres
                    </button>


                    <button type='button' className='buttonRightTaskParametre' onClick={handleOpenLabelMenu}>
                        Etiquettes
                    </button>

                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseLabelMenu} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                        PaperProps={{style: {width: '300px', height: '400px', backgroundColor: 'bisque', border: 'solid black', borderRadius: '20px', marginTop:'10px'}}}>

                        {labelParametre.map((button, index) => (
                        <button type="button" key={index} className='labelParametre' onClick={button.action}>
                            {button.text}
                        </button>
                    ))}


                    </Menu>

                    <button type='button' className='buttonRightTaskParametre'>
                        Checklist
                    </button>
                    <button type='button' className='buttonRightTaskParametre'>
                        Dates
                    </button>
                    
                    <hr />

                    <p>Actions</p>
                    {buttonAction.map((button, index) => (
                        <button type="button" key={index} className='buttonRightTaskParametre' onClick={button.action}>
                            <p>{button.text}</p>
                        </button>
                    ))}

                </div>
            </div>
        </Modal>
    );
};

export default ResponsiveTaskParametre;
