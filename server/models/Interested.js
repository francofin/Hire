const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const interestSchema = new Schema(
  {
    interestShown: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = interestSchema;
