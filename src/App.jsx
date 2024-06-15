import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import WelcomePage from "./components/Welcomepage"
import ManagementDashboard from './components/ManagementDashboard';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
// import StudentsByClass from './components/StudentsByClass';
import StudentsByClass from './components/StudentsByClass';
import TransportationTab from './components/TransportationTab';
// import AnnouncementTab from './components/AnnouncementTab';
import AnnouncementTab from "./components/AnouncementTab"
import SchemeWorkTab from './components/SchemeWorkTap';
// import SchemeWorkTab from './components/SchemeWorkTab';

function App() {
  return (
    <Router>
      {/* <div className="container"> */}
        <ManagementDashboard/>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dashboard" element={<ManagementDashboard />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/students-by-class" element={<StudentsByClass />} />
          <Route path="/transportation" element={<TransportationTab />} />
          <Route path="/announcements" element={<AnnouncementTab />} />
          <Route path="/scheme-work" element={<SchemeWorkTab />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
