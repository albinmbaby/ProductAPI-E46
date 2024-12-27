const express = require('express')
const productRouter = express.Router()
const {getProducts} = require('../controllers/productControllers')

productRouter.get('/',getProducts)

module.exports = productRouter