const Student = require("../model/student");
const Security = require("../model/security");

function authStudent(req, res) {
    /* student details */
    const username = req.body.name;
    const password = req.body.password;

    const studentVerify = Student.findOne({username, password});
    if(studentVerify.length) {
        res.send("Logged in");
        return true;
    }
    res.send("Invalid");
    return false;
}

function authSecurity(req, res) {
    /* Security details */
    const username = req.body.name;
    const password = req.body.password;

    const securityVerify = Security.findOne({username, password});
    if(securityVerify.length) {
        res.send("Logged In");
        return true;
    }
    res.send("Invalid Credentials");
    return false;
}

module.exports = {authStudent, authSecurity};
