import React, { useState } from 'react';
import { Box, Button, ListItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';

const ResponsiveTodoList: React.FC = () => {
    const [lists, setLists] = useState<string[][]>([['']]);

    const handleAddList = () => {
        setLists([...lists, ['']]);
    };

    const handleAddTask = (listIndex: number) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].push('');
        setLists(updatedLists);
    };

    return (
        <div className="right-side" style={{ overflowX: 'auto'}}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'max-content'}}>
                {lists.map((tasks, listIndex) => (
                    <Box key={listIndex} sx={{ width: '400px', height:'', backgroundColor: 'white', fontFamily: 'monospace', overflow: 'hidden', border: 'solid black', borderRadius: '20px', marginRight: '20px'}}>
                        <Box sx={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 'solid black', padding:'2%' }}>
                            <Box sx={{ width: '85%', textAlign: 'center', color:'white'}}>
                                <p>Nouvelle liste</p>
                            </Box>

                            <Button sx={{textAlign: 'center', border: 'solid black', borderRadius: '20px', color: 'white' }}>
                                <TuneIcon/>
                            </Button>
                        </Box>

                        <Box sx={{ maxHeight: '580px', overflowY: 'auto', padding:'1%',backgroundImage:'url(Modele_Liste/Coloré.jpeg)', backgroundSize: 'cover'}}>
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
