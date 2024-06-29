// src/pages/TeacherView.js
import React from 'react';
import '../CSS/TeacherViewStudents.css';

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

const TeacherViewStudents = () => {
    return (
        <div className="teacher-view-container">
            <h2 className="teacher-view-title">Class Students</h2>
            <table className="teacher-view-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Pickup ID</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.id}</td>
                            <td>{student.pickupId}</td>
                            <td>{student.email}</td>
                            <td>{student.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherViewStudents;
