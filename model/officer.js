const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const securitySchema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Officer', securitySchema);
