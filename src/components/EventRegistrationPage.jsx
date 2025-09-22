import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { databases, databaseId, eventsTableId, registrationsTableId } from '../appwriteConfig'; // Import Appwrite config
import { ID } from 'appwrite'; // Import ID for creating unique document IDs

const EventRegistrationPage = ({ user }) => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    teamName: '',
    teammates: []
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Fetch event details from Appwrite
    const fetchEvent = async () => {
      try {
        const response = await databases.getDocument(databaseId, eventsTableId, eventId);
        setEvent(response);
        
        // Initialize teammates array based on team size
        const maxTeammates = response.maxTeamSize - 1; // Excluding the user
        if (maxTeammates > 0) {
          setFormData({
            teamName: '',
            teammates: Array(maxTeammates).fill({ name: '', email: '', phoneNumber: '' })
          });
        }
      } catch (error) {
        console.error('Failed to fetch event:', error);
        setError('Failed to load event details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, user, navigate]);

  const handleTeammateChange = (index, field, value) => {
    const newTeammates = [...formData.teammates];
    newTeammates[index] = { ...newTeammates[index], [field]: value };
    setFormData({ ...formData, teammates: newTeammates });
  };

  const addTeammate = () => {
    if (event && formData.teammates.length < event.maxTeamSize - 1) {
      setFormData({
        ...formData,
        teammates: [...formData.teammates, { name: '', email: '', phoneNumber: '' }]
      });
    }
  };

  const removeTeammate = (index) => {
    const newTeammates = formData.teammates.filter((_, i) => i !== index);
    setFormData({ ...formData, teammates: newTeammates });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const validTeammates = formData.teammates.filter(
      teammate => teammate.name.trim() && teammate.email.trim() && teammate.phoneNumber.trim()
    );

    const totalTeamSize = validTeammates.length + 1; // +1 for the user

    if (totalTeamSize < event.minTeamSize) {
      setError(`Team must have at least ${event.minTeamSize} members`);
      setSubmitting(false);
      return;
    }
    if (totalTeamSize > event.maxTeamSize) {
        setError(`Team cannot have more than ${event.maxTeamSize} members`);
        setSubmitting(false);
        return;
    }

    try {
      await databases.createDocument(
        databaseId,
        registrationsTableId, // Ensure this is in your appwriteConfig.js
        ID.unique(),
        {
          eventId: eventId,
          teamName: formData.teamName,
          teammates: JSON.stringify(validTeammates), // Store teammates as JSON
          userId: user.$id,
        }
      );

      setSuccess(true);
      setTimeout(() => {
        navigate(`/event/${eventId}`);
      }, 2000);
      
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="dali-mask-icon w-16 h-16 mx-auto mb-4 animate-pulse"></div>
          <p className="text-foreground text-lg">Loading Registration Form...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="dali-mask-icon w-16 h-16 mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold text-gradient mb-4">Registration Successful!</h2>
          <p className="text-muted-foreground mb-6">
            You have successfully registered for {event?.eventName}
          </p>
          <Link to={`/event/${eventId}`}>
            <Button className="btn-primary">Back to Event</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to={`/event/${eventId}`} className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Event</span>
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Event Registration</h1>
          <p className="text-muted-foreground">{event?.eventName}</p>
        </div>

        <Card className="event-card bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Registration Details</CardTitle>
            <CardDescription>
              Fill in your team details to register for this event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Team Leader</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/20 rounded-lg">
                  <div>
                    <Label>Full Name</Label>
                    <Input value={user.name} disabled />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input value={user.email} disabled />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  type="text"
                  placeholder="Enter your team name"
                  value={formData.teamName}
                  onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Team Members</h3>
                  {event && formData.teammates.length < event.maxTeamSize - 1 && (
                    <Button type="button" variant="outline" size="sm" onClick={addTeammate}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Member
                    </Button>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Team size: {event?.minTeamSize}-{event?.maxTeamSize} members (including you)
                </p>

                {formData.teammates.map((teammate, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">Member {index + 2}</h4>
                      {event && formData.teammates.length >= event.minTeamSize - 1 && (
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeTeammate(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Full Name</Label>
                        <Input
                          type="text"
                          placeholder="Member name"
                          value={teammate.name}
                          onChange={(e) => handleTeammateChange(index, 'name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          placeholder="member@example.com"
                          value={teammate.email}
                          onChange={(e) => handleTeammateChange(index, 'email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Phone Number</Label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={teammate.phoneNumber}
                          onChange={(e) => handleTeammateChange(index, 'phoneNumber', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary text-lg py-3" 
                disabled={submitting}
              >
                {submitting ? 'Registering...' : 'REGISTER FOR EVENT'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventRegistrationPage;
