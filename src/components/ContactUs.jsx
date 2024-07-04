// src/ContactForm.js
import React, { useState } from 'react';
import '../CSS/ContactUs.css';
import { FaContao, FaElementor } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
// import Logo from "../Images/happyman Logo design.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically handle form submission, e.g., send data to your backend
  };

  return (
    <div>
      <Header/>
      <div className='ContactFormWrap'>
      {/* <FaContao style={{fontSize:"3rem"}}/> */}
        <div className="contact-form-container">
      <h2>Contact Us</h2>
      {/* <img src={Logo} alt="Logo"/> */}
      {/* <h2 style={{color:"rgba(0,0,255,0.5)",position:"relative"}}>ACADEMIA CONNECT</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="footer-contact"  style={{textAlign:"center",alignItems:"center",color:"blue",position:"relative"}}>
     

          {/* <h4 style={{textDecoration:"underline"}}>Contact</h4> */}
          <br/>
          {/* <p>Address: The old Vicarage building <br/>
          Trinity Road Old Market Avon<br/>
          Bristol– United Kingdom.<br/>
           
           </p> */}
          <br/>
          <p>Email: homehub95@gmail.com</p>
          <p>Phone: +234 706 348 0314</p>
        </div>
    </div>

    </div>
    <Footer/>
    </div>
      );
};

export default ContactForm;
