// Services.jsx

import React from 'react';
import '../CSS/Serices.css'; // Import your CSS file for styling

const servicesData = [
    {
      id: 1,
      title: 'Create Student',  
      description: 'Easily add new students to the system with their basic details such as name, date of birth, contact information, and class enrollment.'
    },
    {
      id: 2,
      title: 'View All Students List',
      description: 'Access a comprehensive list of all enrolled students within the school, allowing for easy management and organization.'
    },
    {
      id: 3,
      title: 'View One Student Details',
      description: 'View detailed information about a specific student including personal details, parent/guardian contacts, academic progress, and disciplinary records if any.'
    },
    {
      id: 4,
      title: 'View Students by Classes',
      description: 'Organize students by their respective classes or grades, facilitating efficient management and communication within specific groups.'
    },
    {
      id: 5,
      title: 'Student Unique Pick-Up ID',
      description: 'Generate and assign a unique pick-up ID to each student that changes weekly for enhanced security and safety during student pick-up times.'
    },
    {
      id: 6,
      title: 'Announcements',
      description: 'Receive important updates and announcements from the school administration regarding events, holidays, policy changes, and other pertinent information.'
    },
    {
      id: 7,
      title: 'Scheme of Works and Timetable',
      description: 'Access detailed schedules outlining the academic curriculum, lesson plans, and daily timetables for various classes or grade levels.'
    },
    {
      id: 8,
      title: 'Student Information Including Pick-Up ID',
      description: 'Maintain a record of each student\'s information including their unique weekly pick-up ID for verification purposes, ensuring safe and secure student dismissals.'
    },
    {
      id: 9,
      title: 'Scheme of Work and Timetable View',
      description: 'Provide teachers and administrators with an overview of the academic syllabus, lesson plans, and weekly schedules to facilitate effective teaching and learning.'
    },
    {
      id: 10,
      title: 'Complaint Form',
      description: 'Allow parents, students, and staff members to submit complaints or concerns electronically, ensuring timely resolution and feedback.'
    },
    {
      id: 11,
      title: 'View Announcements from Management',
      description: 'Stay informed with announcements and updates issued by the school management, fostering clear communication and community engagement.'
    }
  ];
  

  

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="containerS">
        <h2>Features</h2>
        <div className="services-list">
          {servicesData.map(service => (
            <div className="service-item" key={service.id}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
