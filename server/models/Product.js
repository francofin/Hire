const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 20.99
  },
  quantity: {
    type: Number,
    max: 1,
    default: 1
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
