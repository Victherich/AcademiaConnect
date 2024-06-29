// src/pages/OverallScores.js
import React, { useEffect, useState } from 'react';
import '../CSS/TeacherEnterScores.css'; // Assuming this contains the necessary CSS styles

// Dummy data
const students = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        class: '4th Grade',
        scores: {
            assignments: 80,
            assessments: 85,
            exams: 90,
            total: 0
        }
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '0987654321',
        class: '4th Grade',
        scores: {
            assignments: 75,
            assessments: 70,
            exams: 80,
            total: 0
        }
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '1122334455',
        class: '4th Grade',
        scores: {
            assignments: 85,
            assessments: 80,
            exams: 88,
            total: 0
        }
    },
    {
        id: '4',
        name: 'Bob Brown',
        email: 'bob@example.com',
        contact: '4455667788',
        class: '5th Grade',
        scores: {
            assignments: 90,
            assessments: 85,
            exams: 92,
            total: 0
        }
    },
    {
        id: '5',
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        contact: '5566778899',
        class: '5th Grade',
        scores: {
            assignments: 82,
            assessments: 88,
            exams: 87,
            total: 0
        }
    }
];

const OverallScores = () => {
    const [studentScores, setStudentScores] = useState([]);

    useEffect(() => {
        // Calculate total scores for each student
        const updatedStudents = students.map(student => ({
            ...student,
            scores: {
                ...student.scores,
                total: student.scores.assignments + student.scores.assessments + student.scores.exams
            }
        }));

        // Update state with calculated total scores
        setStudentScores(updatedStudents);
    }, []);

    // Calculate grand total scores for all students
    const calculateGrandTotal = () => {
        return studentScores.reduce((acc, student) => acc + student.scores.total, 0);
    };

    return (
        <div className="enter-scores-container">
            <h2 className="enter-scores-title">Overall Scores</h2>
            <table className="enter-scores-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Assignments</th>
                        <th>Assessments</th>
                        <th>Exams</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {studentScores.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.scores.assignments}</td>
                            <td>{student.scores.assessments}</td>
                            <td>{student.scores.exams}</td>
                            <td>{student.scores.total}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="overall-scores-total-label">Grand Total</td>
                        <td className="overall-scores-total-value">{calculateGrandTotal()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default OverallScores;
