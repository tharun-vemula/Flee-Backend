const Student = require('../model/student');
const Officer = require('../model/officer');

async function authStudent(req, res) {
  /* student details */
  const rollNumber = req.body.rollNumber;
  const password = req.body.password;

  const studentVerify = await Student.findOne(
    { rollNumber, password },
    'rollNumber fullName -_id',
  );
  if (studentVerify) {
    res.json({ message: 'Ok', status: 200, data: studentVerify });
  } else {
    res.json({ message: 'Failed', status: 404 });
  }
}

async function authSecurity(req, res) {
  /* Security details */
  const username = req.body.userName;
  const password = req.body.password;

  const officerVerify = await Officer.findOne(
    { username, password },
    'username fullName -_id',
  );
  if (officerVerify) {
    res.json({ message: 'Ok', status: 200, data: officerVerify });
  } else {
    res.json({ message: 'Failed', status: 404 });
  }
}

module.exports = { authStudent, authSecurity };
