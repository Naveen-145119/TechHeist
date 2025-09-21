import React, { useState } from 'react';
import '../App.css';
import '../user-uploads/style.css';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    try {
      // Appwrite login
      const response = await window.account.createEmailSession(email, password);
      const userProfile = await window.account.get();
      login(userProfile, response.$id); // Use session ID as token
    } catch (err) {
      setError(err.message || 'Login failed.');
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn btn--primary btn--lg">Login</button>
        </form>
        <div className="auth-links">
          <a href="/register">Don't have an account? Register</a>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
