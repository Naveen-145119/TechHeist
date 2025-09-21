import React from 'react';
import '../App.css';
import '../user-uploads/style.css';

const HomePage = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="college-logo">
          <div className="logo-placeholder">
            <span>COLLEGE</span>
            <span>LOGO</span>
          </div>
        </div>
        <h1 className="hero-title">TECHHEIST</h1>
        <p className="hero-subtitle">WHERE CODE MEETS HEIST</p>
        <div className="hero-buttons">
          <button className="btn btn--primary btn--lg" id="explore-btn">EXPLORE</button>
          <a href="/register" className="btn btn--outline btn--lg" id="register-hero-btn">REGISTER</a>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default HomePage;
