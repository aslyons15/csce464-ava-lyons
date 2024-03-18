import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Resume from './Resume';
import Photos from './Photos';
import FeedbackForm from './feedbackForm';
import Games from './Games';
import Books from './Books'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" Component={Resume} />
         <Route path="/photos" Component={Photos} />
         <Route path="/games" Component={Games} />
        <Route path="/feedback" Component={FeedbackForm} />
        <Route path="/books" Component={Books} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
