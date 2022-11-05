const router = require('express').Router();
const authController = require('../controller/auth');

router.post('/student/login', authController.authStudent);

module.exports = router;
