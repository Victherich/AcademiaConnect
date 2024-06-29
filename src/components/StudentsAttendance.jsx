// src/pages/DailyAttendance.js
import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/StudentsAttendance.css';

const students = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        pickupId: 'PICK001'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '0987654321',
        pickupId: 'PICK002'
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '1122334455',
        pickupId: 'PICK003'
    },
    {
        id: '4',
        name: 'Bob Brown',
        email: 'bob@example.com',
        contact: '4455667788',
        pickupId: 'PICK004'
    },
    {
        id: '5',
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        contact: '5566778899',
        pickupId: 'PICK005'
    }
];

const StudentsAttendance = () => {
    const [attendance, setAttendance] = useState(
        students.reduce((acc, student) => {
            acc[student.id] = false;
            return acc;
        }, {})
    );

    const handleCheckboxChange = (id) => {
        setAttendance({ ...attendance, [id]: !attendance[id] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the attendance data to the backend
            await axios.post('/api/attendance', { attendance });
            alert('Attendance saved successfully!');
        } catch (error) {
            console.error('Error saving attendance:', error);
            alert('Error saving attendance. Please try again.');
        }
    };

    return (
        <div className="attendance-container">
            <h2 className="attendance-title">Daily Attendance</h2>
            <form onSubmit={handleSubmit}>
                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Pickup ID</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.id}</td>
                                <td>{student.pickupId}</td>
                                <td>{student.email}</td>
                                <td>{student.contact}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={attendance[student.id]}
                                        onChange={() => handleCheckboxChange(student.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="attendance-submit-button">Submit Attendance</button>
            </form>
        </div>
    );
};

export default StudentsAttendance;
