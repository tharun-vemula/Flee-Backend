const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passSchema = Schema(
  {
    userName: {
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
      type: String,
      required: true,
    },

    inTime: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'To be verified',
    },
    approvedBy: {
      type: String,
      required: true,
      default: 'Security',
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
