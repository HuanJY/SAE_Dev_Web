import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListMenu from './ListMenu';
import TaskParametre from './TaskParametre';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:5173/api',
  withCredentials: true,
});

interface ListAzu {
    idList: number;
    listName: string;
    idBoard: number;
    tasks: Task[];
}

interface Task {
    idTask: number;
    taskName: string;
    taskDescription: string;
    idList: number;
}

const ResponsiveTodoList: React.FC = () => {
    const { idBoard } = useParams<{ idBoard: string }>(); // Utilisation de useParams pour obtenir l'ID du tableau
    const [anchorEls, setAnchorEls] = useState<(HTMLElement | null)[]>([]);
    const [lists, setLists] = useState<ListAzu[]>([]);
    const [visibility, setVisibility] = useState<boolean[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedListIndex, setSelectedListIndex] = useState<number | null>(null);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);

    const fetchLists = async () => {
        try {
            const response = await api.post(`/list/${idBoard}`);
            const listsData = response.data;

            // Récupérer les tâches pour chaque liste
            const listsWithTasks = await Promise.all(listsData.map(async (list: ListAzu) => {
                const tasksResponse = await api.post(`/task/${list.idList}`);
                return {
                    ...list,
                    tasks: tasksResponse.data
                };
            }));

            const visibility = listsWithTasks.map(() => true); // Initialisez comme vous le souhaitez
            setLists(listsWithTasks);
            setVisibility(visibility);
            setAnchorEls(new Array(listsWithTasks.length).fill(null));
        } catch (error) {
            console.error('Erreur lors de la récupération des listes et des tâches :', error);
        }
    };

    useEffect(() => {
        fetchLists();
    }, [idBoard]);

    const handleDescriptionChange = async (listIndex: number, taskIndex: number, newDescription: string) => {
        const taskId = lists[listIndex].tasks[taskIndex].idTask;

        try {
            await api.post(`/task/${taskId}/modifyTask`, {
                taskName: lists[listIndex].tasks[taskIndex].taskName,
                taskDescription: newDescription,
            });

            fetchLists();
        } catch (error) {
            console.error('Erreur lors de la modification de la description de la tâche :', error);
        }
    };

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

    const handleAddList = async () => {
        try {
            const newList = {
                listName: 'Nouvelle liste',
                idBoard: idBoard ? parseInt(idBoard) : null
            };
    
            await api.post(`/list/addList`, newList);
    
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la liste :', error);
        }
    };

    const handleAddTask = async (listIndex: number) => {
        try {
            const newTask = {
                taskName: 'Nouvelle tâche',
                taskDescription: '',
                idList: lists[listIndex].idList
            };
    
            await api.post(`/task/addTask`, newTask);
    
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la tâche :', error);
        }
    };

    const handleDeleteList = async (listIndex: number) => {
        const listId = lists[listIndex].idList;
    
        try {
            await api.delete(`/list/dropList/${listId}`);
    
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de la suppression de la liste :', error);
        }
    };

    const handleDeleteTask = async (listIndex: number, taskIndex: number) => {
        const taskId = lists[listIndex].tasks[taskIndex].idTask;
    
        try {
            await api.delete(`/task/${taskId}/dropTask`);
    
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de la suppression de la tâche :', error);
        }
    };

    const handleDeleteAllTasks = async (listIndex: number) => {
        const listId = lists[listIndex].idList;
    
        try {
            await api.delete(`/task/${listId}/dropAllTaskByIdList`);
    
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de la suppression de toutes les tâches :', error);
        }
    };

    const handleTitleChangeTask = async (listIndex: number, taskIndex: number, newTitle: string) => {
        const taskId = lists[listIndex].tasks[taskIndex].idTask;
    
        try {
            await api.post(`/task/${taskId}/modifyTask`, {
                taskName: newTitle,
                taskDescription: lists[listIndex].tasks[taskIndex].taskDescription,
            });
    
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de la modification de la tâche :', error);
        }
    };

    const handleTitleChangeList = async (listIndex: number, newTitle: string) => {
        const listId = lists[listIndex].idList;

        try {
            await api.post(`/list/${listId}/modifyList`, { listName: newTitle });
            fetchLists();
        } catch (error) {
            console.error('Erreur lors de la modification du titre de la liste :', error);
        }
    };

    return (
        <div className="right-side" style={{ overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'max-content'}}>
                {lists.map((list, listIndex) => (
                    <div className='toDoListForm' key={list.idList}>
                        <div className='headerToDoList'>
                            <div style={{ width: '73%', color: 'white', textAlign: 'center' }}>
                                <p>{list.listName}</p>
                            </div>
                            <div className='outline' style={{ width: '10%', marginRight: '2%', opacity: visibility[listIndex] ? 0 : 1 }}>
                                <VisibilityIcon />
                            </div>
                            <button type='button' className='buttonForm' style={{ width: '17%', padding: '2%' }} onClick={(event) => handleClick(event, listIndex)}>
                                <TuneIcon />
                            </button>
                            <ListMenu
                                anchorEl={anchorEls[listIndex]}
                                handleClose={() => handleClose(listIndex)}
                                handleAddTask={() => handleAddTask(listIndex)}
                                handleDeleteAllTasks={() => handleDeleteAllTasks(listIndex)}
                                handleDeleteList={() => handleDeleteList(listIndex)}
                                handleTitleChangeList={(newTitle: string) => handleTitleChangeList(listIndex, newTitle)} // Pass handleTitleChangeList
                                currentTitle={list.listName} // Pass currentTitle
                            />
                        </div>
    
                        <div style={{ maxHeight: '580px', overflowY: 'auto', padding: '1%', backgroundImage: 'url(ModeleListBG/Colore.jpeg)', backgroundSize: 'cover' }}>
                            {list.tasks.map((task, taskIndex) => (
                                <div key={task.idTask} style={{ position: 'relative' }}>
                                    <button type='button' className='taskForm buttonForm' onClick={() => handleClickTask(listIndex, taskIndex)} style={{ marginTop: '2%', marginBottom: '2%' }}>
                                        <p>{task.taskName}</p>
    
                                    </button>
                                    <TaskParametre
                                        open={isModalOpen && selectedListIndex === listIndex && selectedTaskIndex === taskIndex}
                                        handleClose={() => {
                                            setIsModalOpen(false);
                                            setSelectedListIndex(null);
                                            setSelectedTaskIndex(null);
                                        }}
                                        handleTitleChange={(newTitle: string) => handleTitleChangeTask(listIndex, taskIndex, newTitle)}
                                        handleDescriptionChange={(newDescription: string) => handleDescriptionChange(listIndex, taskIndex, newDescription)}
                                        taskTitle={task.taskName}
                                        taskDescription={task.taskDescription}
                                        handleDeleteTask={() => handleDeleteTask(listIndex, taskIndex)}
                                    />
                                </div>
                            ))}
                        </div>
    
                        <div className='footerToDoList'>
                            <button type='button' className='buttonForm' onClick={() => handleAddTask(listIndex)} style={{ width: '100%', height:'50px', marginRight: '2%'}}>
                                <AddIcon /> <p>Ajouter une tâche</p>
                            </button>
                        </div>
                    </div>
                ))}
    
                <button type='button' className='buttonForm' onClick={handleAddList} style={{ width: '400px', height: '40px' }}>
                    <AddIcon /> <p>Ajouter une liste</p>
                </button>
            </div>
        </div>
    );
}

export default ResponsiveTodoList;