import React, { useState } from 'react';
import '../App.css';
import '../user-uploads/style.css';

const RegisterPage = ({ login }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      // Appwrite registration
      const response = await window.account.create(
        window.crypto.randomUUID(),
        email,
        password,
        name
      );
      // Auto-login after registration
      await window.account.createEmailSession(email, password);
      const userProfile = await window.account.get();
      login(userProfile, response.$id);
    } catch (err) {
      setError(err.message || 'Registration failed.');
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <h2 className="auth-title">Register</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn btn--primary btn--lg">Register</button>
        </form>
        <div className="auth-links">
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
