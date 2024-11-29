import React from 'react';
import { Link } from 'react-router-dom';  // For navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Password Manager
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/dashboard" className="navbar-item">
            Dashboard
          </Link>
          <Link to="/login" className="navbar-item">
            Login
          </Link>
          <Link to="/register" className="navbar-item">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
