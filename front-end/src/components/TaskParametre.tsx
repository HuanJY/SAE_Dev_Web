import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Menu from '@mui/material/Menu';

interface ListParametreProps {
    open: boolean;
    handleClose: () => void;
    handleTitleChange: (newTitle: string) => void;
    taskTitle: string;
    handleDeleteTask: () => void;
    handleToggleLabelsPriority: (LabelsPriorityStyle: string) => void; // Modifier la signature pour accepter une string en argument
    handleToggleLabelsStatue: (LabelsStatueStyle: string) => void; // Modifier la signature pour accepter une string en argument
    handleArchiveTask: () => void;
}

interface ButtonAction {
    text: string;
    action?: () => void;
}

interface LabelsPriority {
    text: string;
    action?: () => void;
}

interface LabelsStatue {
    text: string;
    action?: () => void;
}

const ResponsiveTaskParametre: React.FC<ListParametreProps> = ({
    open,
    handleClose,
    handleTitleChange,
    taskTitle,
    handleDeleteTask,
    handleToggleLabelsPriority,
    handleToggleLabelsStatue,
    handleArchiveTask
}) => {
    const [title, setTitle] = useState<string>(() => taskTitle || '');
    const [description, setDescription] = useState<string>(() => {
        const storedDescription = localStorage.getItem('taskDescription');
        return storedDescription || '';
    });

    const [selectedLabelsPriority, setSelectedLabelsPriority] = useState<string>(''); // New state for selected label priority
    const [selectedLabelsPriorityColor, setSelectedLabelsPriorityColor] = useState<string>(''); // New state for selected label priority color

    const [selectedLabelsStatue, setSelectedLabelsStatue] = useState<string>(''); // New state for selected label statue
    const [selectedLabelsStatueColor, setSelectedLabelsStatueColor] = useState<string>(''); // New state for selected label statue color

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

    const LabelsPriorityStyles: { [key: string]: string } = {
        'Principale': 'red',
        'Secondaire': 'orange',
        'Tertiaire': '#bdba00',
    };

    const labelsStatueStyles: { [key: string]: string } = {
        'Très Urgent': 'blue',
        'Urgent': 'green',
        'Retirer les étiquettes': ''
    };

    const handleSelectLabelsPriority = (LabelsPriorityStyle: string) => {
        handleToggleLabelsPriority(LabelsPriorityStyle);
        setSelectedLabelsPriority(LabelsPriorityStyle);
        setSelectedLabelsPriorityColor(LabelsPriorityStyles[LabelsPriorityStyle]);
    };
    
    const handleSelectLabelsStatue = (LabelsStatueStyle: string) => {
        if (LabelsStatueStyle === 'Retirer les étiquettes') {
            setSelectedLabelsPriority('');
            setSelectedLabelsStatue('');
            setSelectedLabelsPriorityColor('');
            setSelectedLabelsStatueColor('');
            handleToggleLabelsPriority('Retirer les étiquettes');
            handleToggleLabelsStatue('Retirer les étiquettes');
        } else {
            handleToggleLabelsStatue(LabelsStatueStyle);
            setSelectedLabelsStatue(LabelsStatueStyle);
            setSelectedLabelsStatueColor(labelsStatueStyles[LabelsStatueStyle]);
        }
    };

    const buttonAction: ButtonAction[] = [
        { text: 'Déplacer' },
        { text: 'Supprimer', action: handleDeleteTask},
        { text: 'Archiver', action: handleArchiveTask},
    ];

    const LabelsPriority: LabelsPriority[] = [
        { text: 'Principale', action: () => handleSelectLabelsPriority('Principale') },
        { text: 'Secondaire', action: () => handleSelectLabelsPriority('Secondaire') },
        { text: 'Tertiaire', action: () => handleSelectLabelsPriority('Tertiaire') },
    ];
    
    const labelsStatue: LabelsStatue[] = [
        { text: 'Très Urgent', action: () => handleSelectLabelsStatue('Très Urgent') },
        { text: 'Urgent', action: () => handleSelectLabelsStatue('Urgent') },
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

                    <div className='labelRegroup' style={{ display: 'flex', gap: '10px' }}>
                        {selectedLabelsPriority && (
                            <p className='labelTask' style={{ backgroundColor: selectedLabelsPriorityColor }}>
                                {selectedLabelsPriority}
                            </p>
                        )}
                        
                        {selectedLabelsStatue && (
                            <p className='labelTask' style={{ backgroundColor: selectedLabelsStatueColor }}>
                                {selectedLabelsStatue}
                            </p>
                        )}
                    </div>
                    

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

                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseLabelMenu} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        PaperProps={{ style: { width: '240px', height: 'auto', backgroundColor: 'bisque', border: 'solid black', borderRadius: '20px', marginTop: '10px', textAlign:'center', paddingLeft:'10px', paddingRight:'10px' }}}>

                        <p > Priorité </p>

                        {LabelsPriority.map((button, index) => (
                            <button type="button" key={index} className='labelParametre' onClick={button.action}>
                                {button.text}
                            </button>
                        ))}
                        
                        <hr className='sepButton'/>

                        <p > Priorité </p>

                        {labelsStatue.map((button, index) => (
                            <button type="button" key={index} className='labelParametre' onClick={button.action}>
                                {button.text}
                            </button>
                        ))}

                        <hr className='sepButton'/>

                        <button type="button" className='labelParametre'onClick={() => handleSelectLabelsStatue('Retirer les étiquettes')} style={{paddingBottom:'10px'}}>
                            Retirer les étiquettes
                        </button>

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
