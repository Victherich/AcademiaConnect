

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ManagementDashboard from './ManagementDashboard';

const mockStudentsData = [
  {
    id: 176485,
    fullName: 'John Doe',
    class: '4th Grade',
    guardianPhone: '123-456-7890',
    pickUpId : "joh345649"
  },
  {
    id: 264758,
    fullName: 'Jane Smith',
    class: '5th Grade',
    guardianPhone: '234-567-8901',
    pickUpId : "jan167589"
  },
  {
    id: 364785,
    fullName: 'Alice Johnson',
    class: '6th Grade',
    guardianPhone: '345-678-9012',
    pickUpId : "ali968754"
  }
  // Add more mock data as needed
];

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch data from an API
    setStudents(mockStudentsData);
  }, []);

  return (
    <div className='Style1'>
      <ManagementDashboard/>
      <h2>All Students</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Class</th>
            <th>Guardian Phone</th>
            <th>Student ID</th>
            <th>Pick-up ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td><Link to={`/students/${student.id}`}>{student.fullName}</Link> </td>
              <td>{student.class}</td>
              <td>{student.guardianPhone}</td>
              <td>{student.id}</td>
              <td>{student.pickUpId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

