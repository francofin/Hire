const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const interestSchema = require('./Interested');
const {
  Schema
} = mongoose;
const User = require('./User')

const jobSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    required: 'Please Create Your Profile',
    minlength: 5000,
    maxlength: 280000
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  image: {
    type: String
  },
  positionFilled: {
    type: Boolean,
    required: true,
    default: false
  },
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skills',
    required: true
  }],
  applicants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  candidates: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  matchedCandidates: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  toJSON: {
    getters: true
  }
});

jobSchema.virtual('userInterestCount').get(function () {
  return this.usersInterested.length;
});

jobSchema.virtual('candidateCount').get(function () {
  return this.candidates.length;
});

jobSchema.virtual('matchCount').get(function () {
  return this.matchedCandidates.length;
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;