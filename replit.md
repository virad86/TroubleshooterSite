# Overview

This is a full-stack web application for Troubleshooter, an IT services company with a Formula 1 racing theme. The application showcases the company's services, team, and provides a contact form for potential clients. Built with React frontend and Express.js backend, it features a modern design system using shadcn/ui components and a PostgreSQL database for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for robust form validation and submission

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for type safety across the entire stack
- **Database ORM**: Drizzle ORM for type-safe database operations and migrations
- **API Design**: RESTful endpoints with `/api` prefix for clear separation from frontend routes
- **Middleware**: Custom traffic tracking middleware for analytics and request logging

## Database Design
- **Database**: PostgreSQL using Neon's serverless offering for scalability
- **Schema Management**: Drizzle migrations stored in `db/migrations`
- **Tables**:
  - `users`: User authentication (placeholder for future auth implementation)
  - `contact_submissions`: Contact form submissions with validation
  - `site_traffic`: Visitor tracking with session management and analytics data

## Shared Architecture
- **Type Safety**: Shared TypeScript types and Zod schemas in `/shared` directory
- **Schema Definition**: Centralized database schema with generated TypeScript types
- **Path Aliases**: Configured aliases for clean imports (`@/`, `@db/`, `@shared/`)

## Email Integration
- **Service**: SendGrid for transactional emails
- **Features**: Contact form notifications and auto-reply functionality
- **Environment**: Graceful degradation when API keys are not configured

## Development Tools
- **Hot Reload**: Vite dev server with Express middleware integration
- **TypeScript**: Strict configuration with incremental compilation
- **Code Quality**: ESM modules throughout for modern JavaScript practices

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React routing library

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible React components (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

## Form and Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolver for Zod integration
- **zod**: TypeScript-first schema validation

## Email Service
- **@sendgrid/mail**: SendGrid email API integration for contact form notifications

## Development and Build Tools
- **vite**: Next-generation frontend build tool
- **esbuild**: Fast JavaScript bundler for server-side builds
- **tsx**: TypeScript execution engine for development
- **@replit/vite-plugin-***: Replit-specific development plugins

## Database and Migration Tools
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store (for future session management)