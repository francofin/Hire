const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const interestSchema = require('./Interested');
const { Schema } = mongoose;

const jobSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  role: {
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  interests: [interestSchema]
},
  {
    toJSON: {
      getters: true
    }
  });

jobSchema.virtual('interestCount').get(function () {
  return this.interests.length;
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;
