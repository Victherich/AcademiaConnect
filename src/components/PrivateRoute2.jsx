import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';



const PrivateRoute2 = ({element}) => {

    const [student, setStudent]=useState(true)
  return student ? element : <Navigate to="/" />;
};

export default PrivateRoute2;
