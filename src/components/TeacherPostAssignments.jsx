import React, { useState } from 'react';
import '../CSS/TeacherPostAssignments.css';

const TeacherPostAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Function to handle form submission for adding or editing assignments
  const handleAddOrEditAssignment = (e) => {
    e.preventDefault();
    if (editMode && editId !== null) {
      // Edit existing assignment
      const updatedAssignments = assignments.map((assignment) =>
        assignment.id === editId
          ? { id: editId, title, description, dueDate }
          : assignment
      );
      setAssignments(updatedAssignments);
      setEditMode(false);
      setEditId(null);
    } else {
      // Add new assignment
      const newAssignment = {
        id: assignments.length + 1,
        title,
        description,
        dueDate
      };
      setAssignments([...assignments, newAssignment]);
    }
    // Clear form fields
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  // Function to handle edit button click
  const handleEdit = (id) => {
    const assignmentToEdit = assignments.find((assignment) => assignment.id === id);
    if (assignmentToEdit) {
      setTitle(assignmentToEdit.title);
      setDescription(assignmentToEdit.description);
      setDueDate(assignmentToEdit.dueDate);
      setEditMode(true);
      setEditId(id);
    }
  };

  // Function to handle delete button click
  const handleDelete = (id) => {
    const updatedAssignments = assignments.filter((assignment) => assignment.id !== id);
    setAssignments(updatedAssignments);
  };

  return (
    <div className="assignment-page">
      <div className="assignment-form">
        <h2>{editMode ? 'Edit Assignment' : 'Create New Assignment'}</h2>
        <form onSubmit={handleAddOrEditAssignment}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <button type="submit">{editMode ? 'Update Assignment' : 'Post Assignment'}</button>
        </form>
      </div>
      
      <div className="assignment-list">
        <h2>Current Assignments</h2>
        <ul>
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              <div>
                <h3>{assignment.title}</h3>
                <p>{assignment.description}</p>
                <p style={{color:"blue"}}>Due Date: {assignment.dueDate}</p>
              </div>
              <div>
                <button onClick={() => handleEdit(assignment.id)} >Edit</button>
                <button onClick={() => handleDelete(assignment.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherPostAssignments;
