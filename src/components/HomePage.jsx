import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowDown, Calendar, Users, Trophy, ChevronRight } from 'lucide-react';
import techheistLogo from '../assets/techheist-logo.png';
import { databases, eventsTableId, databaseId } from '../appwriteConfig'; // Import Appwrite config
import { Query } from 'appwrite'; // Import Query for filtering

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Correctly fetch events from Appwrite
    const fetchEvents = async () => {
      try {
        // We will fetch all events and filter them on the client-side for this example.
        // For larger apps, you might query for a "featured" attribute.
        const response = await databases.listDocuments(
          databaseId,
          eventsTableId,
          [Query.limit(6)] // Get the 6 most recent events
        );
        setEvents(response.documents || []);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        // Optional: You can keep mock data here for fallback if you want
        setEvents([]); 
      }
    };

    fetchEvents();
  }, []);

  const scrollToEvents = () => {
    document.getElementById('events-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Use the correct properties from the Appwrite document (`category`, `name`, etc.)
  const itEvents = events.filter(event => event.category === 'IT');
  const nonItEvents = events.filter(event => event.category === 'Non-IT');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center">
        <div className="hero-content text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <img 
              src={techheistLogo} 
              alt="TECHHEIST" 
              className="h-32 w-auto mx-auto mb-6 techheist-logo"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 glitch-text" data-text="TECHHEIST">
            TECHHEIST
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Ultimate IT Festival - Where Technology Meets Innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-primary text-lg px-8 py-3"
              onClick={scrollToEvents}
            >
              <span>EXPLORE EVENTS</span>
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 15-20, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>500+ Participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>₹50,000 Prizes</span>
              </div>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section id="events-section" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your battlefield. Master your domain. Claim your victory.
            </p>
          </div>

          {/* IT Events */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-foreground flex items-center">
                <div className="dali-mask-icon mr-3"></div>
                IT Events
              </h3>
              <Link to="/events?category=IT">
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itEvents.map((event) => (
                <Card key={event.$id} className="event-card bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{event.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Team of {event.maxTeamSize || 'any size'}</span>
                      </div>
                    </div>
                    <Link to={`/event/${event.$id}`}>
                      <Button className="w-full btn-primary">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Non-IT Events */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-foreground flex items-center">
                <div className="dali-mask-icon mr-3"></div>
                Non-IT Events
              </h3>
              <Link to="/events?category=Non-IT">
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonItEvents.map((event) => (
                <Card key={event.$id} className="event-card bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{event.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Team of {event.maxTeamSize || 'any size'}</span>
                      </div>
                    </div>
                    <Link to={`/event/${event.$id}`}>
                      <Button className="w-full btn-primary">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link to="/events">
              <Button className="btn-primary text-lg px-12 py-4">
                VIEW ALL EVENTS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage;
