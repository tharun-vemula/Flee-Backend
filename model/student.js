const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  noOfRemarks: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);
