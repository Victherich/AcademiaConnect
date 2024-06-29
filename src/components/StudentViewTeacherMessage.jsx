// src/pages/StudentDashboard.js
import React from 'react';
// import { students } from '../data/students';
import '../CSS/StudentViewTeacherMessage.css';

const students = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        class: '4th Grade',
        messages: []
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '0987654321',
        class: '4th Grade',
        messages: []
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '1122334455',
        class: '4th Grade',
        messages: []
    },
    {
        id: '4',
        name: 'Bob Brown',
        email: 'bob@example.com',
        contact: '4455667788',
        class: '5th Grade',
        messages: []
    },
    {
        id: '5',
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        contact: '5566778899',
        class: '5th Grade',
        messages: []
    }
];


const StudentViewTeacherMessage = ({ studentId }) => {
    const student = students.find(student => student.id === '3');

    if (!student) {
        return <p>Student not found.</p>;
    }

    return (
        <div className="student-dashboard-container">
            <h2 className="student-dashboard-title">Hi, {student.name}</h2>
            <div className="student-dashboard-messages">
                <h3>Messages:</h3>
                {student.messages.length > 0 ? (
                    student.messages.map((message, index) => (
                        <div key={index} className="student-dashboard-message">
                            <p><strong>From:</strong> {message.sender}</p>
                            <p><strong>Date:</strong> {new Date(message.date).toLocaleString()}</p>
                            <p>{message.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No messages.</p>
                )}
            </div>
        </div>
    );
};

export default StudentViewTeacherMessage;
