import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Resume from './Resume';
import Photos from './Photos';
import FeedbackForm from './feedbackForm';
import Games from './Games';
import Books from './Books';
import Home from './Home';
import Contact from './Contact';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [langMode, setLangMode] = React.useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLangMode = () => {
    setLangMode(!langMode);
  };
  return (
    <div>
    <Router>
      <div  className={`App ${darkMode ? 'dark-mode' : ''} ${langMode ? 'lang-mode' : ''}`}>
        <div style={{ paddingTop: '64px', justifyContent: 'center'}}>
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} langMode={langMode} toggleLangMode={toggleLangMode}/>
        </div>
        <Routes >
          <Route path="/" element={<Home darkMode={darkMode} langMode={langMode} toggleLangMode={toggleLangMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} langMode={langMode} />} />
          <Route path="/photos" element={<Photos darkMode={darkMode}langMode={langMode}  />} />
          <Route path="/games" element={<Games darkMode={darkMode} langMode={langMode} />} />
          <Route path="/books" element={<Books darkMode={darkMode} langMode={langMode} />} />
          <Route path="/feedback" element={<FeedbackForm darkMode={darkMode} langMode={langMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} langMode={langMode} />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
