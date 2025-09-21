import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { databases, databaseId, eventsTableId, account } from '../appwriteConfig';
import './EventDetailsPage.css'; // Create this CSS file

const EventDetailsPage = () => {
  const { id } = useParams(); // Gets the event ID from the URL (e.g., /event/123)
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await databases.getDocument(databaseId, eventsTableId, id);
        setEvent(response);
      } catch (err) {
        setError('Could not find the event. It may have been removed.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]); // Re-run this effect if the ID in the URL changes

  const handleRegisterClick = async () => {
    try {
      await account.get(); // Checks if a user is currently logged in
      navigate(`/register/${id}`); // If logged in, go to the registration form
    } catch (err) {
      // If not logged in, Appwrite throws an error.
      // Redirect to the login page, but also pass where we came from.
      navigate('/auth', { state: { from: `/event/${id}` } });
    }
  };

  if (loading) {
    return <div className="page-message">Loading Event...</div>;
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="page-message error">{error}</div>
        <Link to="/" className="back-link">
          &larr; Back to all events
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      {event && (
        <div className="event-details-content">
          <h1 className="event-title">{event.name}</h1>
          <p className="event-description">{event.description}</p>

          <h2 className="rules-title">Rules & Regulations</h2>
          {/* Assuming 'rules' is an array of strings in your Appwrite table */}
          <ul className="rules-list">
            {event.rules && event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>

          <button className="register-button" onClick={handleRegisterClick}>
            Register for this Event
          </button>
        </div>
      )}
      <Link to="/" className="back-link">
        &larr; Back to all events
      </Link>
    </div>
  );
};

export default EventDetailsPage;