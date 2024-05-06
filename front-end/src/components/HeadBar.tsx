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
                        <p> Azu <img src="./Modele_BG/OsakaPlane.jpg" height='20' width='30' alt="logo" /> Trello </p>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '10px'}}>
                        <Button sx={{ my: 2, color: 'white', display: 'block', textTransform:'none'}}>
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Espaces de travail</a>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            Deconnexion
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
     );
}

export default ResponsiveHeadBar;