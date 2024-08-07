import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AdminHome from './components/AdminHome';
import EmployeeDashboard from './components/EmployeeDashboard';
import HRTravelAdminDashboard from './components/HRTravelAdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import Unauthorized from './components/Unauthorized';
import PrivateRoute from './context/PrivateRoute';
import Navbar from './components/Navbar';  // Adjust the path if necessary

function App() {
  return (
    <>
      <Navbar />  {/* Include the NavBar component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin-dashboard"
          element={<PrivateRoute roles={['admin']} element={<AdminHome />} />}
        />
        <Route
          path="/employee-dashboard"
          element={<PrivateRoute roles={['employee']} element={<EmployeeDashboard />} />}
        />
        <Route
          path="/hr-travel-admin-dashboard"
          element={<PrivateRoute roles={['hr-travel-admin']} element={<HRTravelAdminDashboard />} />}
        />
        <Route
          path="/manager-dashboard"
          element={<PrivateRoute roles={['manager']} element={<ManagerDashboard />} />}
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
