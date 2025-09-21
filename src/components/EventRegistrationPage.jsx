import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../user-uploads/style.css';

const EventRegistrationPage = ({ user }) => {
  const { eventId } = useParams();
  const [teamName, setTeamName] = useState('');
  const [teammates, setTeammates] = useState([{ name: user?.name || '', email: user?.email || '' }]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleTeammateChange = (idx, field, value) => {
    const updated = [...teammates];
    updated[idx][field] = value;
    setTeammates(updated);
  };

  const addTeammate = () => {
    setTeammates([...teammates, { name: '', email: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!teamName || teammates.some(t => !t.name || !t.email)) {
      setError('Please fill all fields.');
      return;
    }
    try {
      // Appwrite registration document
      await window.databases.createDocument(
        window.databaseId,
        window.registrationsTableId,
        window.crypto.randomUUID(),
        {
          eventId,
          teamName,
          teammates,
          userId: user?.$id || '',
        }
      );
      setSuccess(true);
      setError('');
    } catch (err) {
      setError(err.message || 'Registration failed.');
      setSuccess(false);
    }
  };

  return (
    <section className="registration-section">
      <div className="container">
        <h2 className="registration-title">Register for Event</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input type="text" id="teamName" value={teamName} onChange={e => setTeamName(e.target.value)} required />
          </div>
          <div className="teammates-group">
            <label>Teammates</label>
            {teammates.map((teammate, idx) => (
              <div className="form-group" key={idx}>
                <input type="text" placeholder="Name" value={teammate.name} onChange={e => handleTeammateChange(idx, 'name', e.target.value)} required />
                <input type="email" placeholder="Email" value={teammate.email} onChange={e => handleTeammateChange(idx, 'email', e.target.value)} required />
              </div>
            ))}
            <button type="button" className="btn btn--outline btn--sm" onClick={addTeammate}>Add Teammate</button>
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn btn--primary btn--lg">Submit Registration</button>
        </form>
        {success && <div className="registration-success">Registration submitted successfully!</div>}
      </div>
    </section>
  );
};

export default EventRegistrationPage;
