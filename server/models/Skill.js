const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Skills = mongoose.model('Skill', skillSchema);

module.exports = Skills;
