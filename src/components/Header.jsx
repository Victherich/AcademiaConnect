// Header.jsx

import React from 'react';
import '../CSS/Header.css'; // Import your CSS file for styling
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const location =useLocation()
  return (
    <header className="header">
      <div className="containerH">
        <nav className="navbar">
          <div className="logo">
            {/* Add your logo image or text */}
            <span>ACADEMIA CONNECT</span>
          </div>
          <ul className="nav-links">
          <li><a onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Home</a></li>
            {location.pathname==="/"&&<li><a href="#about">About Us</a></li>}
            <li><a onClick={()=>navigate("/contactus")} style={{cursor:"pointer"}}>Contact Us</a></li>
            {/* <li><a href="#value">Value Proposition</a></li> */}
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
