import React, { useState } from 'react';
import './CSCE464Final.css';

export default function FeedbackForm()  {
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
    <div>
      <h2>Share Your Feedback</h2>
      <form id="feedbackForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Your Message:</label><br />
          <textarea id="message" name="message" rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div><br />

        <div id="rating">
          <label htmlFor="rating">Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <span key={value} data-value={value} className={value <= rating ? 'active' : ''} onClick={() => handleStarClick(value)}>&#9733;</span>
            ))}
          </div>
        </div><br />

        <div id="emailForm">
          <label htmlFor="email">Your Email: </label><br />
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div><br />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};
