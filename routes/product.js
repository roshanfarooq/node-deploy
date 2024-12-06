const express=require('express');

const product=require('../controller/product')


const router=express.Router();

router
.post('/',product.creatProduct)
.get('/',product.allProducts)
.get('/:id',product.product)
.put('/:id',product.replaceProduct)
.patch('/:id',product.updateProduct)
.delete('/:id',product.deleteProduct)
exports.router=router;
