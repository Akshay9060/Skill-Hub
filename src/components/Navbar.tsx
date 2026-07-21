import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, LogOut, Home as HomeIcon, BookOpen, Users, LayoutDashboard, Shield } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const role = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          EntreSkill Hub
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-accent flex items-center gap-1">
            <HomeIcon className="w-5 h-5" /> Home
          </Link>
          {!token && (
            <>
              <Link to="/login" className="hover:text-accent flex items-center gap-1">
                <LogIn className="w-5 h-5" /> Login
              </Link>
              <Link to="/register" className="hover:text-accent flex items-center gap-1">
                <UserPlus className="w-5 h-5" /> Register
              </Link>
            </>
          )}
          {token && (
            <>
              <Link to="/dashboard" className="hover:text-accent flex items-center gap-1">
                <LayoutDashboard className="w-5 h-5" /> Dashboard
              </Link>
              <Link to="/skills" className="hover:text-accent flex items-center gap-1">
                <BookOpen className="w-5 h-5" /> Skills
              </Link>
              <Link to="/mentors" className="hover:text-accent flex items-center gap-1">
                <Users className="w-5 h-5" /> Mentors
              </Link>
              <Link to="/profile" className="hover:text-accent flex items-center gap-1">
                <UserPlus className="w-5 h-5" /> Profile
              </Link>
              {role === 'admin' && (
                <Link to="/admin" className="hover:text-accent flex items-center gap-1">
                  <Shield className="w-5 h-5" /> Admin
                </Link>
              )}
              <button onClick={handleLogout} className="hover:text-accent flex items-center gap-1">
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;