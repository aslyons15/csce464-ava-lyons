import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Resume from './Resume';
import Photos from './Photos';
import FeedbackForm from './feedbackForm';
import Games from './Games';
import './CSCE464Final.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Resume/>} />
         <Route path="/photos" element={<Photos/>} />
         <Route path="/games" element={<Games/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
