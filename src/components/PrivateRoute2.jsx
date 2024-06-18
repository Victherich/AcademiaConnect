import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from './Context';



const PrivateRoute2 = ({element}) => {

    // const [student, setStudent]=useState(true)
    const {student}=useContext(Context)
  return student ? element : <Navigate to="/studentlogin" />;
};

export default PrivateRoute2;
