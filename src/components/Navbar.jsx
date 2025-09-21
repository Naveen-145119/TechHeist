import React from 'react';
import '../App.css';
import '../style.css';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">TECHHEIST</span>
        </div>
        <div className="nav-menu" id="nav-menu">
          <a href="/" className="nav-link">HOME</a>
          <a href="/events" className="nav-link">EVENTS</a>
          {user ? (
            <button className="btn btn--outline nav-auth-btn" onClick={logout}>LOGOUT</button>
          ) : (
            <a href="/login" className="btn btn--outline nav-auth-btn">LOGIN</a>
          )}
        </div>
        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
