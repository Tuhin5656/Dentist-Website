const Appointment = require('../models/appointment');
const transporter = require('../config/email');
const { userEmailTemplate, adminEmailTemplate } = require('../utils/emailTemplates');

exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();

        // Send confirmation email to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: appointment.email,
            subject: 'Dental Appointment Confirmation',
            html: userEmailTemplate(appointment)
        });

        // Send notification to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Appointment Request',
            html: adminEmailTemplate(appointment)
        });

        res.status(201).json({
            success: true,
            message: 'Appointment scheduled successfully',
            data: appointment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
