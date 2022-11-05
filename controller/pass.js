const Pass = require('../model/pass');

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

    //downloader(pass);
  } catch (error) {
    console.log(error);
  }
};
