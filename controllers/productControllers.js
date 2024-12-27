const ProductData = require('../models/Product')
const getProducts = async(req,res)=>{
    try {
        const products = await ProductData.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {getProducts}