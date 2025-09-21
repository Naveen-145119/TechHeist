import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../style.css';

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
