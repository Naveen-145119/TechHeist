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
      description: "A challenging web\ndevelopment competition to\nbuild innovative sites or apps.\nOpen to all with creative skills.",
      icon: "square"
    },
    {
      id: 5,
      name: "HackFury",
      description: "A hackathon where\nteams tackle real-world\nproblems with code,\nlogic, and teamwork.\nTeam up and compete.",
      icon: "circle"
    },
    {
      id: 6,
      name: "QuizIT",
      description: "Test your tech and IT\nknowledge! Participate\nsolo or with friends.\nPrizes for top scorers.",
      icon: "triangle"
    },
    {
      id: 7,
      name: "ShutterFrame",
      description: "A challenging web\ndevelopment competition to\nbuild innovative sites or apps.\nOpen to all with creative skills.",
      icon: "square"
    },
    {
      id: 8,
      name: "Pixora",
      description: "A hackathon where\nteams tackle real-world\nproblems with code,\nlogic, and teamwork.\nTeam up and compete.",
      icon: "circle"
    },
    {
      id: 9,
      name: "Poster",
      description: "Test your tech and IT\nknowledge! Participate\nsolo or with friends.\nPrizes for top scorers.",
      icon: "triangle"
    },
    {
      id: 10,
      name: "Logo-design",
      description: "A challenging web\ndevelopment competition to\nbuild innovative sites or apps.\nOpen to all with creative skills.",
      icon: "square"
    },
    {
      id: 11,
      name: "Bgmi",
      description: "A hackathon where\nteams tackle real-world\nproblems with code,\nlogic, and teamwork.\nTeam up and compete.",
      icon: "circle"
    },
    {
      id: 12,
      name: "Free Fire",
      description: "Test your tech and IT\nknowledge! Participate\nsolo or with friends.\nPrizes for top scorers.",
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
    <div style={{ width: '100%', background: 'white', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Hero Section */}
      <section style={{
        width: '100%',
        maxWidth: '1400px',
        height: '500px',
        margin: '20px auto 0',
        background: 'rgba(255, 255, 255, 0)',
        boxShadow: '15px 15px 8.48528px -1px rgba(0, 0, 0, 0.20)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        borderRadius: '20px',
        padding: '0 20px'
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
        
        <Link to="/events" style={{ textDecoration: 'none' }}>
          <div style={{
            height: '30px',
            paddingLeft: '12px',
            paddingRight: '12px',
            background: 'black',
            borderRadius: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}>
            <span style={{ color: 'white', fontSize: '13.78px', fontFamily: 'Inter', fontWeight: '600' }}>Explore</span>
          </div>
        </Link>
      </section>

      {/* Events Section */}
      <section style={{ width: '100%', maxWidth: '1400px', margin: '80px auto', padding: '80px 20px' }}>
        {/* First Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px', marginBottom: '80px' }}>
          {events.slice(0, 3).map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: 'none', flex: '1 1 0' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '18px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
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
            </Link>
          ))}
        </div>

        {/* Second Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px', marginBottom: '80px' }}>
          {events.slice(3, 6).map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: 'none', flex: '1 1 0' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '18px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
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
            </Link>
          ))}
        </div>

        {/* Third Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px', marginBottom: '80px' }}>
          {events.slice(6, 9).map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: 'none', flex: '1 1 0' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '18px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
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
            </Link>
          ))}
        </div>

        {/* Fourth Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '100px' }}>
          {events.slice(9, 12).map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: 'none', flex: '1 1 0' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '18px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
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
            </Link>
          ))}
        </div>
      </section>

      {/* General Instructions Section */}
      <section style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h2 style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '14.77px',
            fontFamily: 'Inter',
            fontWeight: '600',
            lineHeight: '15px',
            marginBottom: '20px'
          }}>
            GENERAL INSTRUCTIONS
          </h2>
        </div>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            color: '#777777',
            fontSize: '14.65px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '19.50px',
            marginBottom: '20px'
          }}>
            1. Review the event schedule carefully before registering.<br/>
            2. Carry valid registration proof and your college ID card at all times.<br/>
            3. You are allowed to participate in multiple events, if the timings do not clash.<br/>
            4. Any form of vulgarity or inappropriate conduct in dress, speech, or behavior will lead <br/>
            to immediate disqualification.<br/>
            5. Smoking, drinking, and the use of any prohibited substances is strictly not allowed on <br/>
            campus.
          </p>
          
          <p style={{
            color: '#777777',
            fontSize: '14.65px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '19.50px',
            marginBottom: '20px'
          }}>
            6. Any damage to college property will result in <br/>
            disciplinary action and may include penalties.<br/>
            7. Cheating, impersonation, or rule violations in any event will lead to disqualification and <br/>
            further action.<br/>
            8. All events will begin strictly on time. Late entries may not be allowed.<br/>
            9. Participants are responsible for their personal belongings. The organizing team is not <br/>
            liable for any loss or theft.<br/>
            10. The judges' and organizers' decisions are final and must be respected.
          </p>
          
          <p style={{
            color: '#777777',
            fontSize: '14.30px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '19.50px'
          }}>
            11. Maintain a spirit of sportsmanship, respect, and professionalism at all times.<br/>
            12. Mobile phones must be kept in silent mode during events unless otherwise instructed.<br/>
            13. Any complaints or issues should be reported to the event coordinators or help desk <br/>
            immediately.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '100px 20px',
        borderTop: '1px solid #EEEEEE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        position: 'relative'
      }}>
        <div style={{ width: '51px', height: '17px', position: 'relative' }}>
          <svg width="51" height="18" viewBox="0 0 51 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_39_57)">
              <path d="M0 2.40991C0 1.85791 0.448 1.40991 1 1.40991H15C15.552 1.40991 16 1.85791 16 2.40991V16.4099C16 16.9619 15.552 17.4099 15 17.4099H1C0.448 17.4099 0 16.9619 0 16.4099V2.40991ZM41.07 2.13391C41.264 1.80791 41.736 1.80791 41.93 2.13391L50.552 16.6549C50.749 16.9879 50.509 17.4099 50.122 17.4099H32.878C32.491 17.4099 32.251 16.9879 32.448 16.6549L41.07 2.13391ZM25.5 0.909912C30.194 0.909912 34 4.71591 34 9.40991C34 14.1039 30.194 17.9099 25.5 17.9099C20.806 17.9099 17 14.1039 17 9.40991C17 4.71591 20.806 0.909912 25.5 0.909912Z" fill="black" fillOpacity="0.15"/>
            </g>
            <defs>
              <clipPath id="clip0_39_57">
                <rect width="51" height="17" fill="white" transform="translate(0 0.909912)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        
        <div style={{ flex: '1 1 0', height: '100px' }}></div>
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '10px' }}>
          <h3 style={{
            color: 'black',
            fontSize: '14.41px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '15px',
            textAlign: 'center'
          }}>
            Quick Links
          </h3>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              color: '#999999',
              fontSize: '14.53px',
              fontFamily: 'Inter',
              fontWeight: '500',
              lineHeight: '15px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              Home
            </div>
          </Link>
          <Link to="/events" style={{ textDecoration: 'none' }}>
            <div style={{
              color: '#999999',
              fontSize: '14.30px',
              fontFamily: 'Inter',
              fontWeight: '500',
              lineHeight: '15px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              Events
            </div>
          </Link>
          <div style={{
            color: '#999999',
            fontSize: '14.41px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '15px',
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            Contact
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '10px' }}>
          <h3 style={{
            color: 'black',
            fontSize: '14.41px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '15px',
            textAlign: 'center'
          }}>
            Fest Info
          </h3>
          <div style={{
            color: '#999999',
            fontSize: '14.53px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '15px',
            textAlign: 'center'
          }}>
            About TECHHEIST
          </div>
          <div style={{
            color: '#999999',
            fontSize: '14.53px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '15px',
            textAlign: 'center'
          }}>
            Rules
          </div>
          <div style={{
            color: '#999999',
            fontSize: '14.30px',
            fontFamily: 'Inter',
            fontWeight: '500',
            lineHeight: '15px',
            textAlign: 'center'
          }}>
            Support
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;