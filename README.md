# Complaint Management System

A modern, full-stack application for managing customer complaints with a user-friendly interface and admin dashboard.

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, React-Toastify
- **Backend**: Node.js, Express, TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Development Tools**: npm, Git

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git
- A Supabase account (free tier is sufficient)

## Project Overview

This Complaint Management System provides a seamless experience for both customers and administrators. Customers can easily submit complaints through an intuitive form, while administrators have a dedicated dashboard to manage and track these complaints. The system features real-time updates, responsive design, and a clean, modern interface.

## Screenshots

### Landing Page
![Screenshot 2025-04-17 203121](https://github.com/user-attachments/assets/4b750900-8305-4e95-920c-0e50c0ff2e41)


### Complaint Submission Form
![Screenshot 2025-04-17 203314](https://github.com/user-attachments/assets/88c34942-1564-4b8e-84a0-1833cf1cf49c)


### Admin Dashboard
![Screenshot 2025-04-17 203616](https://github.com/user-attachments/assets/7c8865ae-0bca-4362-b1cb-1cbb1dd08ffe)

## Video Demonstration
[![Watch the video](https://img.youtube.com/vi/rYnnORK5wuM/0.jpg)](https://www.youtube.com/watch?v=rYnnORK5wuM)

Click the image above to watch a full demonstration of the application in action.




## Setup and Installation Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/matthewj29-hills/Complaint-Management-Agent.git
cd Complaint-Management-Agent
```

### 2. Supabase Setup
1. Create a free account at [Supabase](https://supabase.com)
2. Create a new project
3. In your project settings, go to "Database" and create a new table with the following SQL:
```sql
create table complaints (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  complaint text not null,
  status text default 'Pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```
4. Note down your project URL and anon key from Project Settings > API

### 3. Backend Setup
```bash
# Navigate to the server directory
cd server

# Install all dependencies
npm install

# Create a .env file with your Supabase credentials
# Replace the values with your actual Supabase credentials
echo "SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
PORT=3000" > .env

# Start the backend server
npm run dev
```

### 4. Frontend Setup
```bash
# Open a new terminal window
# Navigate to the client directory
cd client

# Install all dependencies
npm install

# Create a .env file
# Replace the values with your actual Supabase credentials
echo "VITE_API_URL=http://localhost:3000
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key" > .env

# Start the frontend development server
npm run dev
```

### 5. Access the Application
- Open your browser and navigate to http://localhost:5173
- Admin Dashboard: Use passcode "0000" to access the admin panel
- Note: You can change the admin passcode by modifying line 15 in `client/src/components/LandingPage.tsx`

## Troubleshooting

If you encounter any issues:
1. Ensure both backend and frontend servers are running
2. Check that your Supabase credentials are correctly set in both .env files
3. Verify that the Supabase table was created successfully
4. Make sure you're using Node.js v18 or higher

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

