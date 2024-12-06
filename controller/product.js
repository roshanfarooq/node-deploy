const fs=require('fs')
const model=require('../model/product');
const Product=model.Product;

//create 
exports.creatProduct=(req,res)=>{
    const product= new Product(req.body);
    product.save();
    res.status(201).json();

}
//read 
exports.allProducts=async (req,res)=>{
    const products=await Product.find();
    res.json(products)
}
exports.product=async (req,res)=>{
    const id = req.params.id;
    const product=await Product.findById(id)
    res.json(product);
}
//update
exports.replaceProduct=async (req,res)=>{
    const id = req.params.id;
   try{
    const replacedproduct= await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.json(replacedproduct);
   }
   catch(err){

     res.json(err)
   }
    
}
exports.updateProduct=async (req,res)=>{
    const id = req.params.id;
    try{
        const updatedproduct= await Product.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.json(updatedproduct);
       }
       catch(err){
    
         res.json(err)
       }
}
exports.deleteProduct=async (req,res)=>{
    const id = req.params.id;
    try{
        const dletedproduct= await Product.findByIdAndDelete({_id:id})
        res.json(dletedproduct);
       }
       catch(err){
    
         res.json(err)
       }
}