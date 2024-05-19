import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListMenu from '../components/ListMenu';
import TaskParametre from '../components/TaskParametre';

const ResponsiveTodoList: React.FC = () => {
    const [anchorEls, setAnchorEls] = useState<(HTMLElement | null)[]>([]);
    const [lists, setLists] = useState<string[][]>(() => {
        const storedLists = localStorage.getItem('todoLists');
        return storedLists ? JSON.parse(storedLists) : [[]];
    });
    const [visibility, setVisibility] = useState<boolean[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedListIndex, setSelectedListIndex] = useState<number | null>(null);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);
    const [labels, setLabels] = useState<string[][]>(() => {
        const storedLabels = localStorage.getItem('taskLabels');
        return storedLabels ? JSON.parse(storedLabels) : lists.map(() => []);
    });

    useEffect(() => {
        localStorage.setItem('todoLists', JSON.stringify(lists));
        localStorage.setItem('taskLabels', JSON.stringify(labels));
    }, [lists, labels]);

    const handleClickTask = (listIndex: number, taskIndex: number) => {
        setSelectedListIndex(listIndex);
        setSelectedTaskIndex(taskIndex);
        setIsModalOpen(true);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, listIndex: number) => {
        const updatedAnchorEls = [...anchorEls];
        updatedAnchorEls[listIndex] = event.currentTarget;
        setAnchorEls(updatedAnchorEls);
    };

    const handleClose = (listIndex: number) => {
        const updatedAnchorEls = [...anchorEls];
        updatedAnchorEls[listIndex] = null;
        setAnchorEls(updatedAnchorEls);
    };

    const handleAddList = () => {
        const newLists = [...lists, ['Nouvelle tâche']]; // Ajoutez la tâche avec le titre par défaut
        const newAnchorEls = [...anchorEls, null];
        const newVisibility = [...visibility, true];
        const newLabels = [...labels, []];
        setLists(newLists);
        setAnchorEls(newAnchorEls);
        setVisibility(newVisibility);
        setLabels(newLabels);
    };

    const handleAddTask = (listIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].push('Nouvelle tâche'); // Ajouter une nouvelle tâche avec un libellé par défaut
        const updatedLabels = [...labels];
        updatedLabels[listIndex].push('');
        setLists(updatedLists);
        setLabels(updatedLabels);
    };

    const handleToggleVisibility = (listIndex: number) => {
        const updatedVisibility = [...visibility];
        updatedVisibility[listIndex] = !updatedVisibility[listIndex];
        setVisibility(updatedVisibility);
    };

    const handleDeleteList = (listIndex: number) => {
        const updatedLists = lists.filter((_, index) => index !== listIndex);
        const updatedLabels = labels.filter((_, index) => index !== listIndex);
        setLists(updatedLists);
        setLabels(updatedLabels);
        handleClose(listIndex);
    };

    const handleDeleteTask = (listIndex: number, taskIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].splice(taskIndex, 1); // Supprimer la tâche à l'index spécifié
        const updatedLabels = [...labels];
        updatedLabels[listIndex].splice(taskIndex, 1); // Supprimer l'étiquette correspondante
        setLists(updatedLists);
        setLabels(updatedLabels);
        setIsModalOpen(false); // Fermer la fenêtre modale après la suppression de la tâche
    };

    const handleDeleteAllTasks = (listIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex] = [];
        const updatedLabels = [...labels];
        updatedLabels[listIndex] = [];
        setLists(updatedLists);
        setLabels(updatedLabels);
        handleClose(listIndex);
    };

    const handleTitleChange = (listIndex: number, taskIndex: number, newTitle: string) => {
        const updatedLists = [...lists];
        updatedLists[listIndex][taskIndex] = newTitle;
        setLists(updatedLists);
        localStorage.setItem(`taskTitle-${listIndex}-${taskIndex}`, newTitle); // Stocker le titre dans le localStorage
    };

    const handleToggleLabel = (listIndex: number, taskIndex: number, labelStyle: string) => {
        const updatedLabels = [...labels];
        if (labelStyle === 'Retirer les étiquettes') {
            updatedLabels[listIndex][taskIndex] = ''; // Remove label
        } else {
            updatedLabels[listIndex][taskIndex] = labelStyle; // Add label
        }
        setLabels(updatedLabels);
    };

    return (
        <div className="right-side" style={{ overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'max-content' }}>
                {lists.map((tasks, listIndex) => (
                    <div className='toDoListForm' key={listIndex}>
                        <div className='headerToDoList'>                         
                            <div style={{width: '73%',color: 'white', textAlign: 'center'}}>
                                <p>Nouvelle Liste</p>
                            </div>
                            <div className='outline' style={{ width: '10%', marginRight: '2%', opacity: visibility[listIndex] ? 0 : 1 }}>
                                <VisibilityIcon />
                            </div>
                            <button type='button' style={{ width: '17%', padding:'2%'}} onClick={(event) => handleClick(event, listIndex)}>
                                <TuneIcon />
                            </button>
                            <ListMenu 
                                anchorEl={anchorEls[listIndex]} 
                                handleClose={() => handleClose(listIndex)} 
                                handleAddTask={() => handleAddTask(listIndex)} 
                                handleToggleVisibility={() => handleToggleVisibility(listIndex)} 
                                handleDeleteAllTasks={() => handleDeleteAllTasks(listIndex)} 
                                handleDeleteList={() => handleDeleteList(listIndex)}
                            />
                        </div>

                        <div style={{maxHeight: '580px', overflowY: 'auto', padding: '1%', backgroundImage: 'url(ModeleListBG/Colore.jpeg)', backgroundSize: 'cover'}}>
                            {tasks.map((task, taskIndex) => (
                                <div key={taskIndex} style={{ position: 'relative' }}>
                                    <div className={`labels label-red ${labels[listIndex][taskIndex] === 'Principale' ? 'label-visible' : ''}`}></div>
                                    <div className={`labels label-orange ${labels[listIndex][taskIndex] === 'Secondaire' ? 'label-visible' : ''}`}></div>
                                    <button type='button' className='taskForm' onClick={() => handleClickTask(listIndex, taskIndex)} style={{marginTop: '2%', marginBottom:'2%'}}>
                                        <p>{task}</p>
                                    </button>
                                    <TaskParametre 
                                        open={isModalOpen && selectedListIndex === listIndex && selectedTaskIndex === taskIndex} 
                                        handleClose={() => {
                                            setIsModalOpen(false);
                                            setSelectedListIndex(null);
                                            setSelectedTaskIndex(null);
                                        }}
                                        handleTitleChange={(newTitle: string) => handleTitleChange(listIndex, taskIndex, newTitle)} 
                                        taskTitle={task} // Passer le titre de la tâche
                                        handleDeleteTask={() => handleDeleteTask(listIndex, taskIndex)} // Nouvelle prop pour supprimer la tâche
                                        handleToggleLabel={(labelStyle: string) => handleToggleLabel(listIndex, taskIndex, labelStyle)} // Ajouter la fonction handleToggleLabel
                                    />
                                </div>
                            ))}                      
                        </div>

                        <div className='footerToDoList'>
                            <button type='button' onClick={() => handleAddTask(listIndex)} style={{ width: '83%', marginRight: '2%'}}>
                                <AddIcon/> <p>Ajouter une tâche</p>
                            </button>
                            <button type='button' className='iconParametre'>
                                <TuneIcon/>
                            </button>
                        </div>     
                    </div>
                ))}

                <button type='button' onClick={handleAddList} style={{width: '400px', height:'40px'}}>
                    <AddIcon /> <p>Ajouter une liste</p>
                </button>
            </div>
        </div>
    );
};

export default ResponsiveTodoList;
