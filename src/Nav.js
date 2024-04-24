import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './CSCE464Final.css';

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const Nav = () => {
  return (
    <AppBar position="fixed" component="nav" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ava's CSCE 464 Project
        </Typography>
        <Button color="inherit" component={Link} to="/" style={navLinkStyle}>Resume</Button>
        <Button color="inherit" component={Link} to="/photos" style={navLinkStyle}>Photo Gallery</Button>
        <Button color="inherit" component={Link} to="/games" style={navLinkStyle}>Games</Button>
        <Button color="inherit" component={Link} to="/books" style={navLinkStyle}>Books</Button>
        <Button color="inherit" component={Link} to="/feedback" style={navLinkStyle}>Feedback</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
