const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const employerSchema = new Schema({
    companyName: {
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
    candidates: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Jobs'
        }
    ],
});

// set up pre-save middleware to create password
employerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
employerSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

employerSchema.virtual('candidateCount').get(function () {
    return this.candidates.length;
});

employerSchema.virtual('jobsCount').get(function () {
    return this.jobs.length;
});

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
