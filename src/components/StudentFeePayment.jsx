// src/pages/StudentFeePayment.js
import React, { useState } from 'react';
// import { students, feeStructure } from '../data/students';
import '../CSS/StudentFeePayment.css';

const StudentFeePayment = () => {
    // Assume the first student is logged in

    // src/data/students.js
const students = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        class: '4th Grade',
        feesPaid: false,
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '0987654321',
        class: '5th Grade',
        feesPaid: true,
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '1122334455',
        class: '6th Grade',
        feesPaid: false,
    }
];

const feeStructure = {
    '4th Grade': 1000,
    '5th Grade': 1200,
    '6th Grade': 1500,
};







    const [student, setStudent] = useState(students[2]);

    const handlePayment = () => {
        // Update the student's payment status
        setStudent(prevStudent => ({ ...prevStudent, feesPaid: true }));
        // Typically, you would also update the backend here
        alert('Payment successful!');
    };

    return (
        <div className="student-fee-payment-container">
            <h2 className="student-fee-payment-title">Hi, {student.name}</h2>
            <p className="student-fee-payment-info">Class: {student.class}</p>
            <p className="student-fee-payment-info">Email: {student.email}</p>
            <p className="student-fee-payment-info">Contact: {student.contact}</p>
            <p className="student-fee-payment-info">
                Fees Status: {student.feesPaid ? "Paid" : "Unpaid"}
            </p>
            <p className="student-fee-payment-info">Amount to be paid: ${feeStructure[student.class]}</p>
            {!student.feesPaid && (
                <button className="student-fee-payment-button" onClick={handlePayment}>Pay Fees</button>
            )}
            {student.feesPaid && <p className="student-fee-payment-info">Thank you for your payment!</p>}
        </div>
    );
};

export default StudentFeePayment;
