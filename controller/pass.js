const Doc = require('../model/doc');
const Student = require('../model/student');

exports.createPass = async (req, res) => {
  try {
    const {
      userName,
      phoneNumber,
      rollNumber,
      date,
      inTime,
      outTime,
      purpose,
    } = req.body;

    const user = await Student.findOne({ rollNumber: rollNumber });

    if (user.noOfRemarks < 3) {
      const pass = new Doc({
        userName,
        rollNumber,
        phoneNumber,
        date: new Date(date),
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

exports.getOutgoing = async (req, res) => {
  const timeString = req.query.date;
  const docs = await Doc.find({ date: { $lte: timeString } });
  res.json({ message: 'ok', status: 200, data: docs });
};

exports.verifyPass = async (req, res) => {
  const timeString = '2022-2-10';
  const rollNumber = req.params.id;
  const filter = {
    rollNumber,
    date: { $lte: timeString },
  };
  if (req.params.type === 'out') {
    const update = { outVerified: true };
    const resp = await Doc.findOneAndUpdate(filter, update);
    res.json({ message: 'ok', status: 200, data: resp });
  } else if (req.params.type === 'in') {
    const update = { inVerified: true };
    const resp = await Doc.findOneAndUpdate(filter, update);
    res.json({ message: 'ok', status: 200, data: resp });
  }
};
