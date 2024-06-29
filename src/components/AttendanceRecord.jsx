// src/pages/AttendanceRecords.js
import React, { useState } from 'react';
// import { attendanceRecords } from '../data/attendanceRecords';
import '../CSS/AttendanceRecord.css';


// src/data/attendanceRecords.js
 const attendanceRecords = [
    {
        _id: '1',
        date: '2024-05-01',
        attendance: [
            { studentId: { _id: '1', name: 'John Doe', pickupId: 'PU123', email: 'john@example.com', contact: '1234567890' }, present: true },
            { studentId: { _id: '2', name: 'Jane Smith', pickupId: 'PU124', email: 'jane@example.com', contact: '0987654321' }, present: false },
            // Add more students as needed
        ],
    },
    {
        _id: '2',
        date: '2024-05-02',
        attendance: [
            { studentId: { _id: '1', name: 'John Doe', pickupId: 'PU123', email: 'john@example.com', contact: '1234567890' }, present: false },
            { studentId: { _id: '2', name: 'Jane Smith', pickupId: 'PU124', email: 'jane@example.com', contact: '0987654321' }, present: true },
            // Add more students as needed
        ],
    },
    // Add more days as needed
    {
        _id: '3',
        date: '2024-06-01',
        attendance: [
            { studentId: { _id: '1', name: 'John Doe', pickupId: 'PU123', email: 'john@example.com', contact: '1234567890' }, present: true },
            { studentId: { _id: '2', name: 'Jane Smith', pickupId: 'PU124', email: 'jane@example.com', contact: '0987654321' }, present: false },
            // Add more students as needed
        ],
    },
    {
        _id: '4',
        date: '2024-06-02',
        attendance: [
            { studentId: { _id: '1', name: 'John Doe', pickupId: 'PU123', email: 'john@example.com', contact: '1234567890' }, present: false },
            { studentId: { _id: '2', name: 'Jane Smith', pickupId: 'PU124', email: 'jane@example.com', contact: '0987654321' }, present: true },
            // Add more students as needed
        ],
    },
    // Add more days as needed
];



const AttendanceRecords = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const filteredRecords = attendanceRecords.filter((record) => {
        const recordDate = new Date(record.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return recordDate >= start && recordDate <= end;
    });

    return (
        <div className="attendance-records-container">
            <h2 className="attendance-records-title">Attendance Records</h2>
            <div className="date-range-picker">
                <label>
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>
            </div>
            {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                    <div key={record._id} className="attendance-record">
                        <h3 className="attendance-record-date">
                            {new Date(record.date).toLocaleDateString()}
                        </h3>
                        <table className="attendance-record-table">
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
                                {record.attendance.map((att) => (
                                    <tr key={att.studentId._id}>
                                        <td>{att.studentId.name}</td>
                                        <td>{att.studentId._id}</td>
                                        <td>{att.studentId.pickupId}</td>
                                        <td>{att.studentId.email}</td>
                                        <td>{att.studentId.contact}</td>
                                        <td>{att.present ? 'Yes' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <p>No attendance records found for the selected range.</p>
            )}
        </div>
    );
};

export default AttendanceRecords;
