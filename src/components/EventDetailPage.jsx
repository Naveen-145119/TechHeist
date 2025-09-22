import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Users, MapPin, Trophy, MessageCircle, ArrowLeft } from 'lucide-react';
import { databases, databaseId, eventsTableId } from '../appwriteConfig'; // Import Appwrite config

const EventDetailPage = ({ user }) => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch event details from Appwrite
    const fetchEvent = async () => {
      try {
        const data = await databases.getDocument(databaseId, eventsTableId, eventId);
        setEvent(data);
      } catch (error) {
        console.error('Failed to fetch event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="dali-mask-icon w-16 h-16 mx-auto mb-4 animate-pulse"></div>
          <p className="text-foreground text-lg">Loading Event Details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h2>
          <Link to="/events">
            <Button className="btn-primary">Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/events" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events</span>
        </Link>

        <div className="text-center mb-12">
          <Badge 
            variant={event.category === 'IT' ? 'default' : 'secondary'}
            className={`mb-4 ${event.category === 'IT' ? 'bg-primary text-primary-foreground' : ''}`}
          >
            {event.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {event.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {event.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="event-card bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold text-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Venue</p>
                      <p className="font-semibold text-foreground">{event.venue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-semibold text-foreground">
                        {event.minTeamSize === event.maxTeamSize 
                          ? `${event.maxTeamSize} members`
                          : `${event.minTeamSize}-${event.maxTeamSize} members`
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Prize</p>
                      <p className="font-semibold text-foreground">{event.prizeDetails}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Rules & Regulations</h3>
                  <div 
                    className="prose prose-invert max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: event.rules }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="event-card bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle className="text-foreground">Register Now</CardTitle>
                <CardDescription>
                  Secure your spot in this exciting event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {user ? (
                  <Link to={`/register/${eventId}`}>
                    <Button className="w-full btn-primary text-lg py-3">
                      REGISTER FOR EVENT
                    </Button>
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground text-center">
                      Please login to register for this event
                    </p>
                    <Link to="/login">
                      <Button className="w-full btn-primary">
                        LOGIN TO REGISTER
                      </Button>
                    </Link>
                  </div>
                )}

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                  <div className="space-y-2">
                    <a 
                      href={event.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Support</span>
                    </a>
                    <div className="text-sm text-muted-foreground">
                      <p>📧 {event.contactEmail}</p>
                      <p>📞 {event.contactPhone}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
