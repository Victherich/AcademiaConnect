// src/pages/ViewAnnouncements.js
import React from 'react';
// import { announcements } from '../data/announcements';
import '../CSS/TeacherSeeAnnouncement.css';

// src/data/announcements.js
const announcements = [
    {
        id: '1',
        title: 'School Reopening',
        content: 'The school will reopen on the 15th of July. Please ensure all students are present.',
        date: '2024-06-29'
    },
    {
        id: '2',
        title: 'Sports Day',
        content: 'Sports Day will be held on the 20th of July. All students must participate.',
        date: '2024-07-05'
    },
    {
        id: '3',
        title: 'Parent-Teacher Meeting',
        content: 'Parent-Teacher Meeting will be held on the 25th of July. All parents are requested to attend.',
        date: '2024-07-10'
    }
];


const TeacherViewAnnouncements = () => {
    return (
        <div className="view-announcements-container">
            <h2 className="view-announcements-title">Announcements</h2>
            {announcements.length > 0 ? (
                announcements.map(announcement => (
                    <div key={announcement.id} className="announcement">
                        <h3 className="announcement-title">{announcement.title}</h3>
                        <p className="announcement-date">
                            {new Date(announcement.date).toLocaleDateString()}
                        </p>
                        <p className="announcement-content">{announcement.content}</p>
                    </div>
                ))
            ) : (
                <p>No announcements available.</p>
            )}
        </div>
    );
};

export default TeacherViewAnnouncements;
