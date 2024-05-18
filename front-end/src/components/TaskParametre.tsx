import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

interface ListParametreProps {
    open: boolean;
    handleClose: () => void;
    handleTitleChange: (newTitle: string) => void;
    taskTitle: string; // Ajouter taskTitle à l'interface ListParametreProps
    handleDeleteTask: (listIndex: number, taskIndex: number) => void;
}

// Pour l'affiche des différents boutons du paramètre de la liste //
interface ButtonParametre {
    text: string;
    action?: () => void;
}

const ResponsiveListParametre: React.FC<ListParametreProps> = ({ open, handleClose, handleTitleChange, taskTitle, handleDeleteTask}) => {

   const buttonParametre: ButtonParametre[] = [
        // Bouton Ajout sur la tâche //
        {text: 'Membres'},
        {text: 'Etiquettes'},
        {text: 'Checklist'},
        {text: 'Dates'},
    
        // Bouton pour les actions //
        {text: 'Déplacer'},
        {text: 'Supprimer', action: handleDeleteTask},
        {text: 'Archiver'},
    ];
    
    const buttonAdd = buttonParametre.slice(0,4);
    const buttonAction = buttonParametre.slice(4,7)
    
    // Stockes les titres et les description dans le localStorage
    const [title, setTitle] = useState<string>(() => {
        return taskTitle || ''; // Utiliser le titre de la tâche s'il existe, sinon utiliser une chaîne vide
    });

    const [description, setDescription] = useState<string>(() => {
        const storedDescription = localStorage.getItem('taskDescription');
        return storedDescription || ''; // Utiliser la description de la tâche s'il existe, sinon utiliser une chaîne vide
    });    
    
    useEffect(() => {
        localStorage.setItem('taskDescription', description);
        localStorage.setItem('taskTitle', title);
    }, [description, title]);
    
    // Variables qui nous permettrons de rendre un texte modifiable ou non
    const [isEditableTitle, setIsEditableTitle] = useState<boolean>(false);
    const [isEditableDescription, setIsEditableDescription] = useState<boolean>(false);

    const [initialTitle, setInitialTitle] = useState<string>('');
    const [initialDescription, setInitialDescription] = useState<string>('');
    
    // Permet de changer les titres et description
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
    
    // Restaure le contenu initial du textarea
    const cancelChangeTitle = () => {
        setTitle(initialTitle);
        setIsEditableTitle(false);
    };
    
    const cancelChangeDescription = () => {
        setDescription(initialDescription);
        setIsEditableDescription(false);
    };
    
    // Supprime toute la description    
    const deleteAllDescription = () => {
        setDescription('');
    };

    const handleApplyChanges = () => {
        handleClose();
    };

    // Supprime la tâche
    const deleteTask = () => {
        handleDeleteTask(); // Appeler la fonction de suppression de la tâche
        handleClose(); // Fermer la fenêtre modale après la suppression de la tâche
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <div style={{width:'50%', height:'80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '15px', backgroundColor:'bisque', border:'solid black'}}>
                <div className='outlineLeftTaskParametre'>
                        
                    <textarea className='titleTask' placeholder="Ajouter un titre" disabled={!isEditableTitle} value={title} onChange={(e) => setTitle(e.target.value)}>
                        {taskTitle ? taskTitle : "Placeholder"}
                    </textarea>

                    {isEditableTitle ? (
                        <>
                            <button type="button" className='buttonLeftTaskParametre' onClick={cancelChangeTitle}  style={{float:'left'}}>
                                Annuler
                            </button>

                            <button type="button" className='buttonLeftTaskParametre' onClick={changeTitleTask} style={{float:'right'}}>
                                Valider
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="button" className='buttonLeftTaskParametre' onClick={changeTitleTask} style={{float:'right'}}>
                                Modifier le titre
                            </button>
                        </>
                    )}
                
                    <p className='textLeftTaskParametre outline'>Description</p>

                    <textarea className='descriptionTask' placeholder="Ajouter une description" disabled={!isEditableDescription} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    {isEditableDescription ? (
                        <>
                            <button type="button" className='buttonLeftTaskParametre' onClick={cancelChangeDescription} style={{float:'left'}}>
                                Annuler
                            </button>

                            <button type="button" className='buttonLeftTaskParametre' onClick={changeDescription} style={{float:'right'}}>
                                Valider
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="button" className='buttonLeftTaskParametre' onClick={deleteAllDescription} style={{float:'left'}}>
                                Tout supprimmer
                            </button>

                            <button type="button" className='buttonLeftTaskParametre' onClick={changeDescription} style={{float:'right'}}>
                                Modifier la description
                            </button>
                        </>
                    )} 

                    <button type="button" className='buttonApplyTaskParametre' onClick={handleApplyChanges} style={{float:'right'}}>
                        Appliquer les modifications
                    </button>

                    <button type="button" className='buttonCancelTaskParametre' onClick={handleClose} style={{float:'right'}}>
                        Annuler les modifications et quitter
                    </button>
                </div>

                <div className='outlineRightTaskParametre'>
                    <p>Suggérées</p>
                    <button type="button" className='buttonRightTaskParametre'>
                        Rejoindre
                    </button>

                    <hr/>

                    <p>Ajouter à la carte</p>
                    {buttonAdd.map((button, index) => (
                        <button type="button" key={index} className='buttonRightTaskParametre'>
                            <p>{button.text}</p>
                        </button>
                    ))}

                    <hr/>

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

export default ResponsiveListParametre;