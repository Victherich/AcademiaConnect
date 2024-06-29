import React, { useState } from 'react';
import StudentDetails2 from './StudentDetails2';
import Announcements from './Announcements';
import ClassTimetable from './ClassTimetable';
import Complaints from './Complaints';
import "../CSS/StudentDashboard.css"
import { useNavigate } from 'react-router-dom';
import StudentFeePayment from './StudentFeePayment';

// Sample Data
const sampleStudent = {
  id:748576,
  fullName: "John Doe",
  dob: "2005-08-20",
  address: "123 Main St, Springfield",
  class: "5th Grade",
  phone: "123-456-7890",
  email: "guardian@example.com",
  pickUpId:"Joh948758",
  note: "Allergic to peanuts"
};

const sampleAnnouncements = [
  { id: 1, title: "School Reopening", content: "School will reopen on September 1st." },
  { id: 2, title: "Parent-Teacher Meeting", content: "Parent-Teacher meeting is scheduled for August 25th." }
];

const sampleTimetable = {
  Monday: [
    { time: "9:00 - 10:00", subject: "Math" },
    { time: "10:00 - 11:00", subject: "Science" },
    { time: "11:00 - 12:00", subject: "English" }
  ],
  Tuesday: [
    { time: "9:00 - 10:00", subject: "History" },
    { time: "10:00 - 11:00", subject: "Math" },
    { time: "11:00 - 12:00", subject: "Geography" }
  ],
  // Continue for other days
};

const StudentDashboard = () => {
  const sendComplaint = (complaint) => {
    // Logic to send complaint to the school management's email
    console.log("Complaint submitted:", complaint);
  };

  const [menuSwitch,setMenuSwitch]=useState(0)
  const navigate = useNavigate()

  return (
    <div className="StudentContainer">
      <h1 style={{textAlign:"center",color:"rgba(0,0,255,0.7)"}}>Student/Parent Dashboard</h1>
      <div className='StudentDashboardMenu'>
        <span onClick={()=>setMenuSwitch(0)} className={menuSwitch===0?'StudentDashboardMenuP1':'StudentDashboardMenuP2'} style={{color:"green"}}>Student Details</span>
        <span onClick={()=>setMenuSwitch(1)} className={menuSwitch===1?'StudentDashboardMenuP1':'StudentDashboardMenuP2'} style={{color:"blue"}}>Timetable</span>
        <span onClick={()=>setMenuSwitch(2)} className={menuSwitch===2?'StudentDashboardMenuP1':'StudentDashboardMenuP2'} style={{color:"orange"}}>Anouncement</span>
        <span onClick={()=>setMenuSwitch(3)} className={menuSwitch===3?'StudentDashboardMenuP1':'StudentDashboardMenuP2'} style={{color:"red"}}>Send Complaint</span>
        <span onClick={()=>setMenuSwitch(4)} className={menuSwitch===4?'StudentDashboardMenuP1':'StudentDashboardMenuP2'} style={{color:"orange"}}>School Fees Payment</span>    
        <span onClick={()=>navigate("/")} className='StudentDashboardMenuP2'>Logout</span>
      </div>
      {menuSwitch===0&&<StudentDetails2 student={sampleStudent} />}
      {menuSwitch===2&&<Announcements announcements={sampleAnnouncements} />}
      {menuSwitch===1&&<ClassTimetable timetable={sampleTimetable} />}
      {menuSwitch===3&&<Complaints sendComplaint={sendComplaint} />}
      {menuSwitch===4&&<StudentFeePayment/>}
    </div>
  );
};

export default StudentDashboard;
