// src/pages/TeacherMessage.js
import React, { useState } from 'react';
// import { students, teacher } from '../data/students'; 
import '../CSS/TeacherMessageToStudents.css';

// src/data/students.js
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

// src/data/teachers.js
const teacher = {
    id: 't1',
    name: 'Mr. Anderson',
    email: 'anderson@example.com',
    contact: '9988776655',
    class: '4th Grade'
};


const TeacherMessage = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        students.forEach(student => {
            if (student.class === teacher.class) {
                student.messages.push({ sender: teacher.name, text: message, date: new Date().toISOString() });
            }
        });
        setMessage('');
        alert('Message sent to all students in your class!');
    };

    return (
        <div className="teacher-message-container">
            <h2 className="teacher-message-title">Send Message to Class</h2>
            <textarea
                className="teacher-message-textarea"
                value={message}
                onChange={handleMessageChange}
                placeholder="Write your message here..."
            />
            <button className="teacher-message-button" onClick={handleSendMessage}>
                Send Message
            </button>
        </div>
    );
};

export default TeacherMessage;
