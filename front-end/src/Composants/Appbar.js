import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const creation = ['Créer un tableau', 'Créer un espace de travail'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar color>
    
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '10px'}}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>Espaces de travail</a>
              </Button>

              <Box sx={{ my: 2, display: 'block', border: '1px solid white', borderRadius: '5px', marginLeft: '10px' }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ color: 'white', display: 'block' }}>
                  Créer
                </IconButton>
              </Box>
                <Menu
                  sx={{ mt: '45px'}}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {creation.map((creationItem) => (
                    <MenuItem key={creationItem} onClick={handleCloseUserMenu}>
                      {creationItem === 'Créer un tableau' && <SpaceDashboardIcon style={{fontSize:"smaller", marginRight: '8px' }}/>}
                      {creationItem === 'Créer un espace de travail' && <PeopleAltIcon style={{fontSize:"smaller", marginRight: '8px' }}/>}
                      <Typography textAlign="center" sx={
                        creationItem === 'Créer un tableau' ? { fontFamily: 'monospace', color: 'black', marginRight: '10px'} : 
                        creationItem === 'Créer un espace de travail' ? { fontFamily: 'monospace', color: 'black' } : null}>
                        {creationItem}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>Deconnexion</a>
            </Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;