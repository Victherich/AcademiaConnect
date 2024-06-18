import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from './Context';



const PrivateRoute = ({element}) => {

    // const [Admin, setUser]=useState(true)
    const {Admin}=useContext(Context)
  return Admin ? element : <Navigate to="/schoollogin" />;
};

export default PrivateRoute;
