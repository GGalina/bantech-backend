require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_FROM, SENDGRID_TO } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (req, res, next) => {
    try {
        const { name, email, message, subject } = req.body;
        const emailSubject = subject || 'No Subject';

        const contact = {
            to: SENDGRID_TO,
            from: SENDGRID_FROM,
            subject: emailSubject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        }

        await sgMail.send(contact);

        res.status(200).json({
            message: 'Email sent'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    sendEmail
};