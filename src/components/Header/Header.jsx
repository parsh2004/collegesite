import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/courses-offered">Departments</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
