# Complaint Management System

A modern, full-stack application for managing customer complaints with a user-friendly interface and admin dashboard.

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, React-Toastify
- **Backend**: Node.js, Express, TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Development Tools**: npm, Git

## Project Overview

This Complaint Management System provides a seamless experience for both customers and administrators. Customers can easily submit complaints through an intuitive form, while administrators have a dedicated dashboard to manage and track these complaints. The system features real-time updates, responsive design, and a clean, modern interface.

## Screenshots

### Landing Page
![Landing Page Screenshot](Screenshot 2025-04-17 203121.png)

### Complaint Submission Form
![Complaint Form Screenshot](Screenshot 2025-04-17 203314.png)

### Admin Dashboard
![Admin Dashboard Screenshot](Screenshot 2025-04-17 203616.png)

## Setup and Installation Instructions

1. Backend Setup:
```bash
# Navigate to the server directory
cd server

# Install all dependencies
npm install

# Create a .env file with your Supabase credentials
# You can get these from your Supabase project settings
touch .env
# Add the following to your .env file:
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
PORT=3000

# Start the backend server
npm run dev
```

2. Frontend Setup:
```bash
# Open a new terminal window
# Navigate to the client directory
cd client

# Install all dependencies
npm install

# Create a .env file
touch .env
# Add the following to your .env file:
VITE_API_URL=http://localhost:3000
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Start the frontend development server
npm run dev
```

3. Access the application at http://localhost:5173 (admin passcode: 0000)
   - Note: You can change the admin passcode by modifying line 15 in `client/src/components/LandingPage.tsx`

## Assumptions and Tradeoffs

1. **Authentication**: Used a simple passcode (0000) instead of proper authentication to focus on core functionality. This is not secure for production but sufficient for demonstration.

2. **Database**: Chose Supabase for quick setup and real-time capabilities, but this locks us into their platform. A more flexible solution would use a standalone PostgreSQL instance.

3. **UI Framework**: Used Tailwind CSS for rapid development, but this increased the bundle size. A more optimized approach would use a CSS-in-JS solution or custom CSS.

4. **TypeScript**: Added type safety but required more initial setup time and made the codebase more complex for beginners.

## Future Improvements

1. **Security**:
   - Implement proper user authentication with JWT
   - Add role-based access control
   - Implement rate limiting for API endpoints
   - Add input sanitization

2. **Features**:
   - Email notifications for new complaints and status changes
   - File attachment support for complaints
   - Admin response system
   - Advanced search and filtering
   - Export functionality for complaint data

3. **Performance**:
   - Implement pagination for large datasets
   - Add caching for frequently accessed data
   - Optimize database queries
   - Implement lazy loading for images and components

4. **UX**:
   - Add complaint categories and priority levels
   - Implement a dashboard with statistics
   - Add dark mode support
   - Improve mobile responsiveness

