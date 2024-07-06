import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from './Context';



const PrivateRoute3 = ({element}) => {

    // const [student, setStudent]=useState(true)
    const {teacher}=useContext(Context)
  return teacher || !teacher? element : <Navigate to="/teacherlogin" />;
};

export default PrivateRoute3;
