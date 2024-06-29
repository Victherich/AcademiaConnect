import React from 'react'
import '../CSS/TeacherHeader.css'

const TeacherHeader = () => {
  return (
    <div>
        <header>
            <div className="logo">ACADEMIA CONNECT</div>
            <div className="header-right">
                <span className="profile">Welcome, [Teacher's Name]</span>
                <img src="profile.jpg" alt="Profile Picture" className="profile-pic" />
                <span className="notifications" >🔔</span>
                <span className="settings">⚙️</span>
                <span className="logout">Logout</span>
             
            </div>
        </header>
    </div>
  )
}

export default TeacherHeader