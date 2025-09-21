import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ArrowDown, Calendar, Users, Trophy, ChevronRight } from 'lucide-react'
import techheistLogo from '../assets/techheist-logo.png'

const HomePage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Fetch featured events
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events?featured=true&limit=6')
        if (response.ok) {
          const data = await response.json()
          setEvents(data.events || [])
        }
      } catch (error) {
        console.error('Failed to fetch events:', error)
        // Mock data for development
        setEvents([
          {
            _id: '1',
            eventName: 'Hackathon Supreme',
            description: 'The ultimate coding challenge',
            category: 'IT',
            date: '2024-03-15',
            maxTeamSize: 4
          },
          {
            _id: '2',
            eventName: 'AI Innovation Challenge',
            description: 'Build the future with AI',
            category: 'IT',
            date: '2024-03-16',
            maxTeamSize: 3
          },
          {
            _id: '3',
            eventName: 'Cyber Security CTF',
            description: 'Capture the flag competition',
            category: 'IT',
            date: '2024-03-17',
            maxTeamSize: 2
          },
          {
            _id: '4',
            eventName: 'Tech Quiz',
            description: 'Test your tech knowledge',
            category: 'Non-IT',
            date: '2024-03-18',
            maxTeamSize: 2
          },
          {
            _id: '5',
            eventName: 'Gaming Tournament',
            description: 'Ultimate gaming showdown',
            category: 'Non-IT',
            date: '2024-03-19',
            maxTeamSize: 1
          },
          {
            _id: '6',
            eventName: 'Design Challenge',
            description: 'Creative design competition',
            category: 'Non-IT',
            date: '2024-03-20',
            maxTeamSize: 2
          }
        ])
      }
    }

    fetchEvents()
  }, [])

  const scrollToEvents = () => {
    document.getElementById('events-section').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const itEvents = events.filter(event => event.category === 'IT')
  const nonItEvents = events.filter(event => event.category === 'Non-IT')

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
                <Card key={event._id} className="event-card bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{event.eventName}</CardTitle>
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
                        <span>Team of {event.maxTeamSize}</span>
                      </div>
                    </div>
                    <Link to={`/event/${event._id}`}>
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
                <Card key={event._id} className="event-card bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{event.eventName}</CardTitle>
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
                        <span>Team of {event.maxTeamSize}</span>
                      </div>
                    </div>
                    <Link to={`/event/${event._id}`}>
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

export default HomePage

