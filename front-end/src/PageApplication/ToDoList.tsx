import React, { useState } from 'react';
import { Box, Button, ListItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const ResponsiveTodoList: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [lists, setLists] = useState<string[][]>([['']]);
    const [editTitleOpen, setEditTitleOpen] = useState(false);
    const [newTitle, setNewTitle] = useState("Nouvelle liste");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddList = () => {
        setLists([...lists, ['']]);
    };

    const handleAddTask = (listIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].push('');
        setLists(updatedLists);
    };

    const handleEditTitle = () => {
        setEditTitleOpen(true);
        handleClose(); // Ferme également le menu lorsqu'on commence à modifier le titre
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };

    const handleTitleSave = () => {
        // Ici, vous pouvez ajouter la logique pour enregistrer le nouveau titre
        console.log("Nouveau titre :", newTitle);
        setEditTitleOpen(false);
    };

    return (
        <div className="right-side" style={{ overflowX: 'auto'}}>

            <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'max-content'}}>

                {lists.map((tasks, listIndex) => (
                    <Box key={listIndex} sx={{ width: '400px', height:'', backgroundColor: 'white', fontFamily: 'monospace', overflow: 'hidden', border: 'solid black', borderRadius: '20px', marginRight: '20px'}}>

                        <Box sx={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 'solid black', padding:'2%'}}>

                            <Box  sx={{width: '85%', color: 'white', float:'left', textAlign:'center'}} onClick={handleEditTitle}>
                                {editTitleOpen ? (<TextField size="small" autoFocus value={newTitle} onChange={handleTitleChange} onBlur={handleTitleSave}/>) : (
                                    <p>{newTitle}</p>
                                )}
                            </Box>

                            <Button sx={{border: 'solid black', borderRadius: '20px', color: 'white', float:'right'}} onClick={handleClick}>
                                <TuneIcon/>
                            </Button> 
                            

                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                                <MenuItem onClick={handleClose}>Archiver cette liste</MenuItem>
                            </Menu>
                        </Box>

                        <Box sx={{ maxHeight: '580px', overflowY: 'auto', padding:'1%',backgroundImage:'url(Modele_Liste_BG/Colore.jpeg)', backgroundSize: 'cover'}}>
                            {tasks.map((task, taskIndex) => (
                                <ListItem key={taskIndex} >
                                    <Button sx={{ width: '100%', height:'auto', textAlign: 'center', border:'solid black', borderRadius:'20px', backgroundColor:'grey', color:'white', overflowX: 'auto'}}>
                                        <p>Nouvelle tâche</p>
                                    </Button>
                                </ListItem>
                            ))}
                        </Box>

                        <Box sx={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 'solid black', padding:'2%' }}>
                            <Button onClick={() => handleAddTask(listIndex)} sx={{width: '83%', border:'solid black', borderRadius: '20px', marginRight:'2%', color:'white'}}>
                                <AddIcon/> Ajouter une tâche
                            </Button>
                            
                            <Button sx={{ width: '10%', textAlign: 'center', border: 'solid black', borderRadius: '20px', color:'white'}}>
                                <TuneIcon/>
                            </Button>
                        </Box>
                    </Box>
                ))}

                <Box sx={{ justifyContent: 'center'}}>
                    <Button onClick={handleAddList} sx={{width:'400px', backgroundColor: 'grey', color: 'white', border:'solid black', borderRadius: '20px'}}>
                        <AddIcon/> Ajouter une liste
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default ResponsiveTodoList;