import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Calendar, Users, MapPin, Filter } from 'lucide-react'

const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')

  useEffect(() => {
    // Fetch all events
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events')
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
            description: 'The ultimate 48-hour coding challenge where teams compete to build innovative solutions',
            category: 'IT',
            date: '2024-03-15',
            venue: 'Main Auditorium',
            maxTeamSize: 4,
            prizeDetails: '₹25,000 for winners'
          },
          {
            _id: '2',
            eventName: 'AI Innovation Challenge',
            description: 'Build the future with artificial intelligence and machine learning',
            category: 'IT',
            date: '2024-03-16',
            venue: 'Computer Lab 1',
            maxTeamSize: 3,
            prizeDetails: '₹15,000 for winners'
          },
          {
            _id: '3',
            eventName: 'Cyber Security CTF',
            description: 'Capture the flag competition testing your cybersecurity skills',
            category: 'IT',
            date: '2024-03-17',
            venue: 'Computer Lab 2',
            maxTeamSize: 2,
            prizeDetails: '₹10,000 for winners'
          },
          {
            _id: '4',
            eventName: 'Web Development Contest',
            description: 'Create stunning websites with modern technologies',
            category: 'IT',
            date: '2024-03-18',
            venue: 'Computer Lab 3',
            maxTeamSize: 2,
            prizeDetails: '₹8,000 for winners'
          },
          {
            _id: '5',
            eventName: 'Tech Quiz Championship',
            description: 'Test your knowledge across various technology domains',
            category: 'Non-IT',
            date: '2024-03-19',
            venue: 'Seminar Hall',
            maxTeamSize: 2,
            prizeDetails: '₹5,000 for winners'
          },
          {
            _id: '6',
            eventName: 'Gaming Tournament',
            description: 'Ultimate gaming showdown across multiple game titles',
            category: 'Non-IT',
            date: '2024-03-20',
            venue: 'Gaming Arena',
            maxTeamSize: 1,
            prizeDetails: '₹7,000 for winners'
          },
          {
            _id: '7',
            eventName: 'Design Challenge',
            description: 'Creative design competition for UI/UX and graphic design',
            category: 'Non-IT',
            date: '2024-03-21',
            venue: 'Design Studio',
            maxTeamSize: 2,
            prizeDetails: '₹6,000 for winners'
          },
          {
            _id: '8',
            eventName: 'Photography Contest',
            description: 'Capture the essence of technology through your lens',
            category: 'Non-IT',
            date: '2024-03-22',
            venue: 'Campus Wide',
            maxTeamSize: 1,
            prizeDetails: '₹4,000 for winners'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const categories = ['All', 'IT', 'Non-IT']
  
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="dali-mask-icon w-16 h-16 mx-auto mb-4 animate-pulse"></div>
          <p className="text-foreground text-lg">Loading Events...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            All Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge. Test your skills. Claim your victory.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Filter by category:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "btn-primary" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Card key={event._id} className="event-card bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={event.category === 'IT' ? 'default' : 'secondary'}
                    className={event.category === 'IT' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {event.category}
                  </Badge>
                  <div className="dali-mask-icon opacity-50"></div>
                </div>
                <CardTitle className="text-foreground text-xl">{event.eventName}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Team of {event.maxTeamSize}</span>
                  </div>
                  {event.prizeDetails && (
                    <div className="text-sm font-semibold text-primary">
                      🏆 {event.prizeDetails}
                    </div>
                  )}
                </div>
                <Link to={`/event/${event._id}`} className="mt-auto">
                  <Button className="w-full btn-primary">
                    View Details & Register
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="dali-mask-icon w-16 h-16 mx-auto mb-4 opacity-50"></div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No events found</h3>
            <p className="text-muted-foreground">
              No events match the selected category. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventsPage