import React from 'react'
import '../CSS/TeacherDashMain.css'

const TeacherDashMain = () => {

  return (
    <div className='mainconts'>
            <nav className="sidebars">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#attendance">Attendance</a></li>
                    <li><a href="#result-posting">Result Posting</a></li>
                    <li><a href="#assignment-posting">Daily Assignment Posting</a></li>
                    <li><a href="#messages">Messages</a></li>
                    <li><a href="#announcements">Announcements</a></li>
                    <li><a href="#student-profiles">View All Student Profiles</a></li>
                    <li><a href="#student-performance-tracking">Student Performance Tracking</a></li>
                    <li><a href="#calender">Calender</a></li>
                </ul>
            </nav>
            <div className="main-content">
                <section id="home">
                    <h1>Welcome to Your Dashboard</h1>
                    <div className="quick-links">
                        <ul>
                        <li><a href="#attendance">Take Attendance</a></li>
                        <li><a href="#gradebook">Enter Grades</a></li>
                        <li><a href="#lesson-plans">Create Lesson Plan</a></li>
                        <li><a href="#messages">Compose Message</a></li>
                        </ul>
                    </div>
                    <div className="upcoming-events">
                        <h2>Upcoming Events</h2>
                        {/* Calendar widget can be integrated here */}
                    </div>
                </section>
            </div>
    </div>
  )
}

export default TeacherDashMain