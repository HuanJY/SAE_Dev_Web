import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import SetTitleList from '../components/SetTitleList';
import TaskComponent from './TaskList';
import { useParams } from 'react-router-dom';

interface List {
    id: number;
    listName: string;
    tasks: { idTask: number; taskName: string; taskDescription: string; idList: number }[];
}

const ListComponent: React.FC = () => {
    const [lists, setLists] = useState<List[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const { idBoard } = useParams<{ idBoard: string }>();

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/list/${idBoard}`);
                const fetchedLists = response.data.map((list: any) => ({
                    ...list,
                    tasks: list.tasks || []
                }));
                setLists(fetchedLists);
            } catch (error) {
                console.error('Erreur lors de la récupération des listes :', error);
            }
        };

        fetchLists();
    }, [idBoard]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (title: string) => {
        if (!title.trim()) {
            setError('Veuillez saisir un titre valide pour la liste.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/list/addList', {
                idBoard: Number(idBoard),
                listName: title,
                tasks: []
            });
            console.log('Création de la liste réussie');

            const newList = {
                id: response.data.idList,
                listName: response.data.listName,
                tasks: response.data.tasks || []
            };

            setLists([...lists, newList]);
            setError('');
            setOpen(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la liste :', error);
        }
    };

    const handleCancel = () => {
        setOpen(false);
        setError('');
    };

    const handleAddTaskToList = (listIndex: number, newTask: { idTask: number; taskName: string; taskDescription: string; idList: number }) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].tasks.push(newTask);
        setLists(updatedLists);
    };

    return (
        <div className="right-side" style={{ overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'max-content' }}>            
                {lists.map((list, listIndex) => (
                    <div className='toDoListForm' key={list.id}>
                        <div className='headerToDoList'>
                            <div style={{ width: '73%', color: 'white', textAlign: 'center' }}>
                                <p>{list.listName}</p>
                            </div>
                        </div>
                        <TaskComponent listId={list.id} tasks={list.tasks} onAddTask={(newTask) => handleAddTaskToList(listIndex, newTask)} />
                    </div>
                ))}

                <button type='button' onClick={handleClickOpen} style={{ width: '400px', height: '40px' }}>
                    <AddIcon /> <p>Ajouter une liste</p>
                </button>
                <SetTitleList open={open} handleClose={handleClose} handleCancel={handleCancel} error={error} />
            </div>
        </div>
    );
};

export default ListComponent;
