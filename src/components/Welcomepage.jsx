import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
  <div className="text-center">
    <h1>Welcome to the School Management System</h1>
    <Link to="/students" className="btn btn-primary mt-3">Go to Dashboard</Link>
  </div>
);

export default WelcomePage;
