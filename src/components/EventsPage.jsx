import React from 'react';
import '../App.css';
import '../style.css';

// Sample events data (to be replaced with Appwrite integration)
const eventsData = {
  itEvents: [
    {
      id: 'hack24',
      name: '24-Hour Hackathon',
      description: 'Build innovative solutions in 24 hours with your team',
      category: 'IT',
      date: '2025-10-15',
      time: '09:00 AM',
      venue: 'Computer Lab A',
      entryFee: 200,
      maxTeamSize: 4,
      minTeamSize: 2,
      whatsappLink: 'https://wa.me/1234567890',
      prizes: '₹25,000 for winners',
    },
    {
      id: 'codewar',
      name: 'Code War',
      description: 'Competitive programming challenge for coding ninjas',
      category: 'IT',
      date: '2025-10-16',
      time: '02:00 PM',
      venue: 'Auditorium',
      entryFee: 150,
      maxTeamSize: 1,
      minTeamSize: 1,
      whatsappLink: 'https://wa.me/1234567890',
      prizes: '₹15,000 for top coders',
    },
    // ...more events
  ],
  nonItEvents: [
    // Add non-IT events here
  ],
};

const EventsPage = () => {
  const [itEvents, setItEvents] = React.useState([]);
  const [nonItEvents, setNonItEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await window.databases.listDocuments(
          window.databaseId,
          window.eventsTableId
        );
        setItEvents(res.documents.filter(e => e.category === 'IT'));
        setNonItEvents(res.documents.filter(e => e.category === 'NON-IT'));
      } catch (err) {
        setItEvents([]);
        setNonItEvents([]);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);
  if (loading) return <div className="container">Loading events...</div>;
  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">EVENTS</h2>
          <p className="section-subtitle">Choose your battleground</p>
        </div>
        <div className="event-categories">
          <div className="event-category">
            <h3 className="event-category-title">IT EVENTS</h3>
            <div className="event-cards">
              {itEvents.length === 0 && (
                <div className="event-card">
                  <h4 className="event-name">No IT events found</h4>
                </div>
              )}
              {itEvents.map(event => (
                <div className="event-card" key={event.$id}>
                  <h4 className="event-name">{event.name}</h4>
                  <p className="event-description">{event.description}</p>
                  <div className="event-meta">
                    <span>Date: {event.date}</span>
                    <span>Time: {event.time}</span>
                    <span>Venue: {event.venue}</span>
                  </div>
                  <div className="event-prizes">{event.prizes}</div>
                  <a href={`/event/${event.$id}`} className="btn btn--primary btn--sm">View Details</a>
                </div>
              ))}
            </div>
          </div>
          <div className="event-category">
            <h3 className="event-category-title">NON-IT EVENTS</h3>
            <div className="event-cards">
              {nonItEvents.length === 0 && (
                <div className="event-card">
                  <h4 className="event-name">Coming Soon</h4>
                  <p className="event-description">Stay tuned for more events!</p>
                </div>
              )}
              {nonItEvents.map(event => (
                <div className="event-card" key={event.$id}>
                  <h4 className="event-name">{event.name}</h4>
                  <p className="event-description">{event.description}</p>
                  <div className="event-meta">
                    <span>Date: {event.date}</span>
                    <span>Time: {event.time}</span>
                    <span>Venue: {event.venue}</span>
                  </div>
                  <div className="event-prizes">{event.prizes}</div>
                  <a href={`/event/${event.$id}`} className="btn btn--primary btn--sm">View Details</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
