# Student Placement Portal

This project is a Student Placement Portal that integrates a backend with a MySQL database to manage login information for students and staff. The application consists of a frontend built with HTML and CSS, and a backend built with Node.js and Express.

## Project Structure

```
student-placement-portal
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── routes
│   │   │   ├── auth.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   ├── models
│   │   │   ├── student.js
│   │   │   ├── staff.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── main.html
│   ├── login-student.html
│   ├── login-staff.html
│   ├── student_signup.html
│   ├── staff_signup.html
│   ├── styles
│   │   └── main.css
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Configure the database connection in `backend/src/config/db.js`.
4. Start the server:
   ```
   node src/app.js
   ```

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Open `main.html` in a web browser to access the application.

## Features

- **User Authentication**: Separate login and signup for students and staff.
- **Database Integration**: MySQL database to store user information securely.
- **Responsive Design**: Frontend designed to be user-friendly and accessible.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.