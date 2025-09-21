import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../user-uploads/style.css';

// Sample events data (to be replaced with Appwrite integration)
const eventsData = {
  hack24: {
    name: '24-Hour Hackathon',
    description: 'Build innovative solutions in 24 hours with your team',
    date: '2025-10-15',
    time: '09:00 AM',
    venue: 'Computer Lab A',
    entryFee: 200,
    maxTeamSize: 4,
    minTeamSize: 2,
    whatsappLink: 'https://wa.me/1234567890',
    prizes: '₹25,000 for winners',
    contact: 'John Doe (+91-1234567890)',
  },
  codewar: {
    name: 'Code War',
    description: 'Competitive programming challenge for coding ninjas',
    date: '2025-10-16',
    time: '02:00 PM',
    venue: 'Auditorium',
    entryFee: 150,
    maxTeamSize: 1,
    minTeamSize: 1,
    whatsappLink: 'https://wa.me/1234567890',
    prizes: '₹15,000 for top coders',
    contact: 'Jane Smith (+91-1234567890)',
  },
  // ...more events
};

const EventDetailPage = ({ user }) => {
  const { eventId } = useParams();
  const [event, setEvent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await window.databases.getDocument(
          window.databaseId,
          window.eventsTableId,
          eventId
        );
        setEvent(res);
      } catch (err) {
        setEvent(null);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [eventId]);
  if (loading) return <div className="container">Loading event details...</div>;
  if (!event) return <div className="container">Event not found.</div>;
  return (
    <section className="event-detail-section">
      <div className="container">
        <h2 className="event-detail-title">{event.name}</h2>
        <p className="event-detail-description">{event.description}</p>
        <div className="event-detail-meta">
          <span>Date: {event.date}</span>
          <span>Time: {event.time}</span>
          <span>Venue: {event.venue}</span>
          <span>Entry Fee: ₹{event.entryFee}</span>
        </div>
        <div className="event-detail-prizes">{event.prizes}</div>
        <div className="event-detail-contact">Contact: {event.contact}</div>
        <div className="event-detail-actions">
          <a href={event.whatsappLink} className="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">WhatsApp Query</a>
          {user ? (
            <a href={`/register/${event.$id}`} className="btn btn--primary btn--sm">Register</a>
          ) : (
            <a href="/login" className="btn btn--primary btn--sm">Login to Register</a>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
