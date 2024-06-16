import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    
   
    <div>
      <h2 style={{color:"green"}}>Student Details ID:{student.id}</h2>
      <p><strong>Full Name:</strong> {student.fullName}</p>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>Guardian Phone:</strong> {student.phone}</p>
      <p><strong>Guardian Email:</strong> {student.email}</p>
      <p><strong>Pick-up ID:</strong> {student.pickUpId}</p>
      <p><strong>Note:</strong> {student.note}</p>
    </div>

  );
};

export default StudentDetails;
