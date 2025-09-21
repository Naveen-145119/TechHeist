# TECHHEIST Website - System Architecture & Design Specification

## Project Overview
**Project Name:** TECHHEIST - IT Fest Website  
**Theme:** Money Heist (La Casa de Papel) inspired design  
**Technology Stack:** MERN (MongoDB, Express.js, React.js, Node.js)  
**Deployment Platform:** Appwrite.io  
**Color Scheme:** Red (#DC2626, #EF4444), Black (#000000, #1F1F1F), White (#FFFFFF)

## Visual Design Guidelines

### Color Palette
- **Primary Red:** #DC2626 (for buttons, accents, highlights)
- **Secondary Red:** #EF4444 (for hover states, secondary elements)
- **Primary Black:** #000000 (for backgrounds, text)
- **Dark Gray:** #1F1F1F (for cards, sections)
- **White:** #FFFFFF (for text on dark backgrounds, cards)
- **Gray:** #6B7280 (for secondary text)

### Typography
- **Primary Font:** 'Roboto Condensed' or 'Oswald' (bold, condensed for headers)
- **Secondary Font:** 'Inter' or 'Roboto' (for body text)
- **Font Weights:** 400 (regular), 600 (semi-bold), 700 (bold), 900 (black)

### Design Elements
- **Dali Mask Icon:** Stylized version for logo and branding
- **Red Hood Silhouette:** For hero sections and backgrounds
- **Geometric Patterns:** Angular, sharp edges inspired by the show
- **Dark Overlays:** Semi-transparent black overlays on images
- **Red Accent Boxes:** For highlighting important information

## Website Structure & User Flow

### 1. Home Page (`/`)
- **Hero Section:** 
  - College logo
  - "TECHHEIST" title with Dali mask integration
  - Tagline/subtitle
  - "EXPLORE" button (smooth scroll to events)
  - "REGISTER" button
- **Events Preview Section:**
  - Brief introduction
  - Categories: IT Events, Non-IT Events
  - Call-to-action to view all events

### 2. Events Listing Page (`/events`)
- **IT Events Section:**
  - Grid layout of event cards
  - Each card: Event name, brief description, date, image
  - Click to navigate to event detail page
- **Non-IT Events Section:**
  - Similar layout to IT events
  - Separate categorization

### 3. Event Detail Pages (`/event/:eventId`)
- **Event Information:**
  - Event title and description
  - Rules and regulations
  - Date, time, venue details
  - Prize information
  - Contact details
- **Registration Section:**
  - WhatsApp link for queries
  - "REGISTER" button
  - Redirects to login if not authenticated

### 4. Authentication Pages
- **Login Page (`/login`):**
  - Email/username and password fields
  - "Remember me" option
  - Link to registration page
- **Register Page (`/register`):**
  - Full name, email, password, confirm password
  - College name, phone number
  - Terms and conditions acceptance

### 5. Event Registration Page (`/register/:eventId`)
- **Registration Form:**
  - Participant details (pre-filled from user profile)
  - Team details (if team event):
    - Teammate names
    - Phone numbers
    - Email addresses
  - Additional requirements (if any)
  - Submission confirmation

## Database Schema (Appwrite Collections)

### Users Collection
```json
{
  "userId": "string (auto-generated)",
  "fullName": "string",
  "email": "string (unique)",
  "phoneNumber": "string",
  "collegeName": "string",
  "password": "string (hashed)",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Events Collection
```json
{
  "eventId": "string (auto-generated)",
  "eventName": "string",
  "category": "string (IT/Non-IT)",
  "maxTeamSize": "number",
  "minTeamSize": "number",
  "whatsappLink": "string",
  "createdAt": "datetime"
}
```

### Registrations Collection
```json
{
  "registrationId": "string (auto-generated)",
  "eventId": "string (foreign key)",
  "userId": "string (foreign key)",
  "teamName": "string",
  "teammates": "array of objects",
  "additionalInfo": "object",
  "registrationDate": "datetime",
  "status": "string (pending/confirmed/cancelled)"
}
```

### Teammates Schema (within registrations)
```json
{
  "name": "string",
  "email": "string",
  "phoneNumber": "string"
}
```

## Technical Architecture

### Frontend (React.js)
- **Framework:** Create React App with TypeScript
- **Styling:** Tailwind CSS for utility-first styling
- **State Management:** React Context API + useReducer
- **Routing:** React Router v6
- **HTTP Client:** Axios for API calls
- **Form Handling:** React Hook Form with Yup validation
- **UI Components:** Custom components with Money Heist theme

### Backend (Node.js + Express.js)
- **Framework:** Express.js with TypeScript
- **Authentication:** JWT tokens with Appwrite Auth
- **Validation:** Joi for request validation
- **Security:** Helmet, CORS, rate limiting
- **File Upload:** Multer (if needed for event images)
- **Environment:** dotenv for configuration

### Database (Appwrite)
- **Database:** Appwrite Database service
- **Authentication:** Appwrite Auth service
- **Storage:** Appwrite Storage (for images)
- **Real-time:** Appwrite Realtime (for live updates)

### Deployment
- **Frontend:** Appwrite Static Hosting
- **Backend:** Appwrite Functions or separate hosting
- **Domain:** Custom domain configuration
- **SSL:** Automatic SSL certificates

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Events
- `GET /api/events` - Get all events (with category filter)
- `GET /api/events/:id` - Get specific event details
- `POST /api/events` - Create new event (admin only)
- `PUT /api/events/:id` - Update event (admin only)
- `DELETE /api/events/:id` - Delete event (admin only)

### Registrations
- `POST /api/registrations` - Register for an event
- `GET /api/registrations/user/:userId` - Get user's registrations
- `GET /api/registrations/event/:eventId` - Get event registrations (admin)
- `PUT /api/registrations/:id` - Update registration
- `DELETE /api/registrations/:id` - Cancel registration

## Security Considerations

### Authentication & Authorization
- JWT tokens with expiration
- Password hashing with bcrypt
- Role-based access control (user/admin)
- Protected routes on frontend and backend

### Data Validation
- Input sanitization on all endpoints
- SQL injection prevention (using Appwrite ORM)
- XSS protection with proper escaping
- CSRF protection with tokens

### Rate Limiting
- API rate limiting to prevent abuse
- Registration limits per user per event
- Login attempt limitations

## Performance Optimization

### Frontend
- Code splitting with React.lazy()
- Image optimization and lazy loading
- Caching strategies for API responses
- Minification and compression

### Backend
- Database query optimization
- Caching with Redis (if needed)
- Compression middleware
- CDN for static assets

## Responsive Design

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Mobile-First Approach
- Touch-friendly interface
- Optimized navigation for mobile
- Responsive typography and spacing
- Fast loading on mobile networks

## Development Phases

### Phase 1: Setup & Architecture ✓
- Project structure setup
- Design system creation
- Database schema design

### Phase 2: Core Development
- Authentication system
- Event management
- Registration system

### Phase 3: UI/UX Implementation
- Money Heist themed components
- Responsive design
- Interactive elements

### Phase 4: Testing & Deployment
- Unit and integration testing
- Performance optimization
- Appwrite.io deployment

## Success Metrics

### Technical Metrics
- Page load time < 3 seconds
- Mobile responsiveness score > 95%
- Accessibility score > 90%
- SEO score > 85%

### User Experience Metrics
- Registration completion rate > 80%
- User session duration > 2 minutes
- Bounce rate < 40%
- Cross-browser compatibility

This architecture provides a solid foundation for building a scalable, secure, and visually appealing TECHHEIST website that captures the Money Heist aesthetic while delivering excellent user experience.

