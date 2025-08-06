# TechFlow - Community Tech Support

## Overview

TechFlow is a friendly neighborhood tech support service that helps families and individuals in the local community with their technology needs. The application is a full-stack web platform built with React and Express, featuring a warm, approachable design with 9 service categories, community testimonials, and waitlist functionality. The platform is designed to connect with local families and showcase the team's commitment to providing patient, reliable tech support to their neighbors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support)
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API endpoints for waitlist and contact management
- **Validation**: Zod schemas for request/response validation
- **Storage Pattern**: Abstract storage interface with in-memory implementation (MemStorage)
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Current Implementation**: In-memory storage for development/demo purposes
- **Production Ready**: PostgreSQL schema defined with proper migrations support

### Authentication and Authorization
- No authentication system implemented - this is a public marketing/lead generation site
- Form submissions are open to all visitors
- No user accounts or login functionality required

### External Dependencies
- **Database**: Neon Database (serverless PostgreSQL) - configured but not actively used in current implementation
- **UI Components**: Extensive Radix UI component library for accessible interface elements
- **Development Tools**: Replit-specific plugins for development environment integration
- **Build Tools**: ESBuild for production bundling, TSX for development server