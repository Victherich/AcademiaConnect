// import React from 'react';
// import { Link } from 'react-router-dom';

// const StudentList = () => (
//   <div className='Style1'>
//     <h2>All Students</h2>
//     {/* This should be dynamically generated from your state or API */}
//     <ul>
//       <li><Link to="/students/1">Student 1</Link></li>
//       <li><Link to="/students/2">Student 2</Link></li>
//     </ul>
//   </div>
// );

// export default StudentList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ManagementDashboard from './ManagementDashboard';

const mockStudentsData = [
  {
    id: 1,
    fullName: 'John Doe',
    class: '5th Grade',
    guardianPhone: '123-456-7890'
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    class: '6th Grade',
    guardianPhone: '234-567-8901'
  },
  {
    id: 3,
    fullName: 'Alice Johnson',
    class: '7th Grade',
    guardianPhone: '345-678-9012'
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
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td><Link to={`/students/${student.id}`}>{student.fullName}</Link> </td>
              <td>{student.class}</td>
              <td>{student.guardianPhone}</td>
              <td>{student.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

