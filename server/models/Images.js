const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const Pro

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: false,
        trim: true
    },
    image: {
        data: Buffer, 
        contentType: String
    },
});

const Images = model('Image', imageSchema);

module.exports = Images;