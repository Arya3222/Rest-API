const express = require('express');
const router = express.Router();

const {allproducts, allproductsdata} = require("../Controller/controldata");

router.route("/").get(allproducts);
router.route("/test").get(allproductsdata);


module.exports = router;
