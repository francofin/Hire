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
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  orders: [Order.schema],
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Jobs'
    }
  ],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual('jobCount').get(function() {
    return this.jobs.length;
  });
const User = mongoose.model('User', userSchema);

module.exports = User;
