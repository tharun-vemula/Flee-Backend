const router = require('express').Router();
const passController = require('../controller/pass');

router.post('/createPass', passController.createPass);
router.get('/getPrevPass', passController.prevPass);
router.get('/getStudents', passController.getOutgoing);
router.get('/verify/:type/:id', passController.verifyPass);
module.exports = router;
