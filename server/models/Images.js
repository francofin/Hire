const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        data: String, 
        contentType: String
    },
});

const Images = model('Image', imageSchema);

module.exports = Images;