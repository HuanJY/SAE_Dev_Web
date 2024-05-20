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
    const [labelsPriority, setLabelsPriority] = useState<string[][]>(() => {
        const storedLabelsPriority = localStorage.getItem('taskLabelsPriority');
        return storedLabelsPriority ? JSON.parse(storedLabelsPriority) : lists.map(() => []);
    });
    const [labelsStatue, setLabelsStatue] = useState<string[][]>(() => {
        const storedLabelsStatue = localStorage.getItem('taskLabelsStatue');
        return storedLabelsStatue ? JSON.parse(storedLabelsStatue) : lists.map(() => []);
    });
    

    useEffect(() => {
        localStorage.setItem('todoLists', JSON.stringify(lists));
        localStorage.setItem('taskLabelsPriority', JSON.stringify(labelsPriority));
        localStorage.setItem('taskLabelsStatue', JSON.stringify(labelsStatue));
    }, [lists, labelsPriority, labelsStatue]);

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
        const newLists = [...lists, ['Nouvelle tâche']];
        const newAnchorEls = [...anchorEls, null];
        const newVisibility = [...visibility, true];
        const newLabelsPriority = [...labelsPriority, []];
        const newLabelsStatue = [...labelsStatue, []];
        const newArchivedTasks = [...archivedTasks, [false]];
        setLists(newLists);
        setAnchorEls(newAnchorEls);
        setVisibility(newVisibility);
        setLabelsPriority(newLabelsPriority);
        setLabelsStatue(newLabelsStatue);
        setArchivedTasks(newArchivedTasks);
    };

    const handleAddTask = (listIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].push('Nouvelle tâche');
        const updatedLabelsPriority = [...labelsPriority];
        const updatedLabelsStatue = [...labelsStatue];
        const updatedArchivedTasks = [...archivedTasks];
        updatedLabelsPriority[listIndex].push('');
        updatedLabelsStatue[listIndex].push('');
        updatedArchivedTasks[listIndex].push(false);
        setLists(updatedLists);
        setLabelsPriority(updatedLabelsPriority);
        setLabelsStatue(updatedLabelsStatue);
        setArchivedTasks(updatedArchivedTasks);
    };

    const handleToggleVisibility = (listIndex: number) => {
        const updatedVisibility = [...visibility];
        updatedVisibility[listIndex] = !updatedVisibility[listIndex];
        setVisibility(updatedVisibility);
    };

    const handleDeleteList = (listIndex: number) => {
        const updatedLists = lists.filter((_, index) => index !== listIndex);
        const updatedLabelsPriority = labelsPriority.filter((_, index) => index !== listIndex);
        const updatedLabelsStatue = labelsStatue.filter((_, index) => index !== listIndex);
        const updatedArchivedTasks = archivedTasks.filter((_, index) => index !== listIndex);
        setLists(updatedLists);
        setLabelsPriority(updatedLabelsPriority);
        setLabelsStatue(updatedLabelsStatue);
        setArchivedTasks(updatedArchivedTasks);
        handleClose(listIndex);
    };

    const handleDeleteTask = (listIndex: number, taskIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].splice(taskIndex, 1);
        const updatedLabelsPriority = [...labelsPriority];
        const updatedLabelsStatue = [...labelsStatue];
        updatedLabelsPriority[listIndex].splice(taskIndex, 1);
        updatedLabelsStatue[listIndex].splice(taskIndex, 1);
        const updatedArchivedTasks = [...archivedTasks];
        updatedArchivedTasks[listIndex].splice(taskIndex, 1); // Supprimer l'entrée correspondante dans archivedTasks
        setLists(updatedLists);
        setLabelsPriority(updatedLabelsPriority);
        setLabelsStatue(updatedLabelsStatue);
        setArchivedTasks(updatedArchivedTasks); // Mettre à jour l'état archivedTasks
        setIsModalOpen(false);
    };

    const handleDeleteAllTasks = (listIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex] = [];
        const updatedLabelsPriority = [...labelsPriority];
        const updatedLabelsStatue = [...labelsStatue];
        updatedLabelsPriority[listIndex] = [];
        updatedLabelsStatue[listIndex] = [];
        const updatedArchivedTasks = [...archivedTasks];
        updatedArchivedTasks[listIndex] = []; // Supprimer toutes les entrées correspondantes dans archivedTasks
        setLists(updatedLists);
        setLabelsPriority(updatedLabelsPriority);
        setLabelsStatue(updatedLabelsStatue);
        setArchivedTasks(updatedArchivedTasks); // Mettre à jour l'état archivedTasks
        handleClose(listIndex);
    };

    const handleTitleChange = (listIndex: number, taskIndex: number, newTitle: string) => {
        const updatedLists = [...lists];
        updatedLists[listIndex][taskIndex] = newTitle;
        setLists(updatedLists);
        localStorage.setItem(`taskTitle-${listIndex}-${taskIndex}`, newTitle);
    };

    const handleToggleLabelsPriority = (listIndex: number, taskIndex: number, labelsPriorityStyle: string) => {
        const updatedLabelsPriority = [...labelsPriority];
        if (labelsPriorityStyle === 'Retirer les étiquettes') {
            updatedLabelsPriority[listIndex][taskIndex] = '';
        } else {
            updatedLabelsPriority[listIndex][taskIndex] = labelsPriorityStyle;
        }
        setLabelsPriority(updatedLabelsPriority);
    };

    const handleToggleLabelsStatue = (listIndex: number, taskIndex: number, labelsStatueStyle: string) => {
        const updatedLabelsStatue = [...labelsStatue];
        if (labelsStatueStyle === 'Retirer les étiquettes') {
            updatedLabelsStatue[listIndex][taskIndex] = '';
        } else {
            updatedLabelsStatue[listIndex][taskIndex] = labelsStatueStyle;
        }
        setLabelsStatue(updatedLabelsStatue);
    };

    const [archivedTasks, setArchivedTasks] = useState<boolean[][]>(() => lists.map(() => []));

    const handleArchiveTask = (listIndex: number, taskIndex: number) => {
        const updatedArchivedTasks = [...archivedTasks];
        updatedArchivedTasks[listIndex][taskIndex] = !updatedArchivedTasks[listIndex][taskIndex];
        setArchivedTasks(updatedArchivedTasks);
        setIsModalOpen(false);
    };

    return (
        <div className="right-side" style={{ overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'max-content' }}>
                {lists.map((tasks, listIndex) => (
                    <div className='toDoListForm' key={listIndex}>
                        <div className='headerToDoList'>
                            <div style={{ width: '73%', color: 'white', textAlign: 'center' }}>
                                <p>Nouvelle Liste</p>
                            </div>
                            <div className='outline' style={{ width: '10%', marginRight: '2%', opacity: visibility[listIndex] ? 0 : 1 }}>
                                <VisibilityIcon />
                            </div>
                            <button type='button' style={{ width: '17%', padding: '2%' }} onClick={(event) => handleClick(event, listIndex)}>
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

                        <div style={{ maxHeight: '580px', overflowY: 'auto', padding: '1%', backgroundImage: 'url(ModeleListBG/Colore.jpeg)', backgroundSize: 'cover' }}>
                            {tasks.map((task, taskIndex) => (
                                <div key={taskIndex} style={{ position: 'relative'}}>
                                    <button type='button' className='taskForm' onClick={() => handleClickTask(listIndex, taskIndex)} style={{ marginTop: '2%', marginBottom: '2%', backgroundColor: archivedTasks[listIndex][taskIndex] ? '#DCDCDC' : 'grey'}}>
                                        <p>{task}</p>

                                        <div className='labelsTaskForm'>
                                            {labelsPriority[listIndex][taskIndex] === 'Principale' && (
                                                <div className='labels' style={{backgroundColor: 'red'}}></div>
                                            )}

                                            {labelsPriority[listIndex][taskIndex] === 'Secondaire' && (
                                                <div className='labels' style={{backgroundColor: 'orange'}}></div>
                                            )}

                                            {labelsPriority[listIndex][taskIndex] === 'Tertiaire' && (
                                                <div className='labels' style={{backgroundColor: 'yellow'}}></div>
                                            )}
                                        </div>

                                        <div className='labelsTaskForm' style={{marginTop:'20px'}}>
                                            {labelsStatue[listIndex][taskIndex] === 'Urgent' && (
                                            <div className='labels' style={{backgroundColor: 'green'}}></div>
                                            )}

                                            {labelsStatue[listIndex][taskIndex] === 'Très Urgent' && (
                                                <div className='labels' style={{backgroundColor: 'blue'}}></div>
                                            )}
                                        </div>

                                    </button>
                                    <TaskParametre
                                        open={isModalOpen && selectedListIndex === listIndex && selectedTaskIndex === taskIndex}
                                        handleClose={() => {
                                            setIsModalOpen(false);
                                            setSelectedListIndex(null);
                                            setSelectedTaskIndex(null);
                                        }}
                                        handleTitleChange={(newTitle: string) => handleTitleChange(listIndex, taskIndex, newTitle)}
                                        taskTitle={task}
                                        handleDeleteTask={() => handleDeleteTask(listIndex, taskIndex)}
                                        handleToggleLabelsPriority={(labelsPriorityStyle: string) => handleToggleLabelsPriority(listIndex, taskIndex, labelsPriorityStyle)}
                                        handleToggleLabelsStatue={(labelsStatueStyle: string) => handleToggleLabelsStatue(listIndex, taskIndex, labelsStatueStyle)}
                                        handleArchiveTask={() => handleArchiveTask(listIndex, taskIndex)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='footerToDoList'>
                            <button type='button' onClick={() => handleAddTask(listIndex)} style={{ width: '83%', marginRight: '2%' }}>
                                <AddIcon /> <p>Ajouter une tâche</p>
                            </button>
                            <button type='button' className='iconParametre'>
                                <TuneIcon />
                            </button>
                        </div>
                    </div>
                ))}

                <button type='button' onClick={handleAddList} style={{ width: '400px', height: '40px' }}>
                    <AddIcon /> <p>Ajouter une liste</p>
                </button>
            </div>
        </div>
    );
};

export default ResponsiveTodoList;
