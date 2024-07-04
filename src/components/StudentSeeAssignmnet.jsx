import React, { useState, useEffect } from 'react';
import '../CSS/StudentSeeAssignment.css';

const StudentSeeAssignment = () => {
  const [assignments, setAssignments] = useState([]);

  // Mock assignments data (simulating API call)
  useEffect(() => {
    // Simulated API call to fetch assignments
    const mockAssignments = [
      { id: 1, title: 'Math Homework', description: 'Complete exercises 1-5 on page 50.', dueDate: '2024-07-05' },
      { id: 2, title: 'History Essay', description: 'Write an essay on the causes of World War II.', dueDate: '2024-07-08' },
      { id: 3, title: 'Science Project', description: 'Prepare a presentation on renewable energy sources.', dueDate: '2024-07-10' }
      // Add more assignments as needed
    ];
    setAssignments(mockAssignments);
  }, []);

  return (
    <div className="student-assignment-page">
      <h1>Assignments</h1>
      <div className="assignment-list">
        {assignments.length > 0 ? (
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.id}>
                <div className='AssignmentContent'>
                  <h2>{assignment.title}</h2>
                  <p>{assignment.description}</p>
                  <p>Due Date: {assignment.dueDate}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments available.</p>
        )}
      </div>
    </div>
  );
};

export default StudentSeeAssignment;
