import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import Header from '../components/layout/Header';
// import Dashboard from '../pages/Dashboard'; // Assuming a Dashboard component exists

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          /> */}
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Add other routes here */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;