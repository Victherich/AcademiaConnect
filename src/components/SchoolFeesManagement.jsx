// src/pages/SchoolFeesManagement.js
import React, { useState } from 'react';
import '../CSS/SchoolFeesManagement.css';
import ManagementDashboard from './ManagementDashboard';

const students = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        class: '4th Grade',
        feesPaid: false,
        paymentId: null
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '0987654321',
        class: '4th Grade',
        feesPaid: true,
        paymentId: 'PAY123456'
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '1122334455',
        class: '4th Grade',
        feesPaid: false,
        paymentId: null
    },
    {
        id: '4',
        name: 'Bob Brown',
        email: 'bob@example.com',
        contact: '4455667788',
        class: '5th Grade',
        feesPaid: true,
        paymentId: 'PAY654321'
    },
    {
        id: '5',
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        contact: '5566778899',
        class: '5th Grade',
        feesPaid: false,
        paymentId: null
    },
    {
        id: '6',
        name: 'Diana Evans',
        email: 'diana@example.com',
        contact: '6677889900',
        class: '5th Grade',
        feesPaid: true,
        paymentId: 'PAY789012'
    },
    {
        id: '7',
        name: 'Ethan Foster',
        email: 'ethan@example.com',
        contact: '7788990011',
        class: '6th Grade',
        feesPaid: false,
        paymentId: null
    },
    {
        id: '8',
        name: 'Fiona Green',
        email: 'fiona@example.com',
        contact: '8899001122',
        class: '6th Grade',
        feesPaid: true,
        paymentId: 'PAY345678'
    },
    {
        id: '9',
        name: 'George Harris',
        email: 'george@example.com',
        contact: '9900112233',
        class: '6th Grade',
        feesPaid: false,
        paymentId: null
    }
];

const SchoolFeesManagement = () => {
    const [expandedClass, setExpandedClass] = useState(null);

    const toggleClass = (className) => {
        setExpandedClass(expandedClass === className ? null : className);
    };

    const groupedByClass = students.reduce((acc, student) => {
        if (!acc[student.class]) acc[student.class] = [];
        acc[student.class].push(student);
        return acc;
    }, {});

    return (
        <div className="management-view-container">
            <ManagementDashboard />
            <h2 className="management-view-title">School Fees Management</h2>
            {Object.keys(groupedByClass).map(className => (
                <div key={className} className="management-view-class-section">
                    <h3 className="management-view-class-title" onClick={() => toggleClass(className)}>
                        {className}
                    </h3>
                    {expandedClass === className && (
                        <table className="management-view-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Payment ID</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedByClass[className].map(student => (
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.id}</td>
                                        <td>{student.email}</td>
                                        <td>{student.contact}</td>
                                        <td>{student.paymentId || 'null'}</td>
                                        <td>{student.feesPaid ? 'Paid' : 'Not Paid'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SchoolFeesManagement;
