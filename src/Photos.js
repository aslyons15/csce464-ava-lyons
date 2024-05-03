import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './CSCE464Final.css';

const Photos = ({ darkMode, langMode }) => {
  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
      <div className="cardcontainer">
        <Card className="image_card">
          <CardMedia
            component="img"
            height="500"
            image="Ava-photo.jpeg"
            alt='Profile'
          />
          <CardContent className="card_text">
            <Typography color="black" variant="h5">{langMode ? 'Ceci est ma photo de profil' : 'This is my profile picture'}</Typography>
            <Typography color="black" variant="h7">{langMode ? 'Je venais de terminer mes études secondaires et j\'ai utilisé cette même photo pour mon profil depuis.' : 'I was graduating from high school and have used this same photo for my profile since.'}</Typography>
          </CardContent>
        </Card>
        <Card className="image_card">
          <CardMedia
            component="img"
            height="500"
            image="ET.jpeg"
            alt='Eiffel Tower'
          />
          <CardContent className="card_text">
            <Typography color="black" variant="h5">
              {langMode ? 'Ceci est la Tour Eiffel' : 'This is the Eiffel Tower'}
            </Typography>
            <Typography color="black" variant="h7">
              {langMode ? "L'été dernier, j'ai eu l'opportunité de partir étudier à l'étranger en France ! C'était un rêve à long terme." : 'Last summer, I got the opportunity to study abroad in France! This was a long term dream of mine'}
            </Typography>
          </CardContent>
        </Card>
        <Card className="image_card">
          <CardMedia
            component="img"
            height="500"
            image="versailles.jpeg"
            alt='Versailles'
          />
          <CardContent className="card_text">
            <Typography color="black" variant="h5">
              {langMode ? 'Ceci est le palais de Versailles' : 'This is the palace of Versailles'}
            </Typography>
            <Typography color="black" variant="h7">
              {langMode ? "En étudiant en France, j'ai fait un voyage pour visiter le palais et ses jardins. C'était immense !" : 'While studying in France, I took a trip to go see the palace and its gardens. It was huge!'}
            </Typography>
          </CardContent>

        </Card>
      </div>
      <div className="cardcontainer">
        <Card className="image_card">
          <CardMedia
            component="img"
            height="500"
            image="Hawaii.jpeg"
            alt='Hawaii'
          />
          <CardContent className="card_text">
            <Typography color="black" variant="h5">
              {langMode ? 'Ceci est à Kona, Hawaï' : 'This is in Kona, Hawaii'}
            </Typography>
            <Typography color="black" variant="h7">
              {langMode ? "Je suis partie en vacances à Hawaii l'hiver dernier et je me suis éclatée !" : 'I went on vacation in Hawaii last winter and had a blast!'}
            </Typography>
          </CardContent>

        </Card>
        <Card className="image_card">
          <CardMedia
            component="img"
            height="500"
            image="Nav.jpeg"
            alt='The horse'
          />
          <CardContent className="card_text">
            <Typography color="black" variant="h5">
              {langMode ? 'Ceci est le cheval de mon meilleur ami' : 'This is my best friend\'s horse'}
            </Typography>
            <Typography color="black" variant="h7">
              {langMode ? 'Mon ami entraîne des chevaux. Le nom de ce cheval est Navigator' : 'My friend trains horses. This horse\'s name is Navigator'}
            </Typography>
          </CardContent>

        </Card>
        <Card className="image_card">
          <CardMedia
            component="img"
            height="500"
            image="omaha.jpeg"
            alt='Omaha'
          />

          <CardContent className="card_text">
            <Typography color="black" variant="h5">
              {langMode ? 'Ceci est à Omaha, Nebraska' : 'This is in Omaha, Nebraska'}
            </Typography>
            <Typography color="black" variant="h7">
              {langMode ? "Même si j'ai vécu au Nebraska pendant 3 ans à l'époque, je n'avais jamais passé de temps à Omaha, c'était le premier voyage que j'y ai fait." : 'Even though I lived in Nebraska at the time for 3 years, I had never spent time in Omaha, this was the first trip I took there'}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Photos;
