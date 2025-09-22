import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu, X, User, LogOut } from 'lucide-react'
import techheistLogo from '../assets/techheist-logo.png'

const Navbar = ({ user, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '#' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav 
      id="navbar" 
      className="animate fixed z-50 flex max-w-full items-center justify-between px-4 duration-500 inset-x-0 top-2 mx-auto h-16 w-11/12 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm backdrop-brightness-150 md:top-4 md:max-w-3xl lg:max-w-5xl lg:px-6 xl:max-w-7xl"
      style={{
        backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0) 1px, rgba(30, 41, 59, 0.5) 1px)',
        backgroundSize: '4px 4px'
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img 
          src={techheistLogo} 
          alt="TECHHEIST Logo" 
          className="w-7 h-7 object-contain"
        />
        <p className="text-xl font-semibold tracking-tight text-white">TECHHEIST</p>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center text-foreground/70 md:gap-5 lg:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`animate hover:text-white transition-colors duration-300 ${
              isActive(link.path) 
                ? 'text-white font-medium' 
                : 'text-white/70'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop User Actions */}
      <div className="hidden md:flex items-center gap-4 text-foreground/70">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-white/70" />
              <span className="text-white/70">{user.fullName}</span>
            </div>
            <button
              onClick={logout}
              className="animate rounded-full border border-slate-600 bg-slate-800 px-4 py-2 font-medium hover:border-slate-500 hover:bg-slate-700 text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login">
              <button className="animate hover:text-white transition-colors duration-300 text-white/70">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="animate rounded-full border border-slate-600 bg-slate-800 px-4 py-2 font-medium hover:border-slate-500 hover:bg-slate-700 text-white/70 hover:text-white transition-all duration-300">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white/70 hover:text-white hover:bg-slate-800/50"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive(link.path) ? 'text-white' : 'text-white/70'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-slate-700">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="w-4 h-4 text-white/70" />
                    <span className="text-white/70">{user.fullName}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-center space-x-2 rounded-full border border-slate-600 bg-slate-800 px-4 py-2 font-medium hover:border-slate-500 hover:bg-slate-700 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-2 text-center text-white/70 hover:text-white transition-colors duration-300">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full rounded-full border border-slate-600 bg-slate-800 px-4 py-2 font-medium hover:border-slate-500 hover:bg-slate-700 text-white/70 hover:text-white transition-all duration-300">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

