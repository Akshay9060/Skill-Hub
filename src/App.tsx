import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Add other protected routes similarly */}
          {/* <Route path="/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>} /> */}
          {/* <Route path="/mentors" element={<ProtectedRoute><Mentors /></ProtectedRoute>} /> */}
          {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
          {/* <Route path="/admin" element={<ProtectedRoute requireRole="admin"><Admin /></ProtectedRoute>} /> */}
          <Route path="/unauthorized" element={<div>Unauthorized</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;