const Pass = require('../model/pass');
const student = require('../model/student');

exports.createPass = async (req, res) => {
  try {
    const {
      username,
      phoneNumber,
      rollNumber,
      date,
      inTime,
      outTime,
      purpose,
    } = req.body;

    const user = await student.findOne({ username: username });

    if (user[0].noOfRemarks < 3) {
      const pass = new Pass({
        username,
        rollNumber,
        phoneNumber,
        date,
        inTime,
        outTime,
        purpose,
      });

      await pass.save();
      res.json({ message: 'OutPass Created', status: 200 });
    } else {
      res.json({
        message: 'Limit has been Reached. Contact your Faculty Advisor',
        status: 400,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
