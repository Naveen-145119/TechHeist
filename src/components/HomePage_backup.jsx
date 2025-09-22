import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const events = [
    {
      id: 1,
      name: "Code Carnival",
      description: "Team size: To be updated.\nOverview coming soon.",
      icon: "square"
    },
    {
      id: 2,
      name: "Bug Busters", 
      description: "Team size: To be updated.\nOverview coming soon.",
      icon: "circle"
    },
    {
      id: 3,
      name: "Battle of Intellects",
      description: "Team size: To be updated.\nOverview coming soon.", 
      icon: "triangle"
    },
    {
      id: 4,
      name: "WebCrux",
      description: "A challenging web development competition to build innovative sites or apps. Open to all with creative skills.",
      icon: "square"
    },
    {
      id: 5,
      name: "HackFury",
      description: "A hackathon where teams tackle real-world problems with code, logic, and teamwork. Team up and compete.",
      icon: "circle"
    },
    {
      id: 6,
      name: "QuizIT",
      description: "Test your tech and IT knowledge! Participate solo or with friends. Prizes for top scorers.",
      icon: "triangle"
    },
    {
      id: 7,
      name: "ShutterFrame",
      description: "A challenging web development competition to build innovative sites or apps. Open to all with creative skills.",
      icon: "square"
    },
    {
      id: 8,
      name: "Pixora",
      description: "A hackathon where teams tackle real-world problems with code, logic, and teamwork. Team up and compete.",
      icon: "circle"
    },
    {
      id: 9,
      name: "Poster",
      description: "Test your tech and IT knowledge! Participate solo or with friends. Prizes for top scorers.",
      icon: "triangle"
    },
    {
      id: 10,
      name: "Logo-design",
      description: "A challenging web development competition to build innovative sites or apps. Open to all with creative skills.",
      icon: "square"
    },
    {
      id: 11,
      name: "Bgmi",
      description: "A hackathon where teams tackle real-world problems with code, logic, and teamwork. Team up and compete.",
      icon: "circle"
    },
    {
      id: 12,
      name: "Free Fire",
      description: "Test your tech and IT knowledge! Participate solo or with friends. Prizes for top scorers.",
      icon: "triangle"
    }
  ];

  const EventIcon = ({ type }) => {
    if (type === "square") {
      return (
        <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666626 6.66003C0.666626 3.34603 3.35263 0.660034 6.66663 0.660034H90.6666C93.9806 0.660034 96.6666 3.34603 96.6666 6.66003V90.66C96.6666 93.974 93.9806 96.66 90.6666 96.66H6.66663C3.35263 96.66 0.666626 93.974 0.666626 90.66V6.66003Z" fill="white"/>
        </svg>
      );
    } else if (type === "circle") {
      return (
        <svg width="102" height="103" viewBox="0 0 102 103" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 51.66C0 23.493 22.833 0.660034 51 0.660034C79.167 0.660034 102 23.493 102 51.66C102 79.827 79.167 102.66 51 102.66C22.833 102.66 0 79.827 0 51.66Z" fill="white"/>
        </svg>
      );
    } else {
      return (
        <svg width="111" height="94" viewBox="0 0 111 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.7533 2.005C53.9163 0.046999 56.7503 0.046999 57.9133 2.005L109.642 89.128C110.83 91.128 109.389 93.66 107.063 93.66H3.60332C1.27732 93.66 -0.163675 91.128 1.02432 89.128L52.7533 2.005Z" fill="white"/>
        </svg>
      );
    }
  };

  return (
    <div style={{ width: '100%', background: 'white', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        width: '960px',
        height: '64px',
        margin: '0 auto',
        background: 'white',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 0
      }}>
        <div style={{ width: '240px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div style={{ width: '51px', height: '17px', position: 'relative' }}>
            <svg width="51" height="18" viewBox="0 0 51 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_39_46)">
                <path d="M0 2C0 1.448 0.448 1 1 1H15C15.552 1 16 1.448 16 2V16C16 16.552 15.552 17 15 17H1C0.448 17 0 16.552 0 16V2ZM41.07 1.724C41.264 1.398 41.736 1.398 41.93 1.724L50.552 16.245C50.749 16.578 50.509 17 50.122 17H32.878C32.491 17 32.251 16.578 32.448 16.245L41.07 1.724ZM25.5 0.5C30.194 0.5 34 4.306 34 9C34 13.694 30.194 17.5 25.5 17.5C20.806 17.5 17 13.694 17 9C17 4.306 20.806 0.5 25.5 0.5Z" fill="black"/>
              </g>
            </svg>
          </div>
        </div>
        
        <div style={{ width: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: '#999999', fontSize: '14.53px', fontFamily: 'Inter', fontWeight: '500', textAlign: 'center' }}>Home</span>
          <span style={{ color: '#999999', fontSize: '14.30px', fontFamily: 'Inter', fontWeight: '500', textAlign: 'center' }}>Events</span>
          <span style={{ color: '#999999', fontSize: '14.41px', fontFamily: 'Inter', fontWeight: '500', textAlign: 'center' }}>Contact</span>
        </div>
        
        <div style={{ width: '240px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{
            height: '30px',
            paddingLeft: '12px',
            paddingRight: '12px',
            background: 'black',
            borderRadius: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '13.56px', fontFamily: 'Inter', fontWeight: '600' }}>Register</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        width: '960px',
        height: '500px',
        margin: '64px auto 0',
        background: 'rgba(255, 255, 255, 0)',
        boxShadow: '15px 15px 8.48528px -1px rgba(0, 0, 0, 0.20)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '38.44px',
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: '40px',
            marginBottom: '10px'
          }}>
            TECHHEIST
          </h1>
          <h2 style={{
            textAlign: 'center',
            color: '#999999',
            fontSize: '37.81px',
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: '40px'
          }}>
            IT Fest 2025
          </h2>
        </div>
        
        <div style={{
          height: '30px',
          paddingLeft: '12px',
          paddingRight: '12px',
          background: 'black',
          borderRadius: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        </div>
      </section>

      {/* Events Section */}
      <section style={{ width: '960px', margin: '80px auto', padding: '80px 0' }}>
        {/* First Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px', marginBottom: '80px' }}>
          {events.slice(0, 3).map((event) => (
            <div key={event.id} style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '18px'
            }}>
              <div style={{
                width: '100%',
                padding: '78px 0',
                background: '#F5F5F5',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <EventIcon type={event.icon} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <h3 style={{
                  color: '#0099FF',
                  fontSize: '20.97px',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  lineHeight: '22px',
                  marginBottom: '7px'
                }}>
                  {event.name}
                </h3>
                <p style={{
                  color: '#999999',
                  fontSize: '16.73px',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  lineHeight: '21.60px',
                  whiteSpace: 'pre-line',
                  maxWidth: '253px'
                }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px', marginBottom: '80px' }}>
          {events.slice(3, 6).map((event) => (
            <div key={event.id} style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '18px'
            }}>
              <div style={{
                width: '100%',
                padding: '78px 0',
                background: '#F5F5F5',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <EventIcon type={event.icon} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <h3 style={{
                  color: '#0099FF',
                  fontSize: '20.62px',
                  fontFamily: event.id === 5 ? 'Flow Circular' : event.id === 6 ? 'Flow Circular' : 'Inter',
                  fontWeight: event.id === 5 || event.id === 6 ? '400' : '600',
                  lineHeight: '22px',
                  marginBottom: '7px'
                }}>
                  {event.name}
                </h3>
                <p style={{
                  color: '#999999',
                  fontSize: event.id === 5 || event.id === 6 ? '18px' : '16.59px',
                  fontFamily: event.id === 5 || event.id === 6 ? 'Flow Circular' : 'Inter',
                  fontWeight: event.id === 5 || event.id === 6 ? '400' : '500',
                  lineHeight: '21.60px',
                  whiteSpace: 'pre-line',
                  maxWidth: '253px'
                }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px', marginBottom: '80px' }}>
          {events.slice(6, 9).map((event) => (
            <div key={event.id} style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '18px'
            }}>
              <div style={{
                width: '100%',
                padding: '78px 0',
                background: '#F5F5F5',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <EventIcon type={event.icon} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <h3 style={{
                  color: '#0099FF',
                  fontSize: event.id === 8 || event.id === 9 ? '22px' : '20.62px',
                  fontFamily: event.id === 8 || event.id === 9 ? 'Flow Circular' : 'Inter',
                  fontWeight: event.id === 8 || event.id === 9 ? '400' : '600',
                  lineHeight: '22px',
                  marginBottom: '7px'
                }}>
                  {event.name}
                </h3>
                <p style={{
                  color: '#999999',
                  fontSize: event.id === 8 || event.id === 9 ? '18px' : '16.59px',
                  fontFamily: event.id === 8 || event.id === 9 ? 'Flow Circular' : 'Inter',
                  fontWeight: event.id === 8 || event.id === 9 ? '400' : '500',
                  lineHeight: '21.60px',
                  whiteSpace: 'pre-line',
                  maxWidth: '253px'
                }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px' }}>
          {events.slice(9, 12).map((event) => (
            <div key={event.id} style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '18px'
            }}>
              <div style={{
                width: '100%',
                padding: '78px 0',
                background: '#F5F5F5',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <EventIcon type={event.icon} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <h3 style={{
                  color: '#0099FF',
                  fontSize: event.id === 12 ? '22px' : '20.45px',
                  fontFamily: event.id === 12 ? 'Flow Circular' : 'Inter',
                  fontWeight: event.id === 12 ? '400' : '600',
                  lineHeight: '22px',
                  marginBottom: '7px'
                }}>
                  {event.name}
                </h3>
                <p style={{
                  color: '#999999',
                  fontSize: event.id === 12 ? '18px' : '16.59px',
                  fontFamily: event.id === 12 ? 'Flow Circular' : 'Inter',
                  fontWeight: event.id === 12 ? '400' : '500',
                  lineHeight: '21.60px',
                  whiteSpace: 'pre-line',
                  maxWidth: '253px'
                }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
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
