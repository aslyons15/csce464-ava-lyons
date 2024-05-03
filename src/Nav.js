import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, Switch, FormControlLabel, FormGroup, MenuItem } from '@mui/material';
import './CSCE464Final.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Nav = ({ darkMode, toggleDarkMode, langMode, toggleLangMode }) => {
  const navLinkStyle = {
    color: darkMode ? 'black' : 'white',
    textDecoration: 'none',
  };
  const navStyle = {
    backgroundColor: darkMode ? "inherit" : '',
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <><AppBar color="secondary" style={navStyle} position="fixed" component="nav">
      <Toolbar>
        <Typography color="inherit" variant="h6" component={Link} to="/" style={navLinkStyle} sx={{ flexGrow: 1 }}>
          {langMode ? "Projet CSCE 464 d'Ava" : "Ava's CSCE 464 Project"}
        </Typography>
        <Button color="inherit" component={Link} to="/" style={navLinkStyle}>{langMode ? "Accueil" : "Home"}</Button>
        <Button color="inherit" component={Link} to="/resume" style={navLinkStyle}>{langMode ? "CV" : "Resume"}</Button>
        <Button color="inherit" component={Link} to="/photos" style={navLinkStyle}>{langMode ? "Galerie de photos" : "Photo Gallery"}</Button>
        <Button color="inherit" component={Link} to="/games" style={navLinkStyle}>{langMode ? "Jeux" : "Games"}</Button>
        <Button color="inherit" component={Link} to="/books" style={navLinkStyle}>{langMode ? "Livres" : "Books"}</Button>
        <Button color="inherit" component={Link} to="/feedback" style={navLinkStyle}>{langMode ? "Retour d'information" : "Feedback"}</Button>
        <Button color="inherit" component={Link} to="/contact" style={navLinkStyle}>{langMode ? "Me contacter" : "Contact Me"}</Button>

        <IconButton
          onClick={handleClick}
          color="inherit"
          style={navLinkStyle}
        >
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
              label={langMode ? "Mode Sombre" : "Dark Mode"}
            />
            <FormControlLabel
              control={<Switch checked={langMode} onChange={toggleLangMode} />}
              label={langMode ? "Langue: Fr" : "Language: Fr"}
            />

          </FormGroup>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Nav;

