import React from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import "../CSS/StyleSheet1.css"

const ManagementDashboard = () => (
  <div className='Style1'>
    <div>
    <h2>Management Dashboard</h2>
    <Link to="/create-student" className="btn btn-success">Create Student</Link>
    <Link to="/students" className="btn btn-primary ml-2">All Students</Link>
    <Link to="/students-by-class" className="btn btn-primary ml-2">Students by Class</Link>
    <Link to="/scheme-work" className="btn btn-secondary ml-2">Scheme of Work and Time Table</Link>
    <Link to="/announcements" className="btn btn-warning ml-2">Announcements</Link>
    <Link to="/" className="btn btn-danger ml-2">LogOut</Link>
    {/* <Link to="/transportation" className="btn btn-info ml-2">Transportation & Pick-Up</Link> */}
  </div>
  <div>
    {/* <CreateStudent/> */}
  </div>
  </div>
);

export default ManagementDashboard;
