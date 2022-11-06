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

    inVerified: {
      type: Boolean,
      required: true,
      default: false,
    },

    outVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Doc', passSchema);
