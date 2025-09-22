// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/auth');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
//   credentials: true
// }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);

// // Health check route
// app.get('/', (req, res) => {
//   res.sendFile({ message: 'Student Placement Portal Backend API' });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve images at /images path
app.use('/images', express.static(path.join(__dirname, '../../images')));

// Serve all static files (CSS, JS, images, HTML, etc.)
app.use(express.static(path.join(__dirname, '../../')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Serve main.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});