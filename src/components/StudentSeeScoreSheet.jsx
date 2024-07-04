// src/pages/StudentScores.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/TeacherEnterScores.css'; // Assuming this contains the necessary CSS styles

// Dummy data for demonstration
const studentData = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    contact: '1234567890',
    class: '4th Grade',
    scores: {
        English: {
            assignments: 80,
            assessments: 85,
            exams: 90,
            total: 255
        },
        Maths: {
            assignments: 75,
            assessments: 80,
            exams: 85,
            total: 240
        },
        Economics: {
            assignments: 78,
            assessments: 82,
            exams: 88,
            total: 248
        }
    }
};

const StudentSeeScoreSheet = () => {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Replace with your actual API call
                // const response = await axios.get('/api/student/scores');
                // setStudent(response.data);

                // Using dummy data for demonstration
                setStudent(studentData);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, []);

    if (!student) {
        return <p>Loading...</p>;
    }

    // Calculate overall scores
    const overallScores = {
        assignments: 0,
        assessments: 0,
        exams: 0,
        total: 0
    };

    for (let subject in student.scores) {
        overallScores.assignments += student.scores[subject].assignments;
        overallScores.assessments += student.scores[subject].assessments;
        overallScores.exams += student.scores[subject].exams;
        overallScores.total += student.scores[subject].total;
    }

    return (
        <div className="enter-scores-container">
            <h2 className="enter-scores-title">My Scores</h2>
            {Object.keys(student.scores).map(subject => (
                <div key={subject} className="subject-scores-section">
                    <h3 className="subject-scores-title">{subject}</h3>
                    <table className="enter-scores-table">
                        <thead>
                            <tr>
                                <th>Assignments</th>
                                <th>Assessments</th>
                                <th>Exams</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{student.scores[subject].assignments}</td>
                                <td>{student.scores[subject].assessments}</td>
                                <td>{student.scores[subject].exams}</td>
                                <td>{student.scores[subject].total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            <div className="overall-scores-section">
                <h3 className="overall-scores-title">Overall Scores</h3>
                <table className="enter-scores-table">
                    <thead>
                        <tr>
                            <th>Assignments</th>
                            <th>Assessments</th>
                            <th>Exams</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{overallScores.assignments}</td>
                            <td>{overallScores.assessments}</td>
                            <td>{overallScores.exams}</td>
                            <td>{overallScores.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentSeeScoreSheet;
