const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const profileSchema = new Schema(
  {
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
    email: {
      type: String,
      required: true
    },
    image: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Images'
      }
    ],
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Profile = model('Profile', profileSchema);

module.exports = Profile;
