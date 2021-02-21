const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  profileText: {
    type: String,
    required: 'Please Create Your Profile',
    minlength: 300,
    maxlength: 280000
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  image: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Images'
    }
  ],
  orders: [Order.schema],
  interested_jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Jobs'
    }
  ],
  matched_jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Jobs'
    }
  ],
  jobs: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Jobs'
    }
],
skills: [{
  type: Schema.Types.ObjectId,
  ref: 'Skills',
  required: true
}]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual('interestedJobCount').get(function () {
  return this.interested_jobs.length;
});

userSchema.virtual('skillCount').get(function () {
  return this.skills.length;
});

userSchema.virtual('matchedJobCount').get(function () {
  return this.matched_jobs.length;
});

userSchema.virtual('jobsCount').get(function () {
  return this.jobs.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
