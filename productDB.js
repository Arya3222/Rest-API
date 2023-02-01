const connectDB = require("./db/conn");
const product = require("./model/models");
require('dotenv').config();
const productjsondata = require('./product.json');

const data = async () => {

    try {
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
        await product.create(productjsondata);

        console.log('success');
    } catch (error) {
        console.log(error);
    }
};

data();