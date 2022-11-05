const router = require('express').Router();
const passController = require('../controller/pass');

router.post('/createPass', passController.createPass);
router.get('/getPrevPass', passController.prevPass);
module.exports = router;
