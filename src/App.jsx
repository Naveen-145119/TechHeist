import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { account } from './appwriteConfig';
import { Toaster } from 'react-hot-toast'; // Import the Toaster

// Components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import EventDetailPage from './components/EventDetailPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EventRegistrationPage from './components/EventRegistrationPage';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="dali-mask-icon w-16 h-16 mx-auto mb-4 animate-pulse"></div>
          <p className="text-foreground text-lg">Loading TECHHEIST...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      {/* Add the Toaster component here */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar user={user} logout={logout} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:eventId" element={<EventDetailPage user={user} />} />
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route path="/register" element={<RegisterPage login={login} />} />
          <Route 
            path="/register/:eventId" 
            element={<EventRegistrationPage user={user} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
