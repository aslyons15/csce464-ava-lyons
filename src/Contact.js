import React from 'react';
import './CSCE464Final.css';
import { Typography } from '@mui/material';

const Contact = ({ darkMode, langMode }) => {
  return (
    <body style={{ backgroundColor: darkMode ? 'black' : 'white' }} class="center">
      <Typography style={{ color: darkMode ? 'white' : 'black' }} variant="h2" gutterBottom marginTop={'64px'}>
      {langMode ? 'Me contacter !' : 'Contact Me!'}
      </Typography>
      <Typography style={{ color: darkMode ? 'white' : 'black' }} variant="h5" gutterBottom marginTop={'64px'}>
      {langMode ? 'Email personnel :' : 'Personal Email:'}
        <a style={{ color: darkMode ? 'lightblue' : 'blue' }} href='mailto:aslyons15@gmail.com' target="_blank" rel="noreferrer"> aslyons15@gmail.com</a>
      </Typography>
      <Typography style={{ color: darkMode ? 'white' : 'black' }} gutterBottom variant="h5" marginTop={'10px'} >
        {langMode ? 'Email scolaire :' : 'School Email:'}
        <a style={{ color: darkMode ? 'lightblue' : 'blue' }} href='mailto:alyons7@huskers.unl.edu' target="_blank" rel="noreferrer"> alyons7@huskers.unl.edu</a>
      </Typography>
      <Typography style={{ color: darkMode ? 'white' : 'black' }} variant="h5" gutterBottom marginTop={'10px'} >
      {langMode ? 'Email professionnel :' : 'Work Email:'} ava.lyons@*******.com
      </Typography>
      <Typography style={{ color: darkMode ? 'white' : 'black' }} variant="h5" gutterBottom marginTop={'10px'}>
      {langMode ? 'Numéro de téléphone :' : 'Phone Number:'}
        <a style={{ color: darkMode ? 'lightblue' : 'blue' }} href='tel:+16305208763' target="_blank" rel="noreferrer"> 630-520-8763</a>
      </Typography>
    </body>

  );
};

export default Contact;


