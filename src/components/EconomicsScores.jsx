// src/pages/EnterScoresEconomics.js
import React, { useState } from 'react';
import '../CSS/TeacherEnterScores.css';

// Dummy data
const students = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
        class: '4th Grade',
        scores: {
            assignments: 0,
            assessments: 0,
            exams: 0,
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
            assignments: 0,
            assessments: 0,
            exams: 0,
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
            assignments: 0,
            assessments: 0,
            exams: 0,
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
            assignments: 0,
            assessments: 0,
            exams: 0,
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
            assignments: 0,
            assessments: 0,
            exams: 0,
            total: 0
        }
    }
];

const EconomicsScores = () => {
    const [studentScores, setStudentScores] = useState(students);

    const handleScoreChange = (id, type, value) => {
        setStudentScores(prevScores =>
            prevScores.map(student => {
                if (student.id === id) {
                    const newScores = {
                        ...student.scores,
                        [type]: value
                    };
                    newScores.total = newScores.assignments + newScores.assessments + newScores.exams;
                    return {
                        ...student,
                        scores: newScores
                    };
                }
                return student;
            })
        );
    };

    return (
        <div className="enter-scores-container">
            <h2 className="enter-scores-title">Enter Scores for Economics</h2>
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
                            <td>
                                <input
                                    type="number"
                                    value={student.scores.assignments}
                                    onChange={e =>
                                        handleScoreChange(student.id, 'assignments', parseInt(e.target.value, 10))
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={student.scores.assessments}
                                    onChange={e =>
                                        handleScoreChange(student.id, 'assessments', parseInt(e.target.value, 10))
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={student.scores.exams}
                                    onChange={e =>
                                        handleScoreChange(student.id, 'exams', parseInt(e.target.value, 10))
                                    }
                                />
                            </td>
                            <td>{student.scores.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EconomicsScores;
