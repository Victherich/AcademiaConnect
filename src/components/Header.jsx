// Header.jsx

import React from 'react';
import '../CSS/Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="containerH">
        <nav className="navbar">
          <div className="logo">
            {/* Add your logo image or text */}
            <span>ACADEMIA CONNECT</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#value">Value Proposition</a></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
