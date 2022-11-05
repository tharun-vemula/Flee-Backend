const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    outTime: {
      type: Date,
      required: true,
    },

    inTime: {
      type: Date,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    approvedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Doc', passSchema);
