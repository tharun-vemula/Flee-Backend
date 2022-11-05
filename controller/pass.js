const Doc = require('../model/doc');
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

exports.prevPass = async (req, res) => {
  const roll = req.query.id;
  if (roll) {
    const prevPass = await Doc.find(
      { rollNumber: roll },
      '-_id -rollNumber -name -status',
    );
    res.json({ message: 'ok', status: 200, data: prevPass });
  } else {
    res.json({ message: 'Invalid', status: 404 });
  }
};
