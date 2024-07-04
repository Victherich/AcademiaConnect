import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TeacherViewStudents from './TeacherViewStudents'
import StudentsAttendance from './StudentsAttendance'
import "../CSS/TeachersDashboard.css"
import TeacherInfo from './TeacherInfo'
import AttendanceRecords from './AttendanceRecord'
import TeacherMessage from './TeacherMessageToStudents'
import TeacherViewAnnouncements from './TeacherSeeAnnouncement'
import ScoreSheet from './ScoreSheet'
import TeacherPostAssignments from './TeacherPostAssignments'
import { Context } from './Context'


const TeachersDashboard = () => {
    const navigate = useNavigate()
    const [switchPage,setSwitchPage]=useState(0)
    const {setTeacher}=useContext(Context)

  return (
    <div style={{display:"flex"}}>
        <div className='TeachersDashboardMenuWrap'>
        <p onClick={()=>setSwitchPage(0)} className={switchPage===0?"MenuActive":"Menu"}>Teacher Info</p>
      <p onClick={()=>setSwitchPage(1)} className={switchPage===1?"MenuActive":"Menu"}>Students</p>
      <p onClick={()=>setSwitchPage(2)} className={switchPage===2?"MenuActive":"Menu"}>Take Attendance</p>
      <p onClick={()=>setSwitchPage(3)} className={switchPage===3?"MenuActive":"Menu"}>View Attendance</p>
      <p onClick={()=>setSwitchPage(4)} className={switchPage===4?"MenuActive":"Menu"}>Assignment Posting</p>
      <p onClick={()=>setSwitchPage(5)} className={switchPage===5?"MenuActive":"Menu"}>Students Score sheet</p>
      <p onClick={()=>setSwitchPage(10)} className={switchPage===10?"MenuActive":"Menu"}>Message Students</p>
      <p onClick={()=>setSwitchPage(11)} className={switchPage===11?"MenuActive":"Menu"}>Anouncements By Management</p>
      <p onClick={()=>{navigate("/");setTeacher(false)}} className='Menu'>Logout</p>
    </div>
    <div className='TeachersDashBoardBody' style={{marginTop:"50px"}}>
        {switchPage===0&&<TeacherInfo/>}
        {switchPage===1&&<TeacherViewStudents/>}
        {switchPage===2&&<StudentsAttendance/>}
        {switchPage===3&&<AttendanceRecords/>}
        {switchPage===10&&<TeacherMessage/>}
        {switchPage===11&&<TeacherViewAnnouncements/>}
        {switchPage===5&&<ScoreSheet/>}
        {switchPage===4&&<TeacherPostAssignments/>}
    </div>
    </div>
  )
}

export default TeachersDashboard
