import React, { useState } from 'react';
import Modal from '@mui/material/Modal';

interface ListParametreProps {
    open: boolean;
    handleClose: () => void;
    handleTitleChange: (newTitle: string) => void;
    handleDescriptionChange: (newDescription: string) => void;
    taskTitle: string;
    taskDescription: string;
    handleDeleteTask: () => void;
}

interface ButtonAction {
    text: string;
    action?: () => void;
}

const ResponsiveTaskParametre: React.FC<ListParametreProps> = ({
    open,
    handleClose,
    handleTitleChange,
    handleDescriptionChange,
    taskTitle,
    taskDescription,
    handleDeleteTask,
}) => {
    const [title, setTitle] = useState<string>(taskTitle);
    const [description, setDescription] = useState<string>(taskDescription);

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
        handleDescriptionChange(description);
        handleClose();
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenLabelMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const buttonAction: ButtonAction[] = [
        { text: 'Déplacer' },
        { text: 'Supprimer', action: handleDeleteTask},
    ];

    return (
        <Modal open={open} onClose={handleClose}>
            <div className='modalForm'>
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
                            <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={cancelChangeTitle} style={{ float: 'left' }}>
                                Annuler
                            </button>
                            <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={changeTitleTask} style={{ float: 'right' }}>
                                Valider
                            </button>
                        </>
                    ) : (
                        <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={changeTitleTask} style={{ float: 'right' }}>
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
                            <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={cancelChangeDescription} style={{ float: 'left' }}>
                                Annuler
                            </button>
                            <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={changeDescription} style={{ float: 'right' }}>
                                Valider
                            </button>
                        </>
                    ) : (
                        <>
                            <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={deleteAllDescription} style={{ float: 'left' }}>
                                Tout supprimer
                            </button>
                            <button type='button' className='buttonLeftTaskParametre buttonForm' onClick={changeDescription} style={{ float: 'right' }}>
                                Modifier la description
                            </button>
                        </>
                    )}
                    <button type='button' className='buttonApplyTaskParametre buttonForm' onClick={handleApplyChanges} style={{ float: 'right' }}>
                        Appliquer les modifications
                    </button>


                </div>
                <div className='outlineRightTaskParametre'>
                    <p>Suggérées</p>
                    <button type='button' className='buttonRightTaskParametre buttonForm'>
                        Rejoindre
                    </button>
                    <hr />
                    <p>Ajouter à la carte</p>
                    <button type='button' className='buttonRightTaskParametre buttonForm'>
                        Membres
                    </button>


                    <button type='button' className='buttonRightTaskParametre buttonForm' onClick={handleOpenLabelMenu}>
                        Etiquettes
                    </button>


                    <button type='button' className='buttonRightTaskParametre buttonForm'>
                        Checklist
                    </button>
                    <button type='button' className='buttonRightTaskParametre buttonForm'>
                        Dates
                    </button>

                    <hr />

                    <p>Actions</p>
                    {buttonAction.map((button, index) => (
                        <button type="button" key={index} className='buttonRightTaskParametre buttonForm' onClick={button.action}>
                            <p>{button.text}</p>
                        </button>
                    ))}

                </div>
            </div>
        </Modal>
    );
};

export default ResponsiveTaskParametre;