const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const interestSchema = require('./Interested');
const { Schema } = mongoose;

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
