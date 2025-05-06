# Architecture Overview

## Overview

This application is a full-stack web application built with a React frontend and Express.js backend, using a PostgreSQL database. The application is structured as a monorepo, with client, server, and shared code organized in separate directories. The project uses Vite for frontend bundling and TypeScript for type safety across the entire codebase.

The application follows a modern architecture with a clear separation between frontend and backend concerns, while sharing types and schemas in a common directory. The frontend uses React with shadcn/ui components and the backend uses Express.js with Drizzle ORM for database operations.

## System Architecture

### High-Level Architecture

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│             │         │             │         │             │
│   Client    │ ◄────► │   Server    │ ◄────► │  Database   │
│   (React)   │         │  (Express)  │         │ (PostgreSQL)│
│             │         │             │         │             │
└─────────────┘         └─────────────┘         └─────────────┘
        ▲                      ▲                       ▲
        │                      │                       │
        └──────────────────────┼───────────────────────┘
                              │
                      ┌─────────────┐
                      │             │
                      │   Shared    │
                      │   Types     │
                      │             │
                      └─────────────┘
```

### Client (Frontend)

- Uses React with TypeScript
- Built with Vite for fast development and optimized builds
- Styled with Tailwind CSS and shadcn/ui components
- Organized with a structured component hierarchy
- Uses React Query for data fetching and state management

### Server (Backend)

- Built with Express.js and TypeScript
- RESTful API for client communication
- Uses Drizzle ORM for database operations
- Email functionality via SendGrid
- Includes middleware for traffic tracking and logging

### Database

- PostgreSQL database using Neon's serverless offering
- Schema managed via Drizzle ORM with type-safe operations
- Includes tables for users, contact submissions, and site traffic

### Shared Code

- Types and schemas shared between frontend and backend
- Zod validation schemas for type safety and validation

## Key Components

### Frontend Components

1. **Page Components**
   - Home page with multiple sections (hero, stats, services, etc.)
   - Racing lines sample page
   - Not found (404) page

2. **UI Components**
   - Comprehensive UI component library using shadcn/ui
   - Custom racing-themed components (RacingLine, TachometerCounter, etc.)
   - Layout components (Navbar, Footer)

3. **Utility Functions**
   - API request utilities
   - Styling utilities (with `cn` function)
   - Navigation utilities

### Backend Components

1. **API Routes**
   - Contact form submission endpoint
   - Traffic tracking functionality

2. **Services**
   - Storage service for database operations
   - Email service for sending notifications
   - Traffic tracking service

3. **Middleware**
   - Traffic tracking middleware
   - Logging middleware
   - Error handling middleware

### Database Schema

The application uses the following main tables:

1. **users**
   - Basic user authentication with username and password

2. **contact_submissions**
   - Stores contact form submissions with name, email, subject, message
   - Includes timestamp for tracking

3. **site_traffic**
   - Records site visits with detailed information 
   - Tracks user agent, IP, referrer, pages viewed, and session data

## Data Flow

### Contact Form Submission Flow

1. User fills out the contact form on the frontend
2. Form data is validated client-side with Zod schemas
3. Validated data is sent to the `/api/contact` endpoint
4. Server validates the data again server-side
5. Contact submission is stored in the database
6. Email notifications are sent via SendGrid
7. Response is sent back to the client
8. UI is updated to show success or error message

### Site Traffic Tracking Flow

1. User visits a page on the website
2. Server middleware captures visit information
3. Data is processed and stored in the database
4. Analytics can be viewed in a dashboard (if implemented)

## External Dependencies

### Key Frontend Dependencies

- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Tanstack Query**: Data fetching and state management
- **Wouter**: Lightweight routing library

### Key Backend Dependencies

- **Express.js**: Web server framework
- **Drizzle ORM**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL serverless client
- **SendGrid**: Email delivery service
- **Zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit, as indicated by the `.replit` configuration file. The deployment strategy includes:

1. **Build Process**
   - Frontend: Vite builds optimized assets to `dist/public` directory
   - Backend: esbuild bundles server code to `dist` directory
   - Combined build command: `npm run build`

2. **Production Environment**
   - Application runs in production mode with `NODE_ENV=production`
   - Starts with `node dist/index.js` command

3. **Database Management**
   - Database schema is managed through Drizzle ORM
   - Migrations can be applied with `drizzle-kit push`
   - Seed data can be loaded with `npm run db:seed`

4. **Configuration**
   - Environment variables for database connection and API keys
   - Automatic HTTPS handling through Replit

5. **Object Storage**
   - Uses Replit's object storage for assets
   - Configured through `objectStorage` setting in `.replit`

The application is designed for cloud deployment with environment variables controlling database connections, API keys, and other configuration options.