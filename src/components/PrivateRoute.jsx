import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({element}) => {

    const [Admin, setUser]=useState(true)
  return Admin ? element : <Navigate to="/" />;
};

export default PrivateRoute;
