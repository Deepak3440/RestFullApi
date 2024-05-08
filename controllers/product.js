const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { company, name, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.replace(",", " "); // Fix typo here
        apiData = apiData.select(selectFix);
    }

    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||5;

    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({ myData,nbHits:myData.length });
};

const getAllProductsTesting = async (req, res) => {
    try {
        const myData = await Product.find();
        res.status(200).json({ myData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllProducts, getAllProductsTesting };
