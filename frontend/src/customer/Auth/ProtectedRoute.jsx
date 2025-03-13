// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element }) => {
//   const isAuthenticated = localStorage.getItem('_id'); // Check if the user is authenticated
  
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;  // Redirect to login if not authenticated
//   }
  
//   return element;  // Allow access if authenticated
// };

// export default ProtectedRoute;


import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
