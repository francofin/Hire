const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

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
    minlength: 30,
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
  upload: {
    type: Schema.Types.ObjectId,
    ref: "Image"
  },
  positionFilled: {
    type: Boolean,
    required: true,
    default: false
  },
  role:{
    type:String,
    required: true
  },
  skills: {
    type: Schema.Types.ObjectId,
    ref: 'Skills',
    required: true
  },
  applicants: [
    {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
],
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

jobSchema.virtual('applicantCount').get(function () {
  return this.applicants.length;
});

jobSchema.virtual('candidateCount').get(function () {
  return this.candidates.length;
});

jobSchema.virtual('matchCount').get(function () {
  return this.matchedCandidates.length;
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;