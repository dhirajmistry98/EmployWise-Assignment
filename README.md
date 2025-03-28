# EmployWise User Management App

## Overview
This is a React application for user management, integrating with the Reqres API to provide authentication, user listing, editing, and deletion functionality.

## Features
- Authentication with token-based login
- Paginated user list
- User edit and delete functionality
- Responsive design with Tailwind CSS

## Prerequisites
- Node.js (v14 or later)
- npm or yarn

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/employwise-app.git
cd employwise-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

## Environment Variables
No additional environment variables are required for this project.

## Deployment
The app can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

## Technologies Used
- React
- React Router
- Axios
- Tailwind CSS

## API Endpoints Used
- POST /api/login
- GET /api/users
- PUT /api/users/{id}
- DELETE /api/users/{id}

## Login Credentials
- Email: eve.holt@reqres.in
- Password: cityslicka

## Additional Notes
- Token is stored in localStorage
- Protected routes prevent unauthorized access
- Responsive design supports mobile and desktop

## License
MIT License