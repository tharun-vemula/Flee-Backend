const router = require('express').Router();
const passController = require('../controller/pass');

router.post('/validate', passController.createPass);

module.exports = router;
