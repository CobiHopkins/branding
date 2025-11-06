import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar component="nav" aria-label="Main navigation" position="sticky" sx={{ backgroundColor: 'secondary.dark'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cobi Hopkins
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
