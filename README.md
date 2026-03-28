# X-Clone

A full-stack Twitter-like social media application built with Next.js, TypeScript, GraphQL, and PostgreSQL.

## 🚀 Complete Tech Stack

### Frontend (Current Repository)
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Icons** - Icon library
- **Google OAuth** - User authentication
- **React Hooks** - State management
- **GraphQL Client** - For API communication
- **GraphQL Code Generator** - Type generation for GraphQL

### Backend (Companion Repository)
- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for HTTP server
- **Apollo Server v3** - GraphQL server for API
- **TypeScript** - Type-safe JavaScript development
- **GraphQL** - Query language for APIs
- **Prisma** - Modern database ORM and toolkit
- **PostgreSQL** - Database (hosted on Supabase)
- **JWT** - JSON Web Token authentication
- **Google OAuth** - User authentication via Google
- **@prisma/adapter-pg** - PostgreSQL adapter for Prisma v7
- **dotenv** - Environment variable management

### Database & Infrastructure
- **Supabase** - PostgreSQL hosting and services
- **Prisma Migrations** - Database version control
- **Prisma Client** - Type-safe database queries

## 🚀 Features

- **Modern UI/UX**: Clean, Twitter-inspired interface with dark theme
- **Responsive Design**: Built with Tailwind CSS grid system
- **Interactive Sidebar**: Navigation with hover effects and icons
- **Feed System**: Scrollable feed with post cards
- **Google OAuth Integration**: User authentication with Google Sign-In
- **JWT Authentication**: Secure session management with JSON Web Tokens
- **GraphQL API**: Type-safe backend communication
- **Database Integration**: PostgreSQL with Prisma ORM
- **User Management**: Complete user authentication system
- **Smooth Animations**: Transition effects on interactive elements
- **Hidden Scrollbars**: Clean scroll experience without visible scrollbars
- **Component Architecture**: Modular, reusable React components
- **Full-Stack Ready**: Complete frontend-backend integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Images**: Next.js Image optimization
- **Authentication**: Google OAuth with @react-oauth/google
- **State Management**: React Hooks (useCallback)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database (via Supabase)
- Google Cloud Console account (for OAuth)
- GraphQL Code Generator (for type generation)

### 1. Clone Both Repositories
```bash
# Clone Frontend (Current Repository)
git clone https://github.com/Jayant9917/X-clone.git
cd X-clone/client

# Clone Backend (Companion Repository)
git clone https://github.com/Jayant9917/X-clone-back.git
cd X-clone-back
```

### 2. Frontend Setup
```bash
cd X-clone/client
npm install
# or
yarn install
```

### 3. Backend Setup
```bash
cd X-clone-back
yarn install
```

### 4. Environment Configuration

**Frontend (.env.local)**:
```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8000/graphql
```

**Backend (.env)**:
```env
DATABASE_URL=your_supabase_database_url_here
```

### 5. Database Setup
```bash
cd X-clone-back
npx prisma migrate dev
npx prisma generate
```

### 6. Start Development Servers

**Backend** (Port 8000):
```bash
cd X-clone-back
yarn dev
```

**Frontend** (Port 3000):
```bash
cd X-clone/client
yarn dev
```

### 7. GraphQL Code Generation
```bash
cd X-clone/client
yarn codegen
```
*Generates TypeScript types from GraphQL schema*

