const router = require('express').Router();
const authController = require('../controller/authController');

router.post('/login/student', authController.authStudent);
router.post('/login/security', authController.authSecurity);

module.exports = router;