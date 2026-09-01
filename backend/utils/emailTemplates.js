const userEmailTemplate = (appointment) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Appointment Confirmation</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .email-container {
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    padding: 30px;
                }
                .header {
                    background-color: #2196F3;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                    margin: -30px -30px 20px -30px;
                }
                .logo {
                    margin-bottom: 15px;
                }
                .appointment-details {
                    background-color: #f5f5f5;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                }
                .highlight {
                    color: #2196F3;
                    font-weight: bold;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #eeeeee;
                    color: #666666;
                    font-size: 14px;
                }
                .social-links {
                    margin: 20px 0;
                }
                .social-links a {
                    margin: 0 10px;
                    color: #2196F3;
                    text-decoration: none;
                }
                .contact-info {
                    margin-top: 20px;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="logo">
                        🦷
                    </div>
                    <h1>Appointment Confirmation</h1>
                </div>

                <p>Dear ${appointment.firstName} ${appointment.lastName},</p>
                
                <p>Thank you for choosing our Dental Clinic. We're pleased to confirm your appointment details below:</p>

                <div class="appointment-details">
                    <p><strong>Date & Time:</strong> 
                        <span class="highlight">
                            ${new Date(appointment.appointmentDate).toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                    </p>
                    <p><strong>Patient:</strong> ${appointment.firstName} ${appointment.lastName}</p>
                    <p><strong>Contact:</strong> ${appointment.email}</p>
                </div>

                <p><strong>Important Reminders:</strong></p>
                <ul>
                    <li>Please arrive 10 minutes before your appointment time</li>
                    <li>Bring any relevant medical records or x-rays</li>
                    <li>Wear a mask before entering the clinic</li>
                </ul>

                <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.</p>

                <p>We look forward to seeing you!</p>

                <div class="footer">
                    <p><strong>Best regards,</strong><br>Dental Clinic Team</p>
                    
                    <div class="social-links">
                        Follow us on:
                        <a href="#">Facebook</a> |
                        <a href="#">Instagram</a> |
                        <a href="#">Twitter</a>
                    </div>

                    <div class="contact-info">
                        📞 (555) 123-4567<br>
                        📧 contact@dentalclinic.com<br>
                        📍 123 Dental Street, Medical Center<br>
                        City, State 12345
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
};

const adminEmailTemplate = (appointment) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Appointment Request</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .email-container {
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    padding: 30px;
                }
                .header {
                    background-color: #FF5722;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                    margin: -30px -30px 20px -30px;
                }
                .notification-icon {
                    font-size: 36px;
                    margin-bottom: 10px;
                }
                .appointment-details {
                    background-color: #f8f9fa;
                    border-left: 4px solid #FF5722;
                    padding: 20px;
                    border-radius: 0 8px 8px 0;
                    margin: 20px 0;
                }
                .detail-row {
                    display: flex;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                }
                .detail-label {
                    font-weight: bold;
                    width: 120px;
                    color: #666;
                }
                .detail-value {
                    flex: 1;
                    color: #333;
                }
                .action-buttons {
                    text-align: center;
                    margin: 25px 0;
                }
                .button {
                    display: inline-block;
                    padding: 12px 24px;
                    margin: 0 10px;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                }
                .confirm-btn {
                    background-color: #4CAF50;
                    color: white;
                }
                .reject-btn {
                    background-color: #f44336;
                    color: white;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #eeeeee;
                    color: #666666;
                    font-size: 14px;
                }
                .urgent-badge {
                    background-color: #FF5722;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 15px;
                    font-size: 12px;
                    margin-left: 10px;
                }
                @media (max-width: 600px) {
                    .detail-row {
                        flex-direction: column;
                    }
                    .detail-label {
                        width: 100%;
                        margin-bottom: 5px;
                    }
                    .action-buttons .button {
                        display: block;
                        margin: 10px 0;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="notification-icon">🔔</div>
                    <h1>New Appointment Request</h1>
                    <p>A new patient has requested an appointment</p>
                </div>

                <div class="appointment-details">
                    <div class="detail-row">
                        <div class="detail-label">Patient Name:</div>
                        <div class="detail-value">
                            ${appointment.firstName} ${appointment.lastName}
                            <span class="urgent-badge">New Patient</span>
                        </div>
                    </div>

                    <div class="detail-row">
                        <div class="detail-label">Date & Time:</div>
                        <div class="detail-value">
                            ${new Date(appointment.appointmentDate).toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                    </div>

                    <div class="detail-row">
                        <div class="detail-label">Email:</div>
                        <div class="detail-value">
                            <a href="mailto:${appointment.email}" style="color: #2196F3; text-decoration: none;">
                                ${appointment.email}
                            </a>
                        </div>
                    </div>

                    <div class="detail-row">
                        <div class="detail-label">Phone:</div>
                        <div class="detail-value">
                            <a href="tel:${appointment.phone}" style="color: #2196F3; text-decoration: none;">
                                ${appointment.phone}
                            </a>
                        </div>
                    </div>

                    <div class="detail-row">
                        <div class="detail-label">Request Time:</div>
                        <div class="detail-value">
                            ${new Date().toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                    </div>
                </div>

                <div class="action-buttons">
                    <a href="${process.env.ADMIN_DASHBOARD_URL}/appointments/${appointment._id}/confirm" 
                       class="button confirm-btn">
                        Confirm Appointment
                    </a>
                    <a href="${process.env.ADMIN_DASHBOARD_URL}/appointments/${appointment._id}/reject" 
                       class="button reject-btn">
                        Reject Request
                    </a>
                </div>

                <div class="footer">
                    <p>This is an automated message from your Dental Clinic Management System</p>
                    <p>Please review and take appropriate action on this appointment request</p>
                    <p>
                        <strong>Quick Links:</strong><br>
                        <a href="${process.env.ADMIN_DASHBOARD_URL}/calendar" style="color: #2196F3;">View Calendar</a> | 
                        <a href="${process.env.ADMIN_DASHBOARD_URL}/appointments" style="color: #2196F3;">All Appointments</a>
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
};

module.exports = { userEmailTemplate, adminEmailTemplate };