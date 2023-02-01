const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'email id must be provided'],
    },
    gender: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("Product", productSchema);