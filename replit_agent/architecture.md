# Architecture Overview

## Overview

This repository contains a full-stack web application built with React on the frontend and Express on the backend. The application is structured as a modern web service with a clear separation between client and server components. It uses Drizzle ORM with PostgreSQL for data persistence and follows a RESTful API design pattern.

The application is a website for an IT service company called "Troubleshooter" with racing-themed design elements, featuring contact forms, traffic tracking, and email notifications. The architecture supports server-side rendering and leverages modern development patterns for maintainability and scalability.

## System Architecture

The application follows a classic client-server architecture:

```
┌─────────────┐      API Requests     ┌─────────────┐
│             │ ─────────────────────▶│             │
│  React      │                       │  Express    │
│  Frontend   │ ◀─────────────────────│  Backend    │
│             │      JSON Responses   │             │
└─────────────┘                       └─────────────┘
       │                                     │
       │                                     │
       │                                     ▼
       │                              ┌─────────────┐
       │                              │             │
       │                              │  PostgreSQL │
       │                              │  Database   │
       │                              │             │
       │                              └─────────────┘
       │
       ▼
┌─────────────┐
│             │
│  Browser    │
│  (Client)   │
│             │
└─────────────┘
```

### Key Characteristics:

1. **Frontend**: React-based SPA bundled with Vite
2. **Backend**: Express.js running on Node.js
3. **Database**: PostgreSQL accessed via Drizzle ORM
4. **API Communication**: RESTful API endpoints
5. **Styling**: Tailwind CSS with shadcn/ui components
6. **Build Process**: Vite for the client, esbuild for the server
7. **Email Integration**: SendGrid for contact form processing

## Key Components

### Frontend Architecture

The frontend is built with React and follows a component-based architecture:

1. **Component Structure**
   - UI components (shadcn/ui library)
   - Layout components (navbar, footer)
   - Page-specific components (home, racing-lines)
   - Custom racing-themed components

2. **State Management**
   - React Query for data fetching and caching
   - React Hooks for component-level state

3. **Routing**
   - Wouter for lightweight client-side routing
   - Support for:
     - Home page
     - Racing lines showcase page
     - 404 page for unmatched routes

4. **Styling Framework**
   - Tailwind CSS for utility-first styling
   - Custom theme variables (CSS variables)
   - Racing-inspired design elements

### Backend Architecture

The backend uses Express.js and follows a modular structure:

1. **Server Structure**
   - Route handlers for API endpoints
   - Middleware for request processing
   - Integration with database via Drizzle ORM
   - Email service integration (SendGrid)

2. **API Endpoints**
   - Contact form submission (`/api/contact`)
   - Traffic analytics (via middleware)

3. **Development Tools**
   - Vite integration for development server
   - Hot reload support

### Data Storage

The application uses PostgreSQL with Drizzle ORM for data persistence:

1. **Database Schema**
   - `users`: Authentication information
   - `contact_submissions`: Contact form data
   - `site_traffic`: Analytics data for visitor tracking

2. **ORM Layer**
   - Drizzle ORM for database access
   - Schema definitions with Zod for validation
   - Migration support via drizzle-kit

### Email Integration

The application integrates with SendGrid for email functionality:

1. **Email Features**
   - Contact form notification emails
   - Auto-reply emails
   - Templated HTML email bodies

## Data Flow

### Contact Form Submission Flow:

```
┌──────────┐    ┌────────────┐    ┌────────────┐    ┌───────────┐
│ User     │    │ React Form │    │ Express    │    │ Database  │
│ Input    │───▶│ Component  │───▶│ API        │───▶│ Storage   │
└──────────┘    └────────────┘    └────────────┘    └───────────┘
                                        │
                                        │
                                        ▼
                                  ┌────────────┐
                                  │ SendGrid   │
                                  │ Email      │
                                  │ Service    │
                                  └────────────┘
                                        │
                                        │
                                        ▼
                                  ┌────────────┐
                                  │ Admin &    │
                                  │ User Email │
                                  │ Inboxes    │
                                  └────────────┘
```

### Site Traffic Tracking Flow:

```
┌──────────┐    ┌────────────┐    ┌────────────┐    ┌───────────┐
│ User     │    │ Express    │    │ Traffic    │    │ Database  │
│ Visit    │───▶│ Middleware │───▶│ Tracker    │───▶│ Storage   │
└──────────┘    └────────────┘    └────────────┘    └───────────┘
```

## External Dependencies

### Frontend Dependencies

1. **UI Framework**
   - React
   - shadcn/ui (React component library built on Radix UI)
   - Tailwind CSS

2. **State Management & Data Fetching**
   - TanStack Query (React Query)

3. **Routing**
   - Wouter (lightweight alternative to React Router)

4. **Form Handling**
   - React Hook Form
   - Zod (schema validation)

### Backend Dependencies

1. **Server Framework**
   - Express.js

2. **Database**
   - PostgreSQL
   - Neon Database (serverless Postgres)
   - Drizzle ORM

3. **Email**
   - SendGrid

4. **Development Tools**
   - Vite
   - esbuild
   - TypeScript

## Deployment Strategy

The application appears to be configured for deployment on Replit, as indicated by the `.replit` configuration file. The deployment strategy involves:

1. **Build Process**
   - Vite builds the React frontend into static assets
   - esbuild bundles the Express server
   - Assets are served from the `dist` directory

2. **Environment Setup**
   - Production environment variables (NODE_ENV)
   - Database connection strings
   - API keys for external services (SendGrid)

3. **Runtime Configuration**
   - Server listens on port 5000 (mapped to port 80 externally)
   - Automatic scaling configuration
   - Object storage for assets

4. **Database Provisioning**
   - Neon serverless PostgreSQL
   - Database URL provided via environment variables

The deployment follows a 3-step process:
1. Build frontend and backend (`npm run build`)
2. Deploy compiled assets and server
3. Run production server (`npm run start`)

## Security Considerations

1. **User Data Protection**
   - Password hashing for user authentication (schema indicates password storage)
   - HTTPS-only cookies (in production)

2. **API Security**
   - Form validation with Zod
   - Error handling middleware

3. **External Services**
   - Environment variables for service credentials
   - Conditional email sending based on API key availability

This architecture enables a scalable, maintainable web application with clean separation of concerns between the frontend and backend components.