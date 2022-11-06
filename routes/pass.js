const router = require('express').Router();
const passController = require('../controller/pass');

router.post('/createPass', passController.createPass);
router.get('/getPrevPass', passController.prevPass);
router.get('/getStudents', passController.getOutgoing);
router.get('/verify', passController.verifyPass);
module.exports = router;
