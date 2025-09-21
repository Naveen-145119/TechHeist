import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwriteConfig'; // Your Appwrite setup
import { ID } from 'appwrite';
import './AuthPage.css'; // Create this for styling

const AuthPage = () => {
  const navigate = useNavigate();
  const [isRegisterView, setIsRegisterView] = useState(true); // Default to register view

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await account.create(ID.unique(), formData.email, formData.password, formData.name);
      // After creating the account, log the user in automatically
      await account.createEmailSession(formData.email, formData.password);
      navigate('/'); // Redirect to home page after successful registration
    } catch (error) {
      alert('Registration Failed: ' + error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(formData.email, formData.password);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      alert('Login Failed: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-toggle-buttons">
          <button onClick={() => setIsRegisterView(true)} className={isRegisterView ? 'active' : ''}>Register</button>
          <button onClick={() => setIsRegisterView(false)} className={!isRegisterView ? 'active' : ''}>Login</button>
        </div>

        {isRegisterView ? (
          // Registration Form
          <form onSubmit={handleRegister}>
            <h2>Create Account</h2>
            <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
            <button type="submit">Register</button>
          </form>
        ) : (
          // Login Form
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;