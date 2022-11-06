const Doc = require('../model/doc');
const Student = require('../model/student');

exports.createPass = async (req, res) => {
  try {
    const {
      userName,
      phoneNumber,
      rollNumber,
      date,
      month,
      year,
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
        date,
        month,
        year,
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
      '-_id -rollNumber -userName -phoneNumber',
    );
    res.json({ message: 'ok', status: 200, data: prevPass });
  } else {
    res.json({ message: 'Invalid', status: 404 });
  }
};

exports.getOutgoing = async (req, res) => {
  const date = req.query.date;
  const month = req.query.month;
  const year = req.query.year;

  const docs = await Doc.find({
    date: date,
    month: month,
    year: year,
  });
  res.json({ message: 'ok', status: 200, data: docs });
};

exports.verifyPass = async (req, res) => {
  const date = req.query.date;
  const month = req.query.month;
  const year = req.query.year;

  const rollNumber = req.query.id;
  const filter = {
    rollNumber,
    date: date,
    month: month,
    year: year,
  };
  if (req.query.type === 'out') {
    const update = { outVerified: true, status: 'Verified' };
    const resp = await Doc.findOneAndUpdate(filter, update, { new: true });
    res.json({ message: 'ok', status: 200, data: resp });
  } else if (req.query.type === 'in') {
    const update = { inVerified: true, status: 'Outdated' };
    const resp = await Doc.findOneAndUpdate(filter, update, { new: true });
    res.json({ message: 'ok', status: 200, data: resp });
  }
};
