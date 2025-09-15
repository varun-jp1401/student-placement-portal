# Student Placement Portal Backend

## Overview
This backend application is designed to handle authentication for students and staff in the Student Placement Portal. It connects to a MySQL database to store and manage user login information.

## Project Structure
```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── auth.js           # Authentication routes for login and signup
│   ├── controllers
│   │   └── authController.js  # Logic for handling authentication
│   ├── models
│   │   ├── student.js         # Student model for MySQL
│   │   └── staff.js           # Staff model for MySQL
│   └── config
│       └── db.js              # Database configuration and connection
├── package.json               # NPM configuration file
└── README.md                  # Documentation for the backend setup
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd student-placement-portal/backend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Configure the database connection in `src/config/db.js` with your MySQL credentials.

## Running the Application
To start the backend server, run:
```
node src/app.js
```
The server will start on the specified port (default is 3000).

## API Endpoints
- **POST /api/auth/student/login**: Login for students
- **POST /api/auth/student/signup**: Signup for students
- **POST /api/auth/staff/login**: Login for staff
- **POST /api/auth/staff/signup**: Signup for staff

## Database Setup
Ensure you have a MySQL database set up with the following tables:
- `students`: to store student login information
- `staff`: to store staff login information

## License
This project is licensed under the MIT License.