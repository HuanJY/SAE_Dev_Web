import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ResponsiveHeadBar() {

    return (
        <AppBar position="static" sx={{borderBottom:'solid black'}}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6" sx={{mr: 2, color: 'white', textDecoration: 'none', float:'left'}}>
                        <p> Azu <img src="./Image/OsakaPlane.jpg" height='20' width='30' alt="logo" /> Trello </p>
                    </Typography>   

                    <div>
                        <button type='button'>
                            Deconnexion
                        </button>
                    </div>

                </Toolbar>
            </Container>
        </AppBar>
     );
}

export default ResponsiveHeadBar;