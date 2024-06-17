// Footer.jsx

import React from 'react';
import '../CSS/Footer.css'; // Import your CSS file for styling

const Footer = () => {
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
            </span>
            <span>Email: info@yourschoolapp.com</span><br/>
            <span>Phone: +1 234 567 890</span><br/>
            <span>Address: 123 School St, Cityville, State, Zip</span>
          </div>
          <div className="footer-right">
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
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
