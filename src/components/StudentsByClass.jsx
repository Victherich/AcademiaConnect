// src/StudentByClasses.js

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaTrashAlt } from 'react-icons/fa';
import ManagementDashboard from './ManagementDashboard';

const initialStudentsData = [
  // 4th Grade Students
  {
    id: 176485,
    profileImg: "path/to/profileImg1.jpg",
    fullName: "John Doe",
    dob: "2008-05-14",
    address: "123 Main St, Springfield",
    class: "4th Grade",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    note: "Allergic to peanuts",
    pickUpId: "joh345649"
  },
  {
    id: 176486,
    profileImg: "path/to/profileImg2.jpg",
    fullName: "Emily Davis",
    dob: "2008-07-22",
    address: "456 Pine St, Springfield",
    class: "4th Grade",
    phone: "123-456-7891",
    email: "emily.davis@example.com",
    note: "Asthma",
    pickUpId: "emi345650"
  },
  {
    id: 176487,
    profileImg: "path/to/profileImg3.jpg",
    fullName: "Michael Brown",
    dob: "2008-11-03",
    address: "789 Maple St, Springfield",
    class: "4th Grade",
    phone: "123-456-7892",
    email: "michael.brown@example.com",
    note: "Requires hearing aid",
    pickUpId: "mic345651"
  },
  // 5th Grade Students
  {
    id: 264758,
    profileImg: "path/to/profileImg4.jpg",
    fullName: "Jane Smith",
    dob: "2007-09-23",
    address: "456 Elm St, Springfield",
    class: "5th Grade",
    phone: "234-567-8901",
    email: "jane.smith@example.com",
    note: "Needs extra help with math",
    pickUpId: "jan167589"
  },
  {
    id: 264759,
    profileImg: "path/to/profileImg5.jpg",
    fullName: "Olivia Johnson",
    dob: "2007-04-12",
    address: "123 Birch St, Springfield",
    class: "5th Grade",
    phone: "234-567-8902",
    email: "olivia.johnson@example.com",
    note: "Vegetarian",
    pickUpId: "oli167590"
  },
  {
    id: 264760,
    profileImg: "path/to/profileImg6.jpg",
    fullName: "Liam Wilson",
    dob: "2007-10-10",
    address: "789 Cedar St, Springfield",
    class: "5th Grade",
    phone: "234-567-8903",
    email: "liam.wilson@example.com",
    note: "Diabetic",
    pickUpId: "lia167591"
  },
  // 6th Grade Students
  {
    id: 364785,
    profileImg: "path/to/profileImg7.jpg",
    fullName: "Alice Johnson",
    dob: "2009-12-04",
    address: "789 Oak St, Springfield",
    class: "6th Grade",
    phone: "345-678-9012",
    email: "alice.johnson@example.com",
    note: "Very interested in science",
    pickUpId: "ali968754"
  },
  {
    id: 364786,
    profileImg: "path/to/profileImg8.jpg",
    fullName: "Ethan White",
    dob: "2009-06-16",
    address: "456 Willow St, Springfield",
    class: "6th Grade",
    phone: "345-678-9013",
    email: "ethan.white@example.com",
    note: "Needs extra help with reading",
    pickUpId: "eth968755"
  },
  {
    id: 364787,
    profileImg: "path/to/profileImg9.jpg",
    fullName: "Sophia Martin",
    dob: "2009-09-29",
    address: "123 Cherry St, Springfield",
    class: "6th Grade",
    phone: "345-678-9014",
    email: "sophia.martin@example.com",
    note: "Has a nut allergy",
    pickUpId: "sop968756"
  }
];

const StudentList = ({ students, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Class</th>
          <th>Guardian Phone</th>
          <th>Student ID</th>
          <th>Pick-up ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            <td>{student.class}</td>
            <td>{student.phone}</td>
            <td>{student.id}</td>
            <td>{student.pickUpId}</td>
            <td>
              <button onClick={() => onDelete(student.id)} className="btn btn-danger btn-sm">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StudentByClasses = () => {
  const [studentsData, setStudentsData] = useState(initialStudentsData);
  const [visibleClasses, setVisibleClasses] = useState({});

  const toggleClassVisibility = (className) => {
    setVisibleClasses(prevVisibleClasses => ({
      ...prevVisibleClasses,
      [className]: !prevVisibleClasses[className]
    }));
  };

  const handleDelete = (studentId) => {
    const updatedStudents = studentsData.filter(student => student.id !== studentId);
    setStudentsData(updatedStudents);
  };

  const classes = [...new Set(studentsData.map(student => student.class))];

  return (
    <div className='Style1'>
      <ManagementDashboard />
      <h2>Students by Classes</h2>
      {classes.map(className => (
        <div key={className}>
          <div 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', backgroundColor: '#f1f1f1', padding: '10px', marginBottom: '5px' }}
            onClick={() => toggleClassVisibility(className)}
          >
            <h4 style={{ margin: 0, flexGrow: 1 }}>{className}</h4>
            {visibleClasses[className] ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {visibleClasses[className] && (
            <StudentList students={studentsData.filter(student => student.class === className)} onDelete={handleDelete} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentByClasses;
