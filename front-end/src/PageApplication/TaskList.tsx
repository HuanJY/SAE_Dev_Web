import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

interface Task {
    idTask: number;
    taskName: string;
    taskDescription: string;
    idList: number;
}

interface TaskComponentProps {
    listId: number;
    tasks: Task[];
    onAddTask: (newTask: Task) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({ listId, tasks, onAddTask }) => {
    
    const handleAddTask = async () => {
        const newTask = { idList: listId, taskName: 'Nouvelle tâche', taskDescription: 'Description de la tâche' };
    
        try {
            const response = await axios.post('http://localhost:8080/api/task/addTask', newTask);
            console.log('Création de la tâche réussie');
    
            onAddTask({
                idTask: response.data.idTask,
                taskName: response.data.taskName,
                taskDescription: response.data.taskDescription,
                idList: response.data.idList
            });
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la tâche :', error);
        }
    };

    return (
        <div>
            <div style={{ maxHeight: '580px', overflowY: 'auto', padding: '1%', backgroundImage: 'url(ModeleListBG/Colore.jpeg)', backgroundSize: 'cover' }}>
                {tasks.map((task) => (
                    <div key={task.idTask} style={{ position: 'relative' }}>
                        <button type='button' className='taskForm'>
                            <p>{task.taskName}</p>
                            <p>{task.taskDescription}</p>
                        </button>
                    </div>
                ))}
            </div>
            <div className='footerToDoList'>
                <button type='button' onClick={handleAddTask} style={{ width: '83%', marginRight: '2%' }}>
                    <AddIcon /> <p>Ajouter une tâche</p>
                </button>
            </div>
        </div>
    );
};

export default TaskComponent;
