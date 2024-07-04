import React, { useState } from 'react';
import '../CSS/CreateTeacher.css';
import ManagementDashboard from './ManagementDashboard';

const CreateTeacherPage = () => {
  const [teacherData, setTeacherData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    assignedClass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated submission (you would handle form submission to your backend/API here)
    console.log('Submitting teacher data:', teacherData);
    // Reset form fields after submission
    setTeacherData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      assignedClass: ''
    });
  };

  return (
    <div>
        <ManagementDashboard/>
        <div className="create-teacher-page">
        
        <h1>Create New Teacher Profile</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={teacherData.firstName}
            onChange={handleChange}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={teacherData.lastName}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={teacherData.email}
            onChange={handleChange}
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={teacherData.phone}
            onChange={handleChange}
            required
          />
          <label>Assigned Class:</label>
          <input
            type="text"
            name="assignedClass"
            value={teacherData.assignedClass}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Teacher</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTeacherPage;
