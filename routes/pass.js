const router = require('express').Router();
const passController = require('../controller/pass');

router.post('/createPass', passController.createPass);

module.exports = router;
