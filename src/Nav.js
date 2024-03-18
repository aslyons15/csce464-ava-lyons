import React from 'react';
import { Link } from 'react-router-dom';
import './CSCE464Final.css';

const Nav = () => {
  return (
    <nav className="nav_container">
      <div className="nav_item">
        <Link to="/">Resume</Link>
      </div>
      <div className="nav_item">
        <Link to="/photos">Photo Gallery</Link>
      </div>
      <div className="nav_item">
        <Link to="/games">Games</Link>
      </div>
      <div className="nav_item">
        <Link to="/feedback">Feedback</Link>
      </div>
      <div className="nav_item">
        <Link to="/books">Books</Link>
      </div>
    </nav>
  );
};

export default Nav;
