import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const studentsData = [
  {
    id: 1,
    profileImg: "path/to/profileImg1.jpg",
    fullName: "John Doe",
    dob: "2008-05-14",
    address: "123 Main St, Springfield",
    class: "5th Grade",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    note: "Allergic to peanuts",
    pickUpId : "joh345649"
  },
  {
    id: 2,
    profileImg: "path/to/profileImg2.jpg",
    fullName: "Jane Smith",
    dob: "2007-09-23",
    address: "456 Elm St, Springfield",
    class: "6th Grade",
    phone: "234-567-8901",
    email: "jane.smith@example.com",
    note: "Needs extra help with math",
    pickUpId : "jan167589"
  },
  {
    id: 3,
    profileImg: "path/to/profileImg3.jpg",
    fullName: "Alice Johnson",
    dob: "2009-12-04",
    address: "789 Oak St, Springfield",
    class: "7th Grade",
    phone: "345-678-9012",
    email: "alice.johnson@example.com",
    note: "Very interested in science",
    pickUpId : "ali968754"
  }
  // Add more student objects as needed
];

const StudentList = ({ students }) => {
  return (
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
            <td>{student.fullName}</td>
            <td>{student.class}</td>
            <td>{student.phone}</td>
            <td>{student.id}</td>
            <td>{student.pickUpId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StudentByClasses = () => {
  const [visibleClasses, setVisibleClasses] = useState({});

  const toggleClassVisibility = (className) => {
    setVisibleClasses(prevVisibleClasses => ({
      ...prevVisibleClasses,
      [className]: !prevVisibleClasses[className]
    }));
  };

  const classes = [...new Set(studentsData.map(student => student.class))];

  return (
    <div className='Style1'>
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
            <StudentList students={studentsData.filter(student => student.class === className)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentByClasses;
