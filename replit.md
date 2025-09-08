# Personal Portfolio Website for Qadeer Ahmed

## Overview

This is a modern, responsive personal portfolio website built for Qadeer Ahmed, a Computer Science graduate specializing in AI, software development, and data analysis. The application showcases his skills, projects, education, and experience through a professional, interactive interface with dark/light mode support and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, modern UI components
- **Animations**: Framer Motion for smooth transitions and interactive animations
- **State Management**: TanStack React Query for server state and form management with React Hook Form
- **Theme System**: Custom theme provider with persistent dark/light mode toggle

### Backend Architecture

**Server**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful endpoints for contact form submissions
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development**: Vite integration for hot module replacement and development server

### Component Structure

**UI Components**: Comprehensive shadcn/ui component library including:
- Form components (Input, Textarea, Button, Checkbox)
- Layout components (Card, Dialog, Sheet, Accordion)
- Navigation components (Tabs, Pagination, Breadcrumb)
- Feedback components (Toast, Alert, Progress)

**Page Sections**: Modular section-based architecture:
- Hero section with animated typing effect
- About section with downloadable CV functionality
- Skills section with animated progress bars
- Projects section with detailed modal views
- Experience timeline with education and project history
- Contact form with email integration
- Responsive navigation with mobile menu

### Data Storage

**Development Storage**: In-memory storage using Map-based implementation for:
- Contact form submissions with unique UUID generation
- User data structure for future authentication features

**Database Schema**: Drizzle ORM with PostgreSQL support configured for:
- Users table with authentication fields
- Contacts table for form submissions with timestamps
- Zod schema validation for type-safe data operations

### Email Integration

**Email Service**: Nodemailer integration with Gmail SMTP for contact form notifications
- Automatic email sending to portfolio owner on form submission
- HTML formatted emails with submission details
- Graceful fallback if email service fails

### Build and Deployment

**Build Process**: Dual build system for client and server
- Client: Vite bundling with React for optimized production builds
- Server: esbuild for Node.js server bundling with ESM format
- TypeScript compilation with strict type checking

**Development Tools**: 
- Hot module replacement for rapid development
- Runtime error overlay for debugging
- Automatic TypeScript type checking

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern features
- **Express.js**: Backend web framework for API endpoints
- **TypeScript**: Type safety across client and server code
- **Vite**: Build tool and development server with hot reload

### UI and Styling
- **TailwindCSS**: Utility-first CSS framework for responsive design
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library for consistent iconography

### Data Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data handling
- **Drizzle ORM**: Type-safe database operations with PostgreSQL

### Database and Email
- **Neon Database**: Serverless PostgreSQL database service
- **Nodemailer**: Email sending functionality for contact forms
- **Drizzle Kit**: Database migration and schema management tools

### Development and Build Tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Wouter**: Lightweight routing library for client-side navigation

### Utility Libraries
- **clsx & class-variance-authority**: Conditional CSS class management
- **date-fns**: Date manipulation and formatting utilities
- **nanoid**: Secure URL-friendly unique ID generation