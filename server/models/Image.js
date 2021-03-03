const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const imageSchema = new Schema({
    filename: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String, 
    },
    path: {
        type: String
    },
    uri: {
        type: String
    }
});

const Image = model("Image", imageSchema);

module.exports = Image;