### 8. Google OAuth Setup
- Create a project in [Google Cloud Console](https://console.cloud.google.com/)
- Enable Google+ API
- Create OAuth 2.0 credentials
- Add `http://localhost:3000` to Authorized JavaScript origins
- Update the clientId in `components/GoogleProvider.tsx`

### 9. Access the Application
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **GraphQL Playground**: [http://localhost:8000/graphql](http://localhost:8000/graphql)

## 🏗️ Project Structure

```
client/
├── app/
│   ├── globals.css          # Global styles and scrollbar utilities
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page with sidebar, feed, and login
│   └── README.md            # Project documentation
├── components/
│   ├── FeedCard/
│   │   └── index.tsx        # Individual post card component
│   └── GoogleProvider.tsx   # Google OAuth provider wrapper
├── public/                  # Static assets (profile images)
├── .env.local               # Environment variables (Google Client ID)
├── codegen.ts               # GraphQL Code Generator configuration
├── DEVELOPMENT_STEPS.md     # Complete development documentation
├── next.config.ts           # Next.js configuration with allowed origins
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── tailwind.config.ts       # Tailwind CSS configuration
```

## 🎨 Key Components

### Main Layout (`app/page.tsx`)
- **Sidebar**: Fixed navigation with Twitter-style menu items (Home, Explore, Notifications, Messages, Bookmarks, Profile, Money, More)
- **Feed Area**: Scrollable content area with multiple FeedCards
- **Login Section**: Google OAuth integration in right sidebar
- **Grid System**: 12-column responsive layout
- **Client Component**: Uses "use client" directive for interactivity

### FeedCard (`components/FeedCard/index.tsx`)
- User profile information with avatar
- Post content with lorem ipsum text
- Interaction buttons (comment, retweet, like, analytics, share)

### GoogleProvider (`components/GoogleProvider.tsx`)
- Client component wrapper for Google OAuth Provider
- Handles Google authentication context
- Configured with Google Client ID

## 🔗 Repository Links & Integration

### Repository Links
- **Frontend**: [X-Clone Frontend](https://github.com/Jayant9917/X-clone) (Current)
- **Backend**: [X-Clone Backend](https://github.com/Jayant9917/X-clone-back) (Companion)

### API Endpoints
- **GraphQL Playground**: `http://localhost:8000/graphql` (when backend is running)
- **Frontend Development**: `http://localhost:3000` (Next.js app)

### Frontend-Backend Integration
- **Authentication**: Google OAuth → Backend user storage via Prisma
- **API Communication**: GraphQL queries and mutations
- **Database**: PostgreSQL via Supabase
- **Type Safety**: Shared TypeScript types across stack

## 📊 GraphQL Schema Overview

### User Model
```graphql
type User {
  id: String!
  firstName: String!
  lastName: String?
  email: String!
  profileImageURL: String?
  createdAt: String!
  updatedAt: String!
}
```

### Available Queries
```graphql
type Query {
  # User Authentication
  verifyGoogleToken(token: String!): String
  # User queries to be added
  # Tweet queries to be added
}
```

### Available Mutations
```graphql
type Mutation {
  # User mutations to be added
  # Tweet mutations to be added
}
```

## 🔐 Authentication System

### Google OAuth + JWT Flow
1. **Frontend gets Google ID token** via Google Sign-In
2. **Frontend sends ID token** to `verifyGoogleToken` GraphQL query
3. **Backend validates token** with Google's tokeninfo API
4. **User creation/retrieval** in PostgreSQL database
5. **Backend generates JWT token** for session management
6. **JWT token returned** to frontend for authenticated requests

### Authentication Features
- ✅ **Google OAuth Integration** - Secure authentication via Google
- ✅ **JWT Token Management** - JSON Web Token for session handling
- ✅ **User Database Storage** - PostgreSQL with Prisma ORM
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Error Handling** - Comprehensive error management

### Example Authentication Query
```graphql
query VerifyGoogleToken {
  verifyGoogleToken(token: "YOUR_GOOGLE_ID_TOKEN")
}
```

**Response:**
```json
{
  "data": {
    "verifyGoogleToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## 🎯 Features Implemented

### ✅ Frontend Features
- ✅ Twitter-like sidebar navigation with 8 menu items
- ✅ Google OAuth authentication integration
- ✅ Client-side interactivity with React hooks
- ✅ Hover effects and transitions
- ✅ Responsive grid layout
- ✅ Hidden scrollbars with smooth scrolling
- ✅ Icon integration (React Icons)
- ✅ Dark theme styling
- ✅ Profile image optimization
- ✅ Component-based architecture
- ✅ GraphQL Code Generator setup for type safety

### ✅ Backend Features
- ✅ GraphQL server setup with Apollo Server
- ✅ Database integration with Prisma
- ✅ PostgreSQL database (Supabase)
- ✅ User model with basic fields
- ✅ Database migrations
- ✅ Type-safe database operations
- ✅ TypeScript configuration
- ✅ Google OAuth authentication system
- ✅ JWT token generation service
- ✅ PostgreSQL adapter for Prisma v7
- ✅ Modular user authentication system
- ✅ Comprehensive error handling
- ✅ Google token validation with Google API

### 🚧 Integration Features (In Progress)
- 🔄 Frontend-Backend authentication flow
- 🔄 GraphQL client setup in frontend
- 🔄 JWT token management in frontend
- 🔄 User CRUD operations
- 🔄 Profile management system

## 📋 TODO & Roadmap

### Frontend
- [ ] Set up GraphQL client (Apollo Client/urql)
- [ ] Connect Google OAuth with backend JWT system
- [ ] Implement JWT token storage and management
- [ ] Add authentication state management
- [ ] Implement user profile management
- [ ] Add tweet creation and display
- [ ] Implement real-time feed updates
- [ ] Add error handling and loading states
- [ ] Add protected routes with JWT verification

### Backend
- [ ] Implement User CRUD operations (GraphQL mutations)
- [ ] Add JWT token verification middleware
- [ ] Add Tweet model and CRUD operations
- [ ] Implement Like system and relationships
- [ ] Add input validation and error handling
- [ ] Add API rate limiting
- [ ] Write unit tests
- [ ] Implement refresh token system
- [ ] Add user profile updates
- [ ] Implement user follow/unfollow system

### Full Stack
- [ ] Complete end-to-end authentication flow
- [ ] Real-time notifications with WebSockets
- [ ] File upload for profile images
- [ ] Pagination for feeds
- [ ] Search functionality
- [ ] Deployment configuration
- [ ] Performance optimization
- [ ] Security hardening

## 🔧 Custom CSS Utilities

The project includes custom CSS classes in `globals.css`:

```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

This provides cross-browser scrollbar hiding while maintaining scroll functionality.

## 📱 Browser Support

- Chrome/Edge (Modern)
- Firefox
- Safari
- Mobile browsers

## 🚀 Deployment

Ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by [Jayant9917](https://github.com/Jayant9917)

---

**Note**: This is a frontend-only demonstration. Backend functionality, authentication, and real-time features would be needed for a production-ready Twitter clone.
