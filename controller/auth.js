const Student = require('../model/student');

exports.validateCredentials = async (req, res) => {
  const student = await Student.find();
  res.send(student);
};
