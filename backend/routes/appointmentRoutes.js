const express = require('express');

const router = express.Router();

const {
    createAppointment
} = require('../controllers/appointmentController');


// POST Appointment
router.post(
    '/appointments',
    createAppointment
);


module.exports = router;
