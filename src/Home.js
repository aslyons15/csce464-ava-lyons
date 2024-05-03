import { Stepper, Step, StepLabel, Button, Box, Typography } from '@mui/material'
import React from 'react';
import './CSCE464Final.css';



const Home = ({ darkMode, langMode }) => {
  const stepsEn = [
    'Welcome',
    'About me',
    'What my website has',
  ];
  
  const stepsFr = [
    'Bienvenue',
    'À propos de moi',
    'Ce que mon site Web propose',
  ];
  
  const steps = langMode ? stepsFr : stepsEn;

  const buttonTextEn = {
    back: 'Back',
    skip: 'Skip',
    next: 'Next',
  };
  
  const buttonTextFr = {
    back: 'Retour',
    skip: 'Passer',
    next: 'Suivant',
  };
  
  const buttonText = langMode ? buttonTextFr : buttonTextEn;
  


  const stepperStyles = {
    marginTop: '64px',
    textColor: darkMode ? "white" : "black",
    color: darkMode ? "white" : "black",
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div style={{color: darkMode ? 'white' : 'black'}}>
            <Typography variant="h5">{langMode ? "Bienvenue sur mon site Web !" : "Welcome to My Website!"}</Typography>
            <Typography variant="body1">
              {langMode ? "Ici, vous trouverez une collection de contenu par moi, Ava Lyons." : "Here you'll find a collection of content by me, Ava Lyons."}
            </Typography>
            <Typography variant="body1">
              {langMode ? "Bienvenue! Cliquez sur Suivant pour en savoir plus sur moi ou sur le site Web." : "Welcome! Click next to learn about me or the website."}
            </Typography>
          </div>
        );
      case 1:
        return (
          <div style={{color: darkMode ? 'white' : 'black'}}>
            <Typography variant="body1">
              {langMode ? "Je suis actuellement étudiant à l'Université du Nebraska-Lincoln et je suis passionné par les logiciels, la technologie et ce que je peux en faire." : "I am currently attending the University of Nebraska-Lincoln and I am passionate about software, technology, and what I can do with it."}
            </Typography>
            <Typography variant="body1">
              {langMode ? "Je m'intéresse énormément à la programmation et aux mathématiques que je vise à aider les autres." : "I am extremely interested in coding and math which I aim to help others with."}
            </Typography>
            <Typography variant="body1">
              {langMode ? "J'aime aider les autres à se préparer à leur avenir et à relever tous les défis qui pourraient se présenter." : "I enjoy helping others prepare for their futures and tackle any problem that might come their way."}
            </Typography>
            <Typography variant="body1">
              {langMode ? "De plus, je suivais des cours de français à UNL parce que j'aime apprendre différentes langues et cultures." : "Additionally,  I was taking French classes at UNL because I love learning about different languages and cultures."}
            </Typography>
          </div>
        );
      case 2:
        return (
          <div style={{color: darkMode ? 'white' : 'black'}}>
            <Typography  variant="body1">
              {langMode ? "Certaines des fonctionnalités de mon site Web incluent :" : "Some of the feature on my website include:"}
            </Typography>
            <Typography  variant="body1">
              - {langMode ? "Mon CV" : "My Resume"}
            </Typography>
            <Typography  variant="body1">
              - {langMode ? "Jeux" : "Games"}
            </Typography>
            <Typography  variant="body1">
              - {langMode ? "Quelques livres que j'ai lus" : "Some books I've read"}
            </Typography>
            <Typography  variant="body1">
              - {langMode ? "Différents modes" : "Different modes"}
            </Typography>
            <Typography  variant="body1">
              - {langMode ? "et plus !.." : "and more!.."}
            </Typography>
          </div>
        );
      default:
        return 'Done!';
    }
  };

  return (
    <body style={{backgroundColor: darkMode ? "black" : "white", marginLeft: '20%', marginRight: '20%'}}>
      <Stepper style={{ ...stepperStyles, backgroundColor:'white' }} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography  variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ mt: 2, mb: 1 }}>
        {renderStepContent(activeStep)}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color= {darkMode ? "primary" : "inherit"}
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          sx={{ mr: 1 }}
        >
          {buttonText.back}
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color={darkMode ? "primary" : "inherit"} onClick={handleSkip} sx={{ mr: 1 }}>
           {buttonText.skip}
          </Button>
        )}
        <Button disabled={activeStep === steps.length -1} onClick={handleNext}>
        {buttonText.next}
        </Button>

      </Box>
    </body>
  );
}

export default Home;