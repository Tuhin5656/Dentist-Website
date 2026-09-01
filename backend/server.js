require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// ===============================
// CORS Configuration
// ===============================
const allowedOrigins = [
    'https://smilenestt.netlify.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:3006'
];

app.use(cors({
    origin: function (origin, callback) {

        // Allow requests with no origin
        // (Postman, server-to-server requests, etc.)
        if (!origin) {
            return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'));
    },

    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ],

    credentials: true
}));

// Handle preflight requests
app.options('*', cors());

// ===============================
// Body Parser
// ===============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Test Route
// ===============================
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Dentist Website Backend is running!'
    });
});

// ===============================
// API Routes
// ===============================
app.use('/api', appointmentRoutes);

// ===============================
// Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
