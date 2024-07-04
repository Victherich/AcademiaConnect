// Footer.jsx

import React from 'react';
import '../CSS/Footer.css'; // Import your CSS file for styling
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location =useLocation()
  const navigate = useNavigate()
  return (
    <footer className="footerF">
      <div className="containerF">
        <div className="footer-content">
          <div className="footer-left">
            <h3>ACADEMIA CONNECT</h3>
            <span>
              Revolutionizing educational administration with innovative
              solutions to simplify school operations.
            </span><br/><br/>
            <span>
              <strong>Contact Us:</strong>
            </span><br/>
            <span>Email: homehub95@gmail.com</span><br/>
            <span>Phone: +234 706 348 0314</span><br/>
            {/* <span>Address: 123 School St, Cityville, State, Zip</span> */}
          </div>
          <div className="footer-right">
            <ul className="footer-links">
              <li><a onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Home</a></li>
              {location.pathname==="/"&&<li><a href="#about">About Us</a></li>}
              {/* <li><a href="#">Services</a></li> */}
              <li><a onClick={()=>navigate("/contactus")} style={{cursor:"pointer"}}>Contact</a></li>
            </ul>
            <div className="social-icons">
              <a href="#" className="icon-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="icon-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
