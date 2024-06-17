// AboutUs.jsx

import React from 'react';
import '../CSS/AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="containera">
        <div className="about-content">
          <h2>About Us</h2>
          <span>
            Welcome to our school management app, dedicated to revolutionizing
            educational administration. At [Your School Management App Name],
            we understand the challenges faced by educators, administrators,
            and students alike. Our mission is to streamline school operations
            and enhance communication among stakeholders.
          </span>
          <span>
            Our app offers comprehensive solutions for attendance management,
            gradebook management, parent-teacher communication, and library
            management. By leveraging technology, we aim to empower educators
            tos anfocus more on teaching and less on administrative tasks. We are
            committed to fostering a collaborative environment where students
            thrive and parents stay informed.
          </span>
          <span>
            Join us in our journey to transform education through innovation
            and efficiency. Together, we can build a brighter future for
            education.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
