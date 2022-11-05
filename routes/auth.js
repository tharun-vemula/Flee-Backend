const router = require('express').Router();
const authController = require('../controller/authController');
const prevOutpass = require('../controller/prevOutpass');

router.post('/login/student', authController.authStudent);
router.post('/login/security', authController.authSecurity);
router.get('/allOutpass', prevOutpass.prevPass);

module.exports = router;