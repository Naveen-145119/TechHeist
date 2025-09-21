import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import AuthPage from './pages/AuthPage'; // <-- Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} /> {/* <-- Add this route */}
        <Route path="/event/:id" element={<EventDetailsPage />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}
export default App;