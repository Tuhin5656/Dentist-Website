require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();


// =====================================
// Connect to MongoDB
// =====================================

connectDB();


// =====================================
// Middleware
// =====================================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// =====================================
// CORS Configuration
// =====================================

const allowedOrigins = [
    'https://smilenestt.netlify.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:3006'
];


const corsOptions = {

    origin: function (origin, callback) {

        // Allow requests without origin
        // Example: Postman or server-to-server
        if (!origin) {
            return callback(null, true);
        }

        // Allow frontend URLs
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        console.log('❌ Blocked by CORS:', origin);

        return callback(
            new Error('Not allowed by CORS')
        );
    },


    methods: [
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE',
        'OPTIONS'
    ],


    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ],


    credentials: true
};


// Use CORS
app.use(cors(corsOptions));


// =====================================
// Test Route
// =====================================

app.get('/', (req, res) => {

    res.status(200).json({

        success: true,

        message: 'Dentist Website Backend is running!'

    });

});


// =====================================
// API Routes
// =====================================

// Appointment API
// Final URL:
// POST https://dentist-website-backend.onrender.com/api/appointments

app.use('/api', appointmentRoutes);


// =====================================
// 404 Route
// =====================================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: 'Route not found'

    });

});


// =====================================
// Error Handler
// =====================================

app.use((err, req, res, next) => {

    console.error('❌ Error:', err.message);

    res.status(500).json({

        success: false,

        message: err.message || 'Internal Server Error'

    });

});


// =====================================
// Start Server
// =====================================

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`🚀 Server running on port ${PORT}`);

});
