import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './HomePage.css'; // Create this CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navbar/Header section for the buttons */}
      <header className="homepage-header">
        <div className="logo">
          {/* Your College Logo Here */}
        </div>
        <nav className="auth-nav">
          <Link to="/auth" className="auth-button login-button">
            Login
          </Link>
          <Link to="/auth" className="auth-button register-button">
            Register
          </Link>
        </nav>
      </header>

      {/* Your main content for the home page */}
      <main className="hero-section">
        <h1>TECHHEIST</h1>
        <p>16th - 17th October 2025</p>
        <button className="explore-button">Explore</button>
      </main>
    </div>
  );
};

export default HomePage;