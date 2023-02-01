require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require("./db/conn");
const productData = require("./Router/route");
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");

});

app.use("/api/product", productData);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`Server is running at ${port}`);
        })
    } catch (error) {
        console.log(error);

    }
}
start();