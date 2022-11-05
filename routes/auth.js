const router = require('express').Router();
const authController = require('../controller/auth');

router.get('/login', authController.validateCredentials);

module.exports = router;
