import React from 'react'
import '../CSS/TeacherDashboard.css'
import TeacherHeader from './TeacherHeader'
import TeacherDashMain from './TeacherDashMain'

const TeacherDashboard = () => {
  return (
    <div className='dashmain'>
        <TeacherHeader/>
        <TeacherDashMain/>

    </div>
  )
}

export default TeacherDashboard