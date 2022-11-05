// These models can be found in another branch
const Student = require("../model/student");
const Security = require("../model/security");
const Pass = require('../model/pass');

async function authStudent(req, res) {
    /* student details */
    const username = req.body.name;
    const password = req.body.password;

    const studentVerify = await Student.findOne({username, password});
    if(studentVerify.length) {
        // fetch all previous out pass of this student
        const prevPass = await Pass.find({rollNumber: studentVerify.username});
        res.json({message: "Ok", status: 200, docs: prevPass});
    } else {
        res.json({message: "Failed", status: 404});
    }
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
