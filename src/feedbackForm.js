import React, { useState } from 'react';
import './CSCE464Final.css';

const FeedbackForm = ({ darkMode, langMode }) => {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');
    setRating(0);
    setEmail('');
  };

  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white' }} class='center'>
      <h2 style={{ color: darkMode ? 'white' : 'black' }}>{langMode ? 'Partagez votre avis' : 'Share Your Feedback'}</h2>
      <form id="feedbackForm" onSubmit={handleSubmit}>
        <div>
          <label style={{ color: darkMode ? 'white' : 'black' }} htmlFor="message">{langMode ? 'Votre message :' : 'Your Message:'}</label><br />
          <textarea id="message" name="message" rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div><br />

        <div id="rating">
          <label style={{ color: darkMode ? 'white' : 'black' }} htmlFor="rating">{langMode ? 'Évaluation :' : 'Rating:'}</label>
          <div style={{ color: darkMode ? 'white' : 'black' }} className="stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <span key={value} data-value={value} className={value <= rating ? 'active' : ''} onClick={() => handleStarClick(value)}>&#9733;</span>
            ))}
          </div>
        </div><br />

        <div id="emailForm">
          <label style={{ color: darkMode ? 'white' : 'black' }} htmlFor="email">{langMode ? 'Votre Email : ' : 'Your Email: '} </label><br />
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div><br />

        <button type="submit">{langMode ? 'Soumettre vos commentaires' : 'Submit Feedback'}</button>
      </form>
    </div>
  );
};

export default FeedbackForm;