// Hero.jsx

import React from 'react';
import '../CSS/Hero.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to ACADEMIA CONNECT</h1>
        <p>Your gateway to efficient school management</p>
        <button onClick={()=>navigate("/welcome2")} className='GetStartedButton'>Get Started</button>
        {/* Add call-to-action buttons or other content if needed */}
      </div>
    </section>
  );
};

export default Hero;
