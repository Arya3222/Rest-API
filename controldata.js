const products = require("../model/models");

const allproducts = async (req, res) => {

    const { gender, last_name, sort, select } = req.query;
    const queryObj = {};
    //only gender hi aayega & ke baad bhi kuch bhi type karte ho to bhi gender hi aayega and empty show nhi karega
    if (gender) {
        queryObj.gender = gender;
    }
    // dono sath me aayenge ?gender=male&last_name=david tab
    if (last_name) {
        queryObj.last_name = { $regex: last_name, $options: 'v' }; // regex function used in mongodb
    }
    // sorting function-
    let apidata = products.find(queryObj);

    if (sort) {
        let sortfix = sort.split(",").join(" ");
        apidata = apidata.sort(sortfix);
    }

    // select function using in databases-

    if (select) {
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }

    // Pagination of the data-
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page-1)*limit;

    apidata = apidata.skip(skip).limit(limit);
    // console.log(queryObj);

    const Products1 = await apidata;
    res.status(200).json({ Products1 });

};


const allproductsdata = async (req, res) => {

    const Products2 = await products.find(req.query).sort('-first_name')

    // console.log(" this is all product data is req query", req.query);
    res.status(200).json({ Products2 });

};
module.exports = { allproducts, allproductsdata };