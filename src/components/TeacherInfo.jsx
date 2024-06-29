// src/pages/TeacherInfo.js
import React, { useEffect, useState } from 'react';
import '../CSS/TeacherInfo.css';

const TeacherInfo = () => {
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        // Simulating an API call with dummy data
        const fetchTeacherInfo = async () => {
            try {
                const dummyTeacherData = {
                    name: 'Mr. John Smith',
                    email: 'john.smith@example.com',
                    contact: '123-456-7890',
                    class: '4th Grade'
                };
                // Simulating a delay to mimic an API call
                setTimeout(() => {
                    setTeacher(dummyTeacherData);
                }, 1000);
            } catch (error) {
                console.error('Error fetching teacher info:', error);
            }
        };

        fetchTeacherInfo();
    }, []);

    if (!teacher) {
        return <p>Loading...</p>;
    }

    return (
        <div className="teacher-info-container">
            <h2 className="teacher-info-title">Teacher Information</h2>
            <div className="teacher-info-details">
                <p><strong>Name:</strong> {teacher.name}</p>
                <p><strong>Email:</strong> {teacher.email}</p>
                <p><strong>Contact:</strong> {teacher.contact}</p>
                <p><strong>Class:</strong> {teacher.class}</p>
            </div>
        </div>
    );
};

export default TeacherInfo;
