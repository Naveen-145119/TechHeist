import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import EventsPage from './components/EventsPage'
import EventDetailPage from './components/EventDetailPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import EventRegistrationPage from './components/EventRegistrationPage'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('techheist_token')
        if (token) {
          // Validate token with backend
          const response = await fetch('http://localhost:5000/api/auth/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          if (response.ok) {
            const userData = await response.json()
            setUser(userData.user)
          } else {
            localStorage.removeItem('techheist_token')
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        localStorage.removeItem('techheist_token')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = (userData, token) => {
    setUser(userData)
    localStorage.setItem('techheist_token', token)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('techheist_token')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="dali-mask-icon w-16 h-16 mx-auto mb-4 animate-pulse"></div>
          <p className="text-foreground text-lg">Loading TECHHEIST...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
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
  )
}

export default App

