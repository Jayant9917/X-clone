# X-Clone

A full-stack Twitter-like social media application built with Next.js, TypeScript, GraphQL, and PostgreSQL.

## 🚀 Complete Tech Stack

### Frontend (Current Repository)
- **Next.js 16+** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Icons** - Icon library
- **Google OAuth** - User authentication via @react-oauth/google
- **React Hooks** - State management with useCallback
- **GraphQL Client** - Type-safe API communication with graphql-request
- **GraphQL Code Generator** - Automated type generation from schema
- **React Hot Toast** - Beautiful toast notifications
- **Concurrently** - Run multiple development scripts

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

### ✅ Implemented Features
- **Modern UI/UX**: Clean, Twitter-inspired interface with dark theme
- **Responsive Design**: Built with Tailwind CSS grid system
- **Interactive Sidebar**: Navigation with 8 menu items (Home, Explore, Notifications, Messages, Bookmarks, Profile, Money, More)
- **Feed System**: Scrollable feed with post cards and hidden scrollbars
- **Google OAuth Integration**: Complete user authentication with Google Sign-In
- **JWT Authentication**: Secure session management with localStorage
- **GraphQL API Integration**: Type-safe backend communication
- **Real-time Code Generation**: Automated TypeScript types from GraphQL schema
- **Toast Notifications**: User feedback with react-hot-toast
- **Component Architecture**: Modular, reusable React components
- **Development Toolchain**: Hot reload with Turbopack and concurrent script execution

### 🔄 Backend Integration Ready
- **User Authentication**: Complete OAuth flow with JWT token management
- **Database Integration**: PostgreSQL with Prisma ORM (backend required)
- **API Communication**: GraphQL queries and mutations ready
- **Type Safety**: End-to-end TypeScript support

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Authentication**: Google OAuth with @react-oauth/google
- **State Management**: React Hooks (useCallback)
- **API Client**: graphql-request
- **Notifications**: react-hot-toast
- **Code Generation**: GraphQL Code Generator with watch mode

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

### 🚀 Development Features

The frontend includes advanced development tooling:
- **Turbopack**: Fast bundling and hot reload
- **Concurrent Scripts**: GraphQL code generation runs alongside development server
- **Auto Type Generation**: TypeScript types update automatically when GraphQL schema changes
- **Toast Notifications**: Real-time feedback for user actions
- **Component-Based Architecture**: Modular and maintainable code structure

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

### Google OAuth + JWT Flow (Implemented)
1. **Frontend gets Google ID token** via Google Sign-In
2. **Frontend sends ID token** to `verifyGoogleToken` GraphQL query
3. **Backend validates token** with Google's tokeninfo API
4. **User creation/retrieval** in PostgreSQL database
5. **Backend generates JWT token** for session management
6. **JWT token returned** to frontend for authenticated requests
7. **JWT token stored** in localStorage for subsequent API calls

### Authentication Features
- ✅ **Google OAuth Integration** - Secure authentication via Google
- ✅ **JWT Token Management** - JSON Web Token for session handling
- ✅ **Token Storage** - localStorage for client-side persistence
- ✅ **GraphQL Client Integration** - Type-safe API communication
- ✅ **User Database Storage** - PostgreSQL with Prisma ORM
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Headers Configuration** - Proper Authorization header setup

### GraphQL Client Setup
The project uses `graphql-request` for type-safe GraphQL operations:

```typescript
// clients/api.ts
import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql', {
    headers: () => ({
        Authorization: isClient ? `Bearer ${window.localStorage.getItem('__twitter_token')}` : ''
    })
});
```

### Code Generation
GraphQL types are automatically generated using GraphQL Code Generator:

```bash
yarn codegen
```

This generates TypeScript types in the `gql/` directory based on the GraphQL schema.

## 🎯 Features Implemented

### ✅ Frontend Features
- ✅ Twitter-like sidebar navigation with 8 menu items
- ✅ Google OAuth authentication integration
- ✅ GraphQL client setup with graphql-request
- ✅ JWT token authentication with localStorage
- ✅ Client-side interactivity with React hooks
- ✅ Hover effects and transitions
- ✅ Responsive grid layout
- ✅ Hidden scrollbars with smooth scrolling
- ✅ Icon integration (React Icons)
- ✅ Dark theme styling
- ✅ Profile image optimization
- ✅ Component-based architecture
- ✅ GraphQL Code Generator setup for type safety
- ✅ TypeScript error fixes for headers configuration

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

### 🚧 Integration Features (Completed)
- ✅ Frontend-Backend authentication flow
- ✅ GraphQL client setup in frontend (graphql-request)
- ✅ JWT token management in frontend (localStorage)
- ✅ Type-safe GraphQL operations with code generation
- 🔄 User CRUD operations
- 🔄 Profile management system

## 📋 TODO & Roadmap

### Frontend
- [x] Set up GraphQL client (graphql-request)
- [x] Connect Google OAuth with backend JWT system
- [x] Implement JWT token storage and management
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

**Note**: This frontend includes authentication integration with a companion backend repository. The project demonstrates modern full-stack development practices with TypeScript, GraphQL, and OAuth authentication.
