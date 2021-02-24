const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");
const Order = require("./Order");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  profileText: {
    type: String,
    required: true,
    minlength: 300,
    maxlength: 280000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  image: {
    type: String
  },
  orders: [Order.schema],
  jobOffers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Jobs",
    },
  ],
  applied: [
    {
      type: Schema.Types.ObjectId,
      ref: "Jobs",
    },
  ],
  matchedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Jobs",
    },
  ],
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Jobs",
    },
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skills",
      required: true,
    },
  ],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual("offerCount").get(function () {
  return this.jobOffers.length;
});

userSchema.virtual("appliedCount").get(function () {
  return this.applied.length;
});

userSchema.virtual("matchedJobCount").get(function () {
  return this.matchedJobs.length;
});

userSchema.virtual("skillCount").get(function () {
  return this.skills.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
