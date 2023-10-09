const express = require('express');
const router = express.Router();

const emailController = require('../controllers/api/v1/email/emailController');

// Define a route for sending emails
router.post('/email/send', emailController.emailSend);

module.exports = router;
