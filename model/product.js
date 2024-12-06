const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema of mongoose
const ProductSchema = new Schema({

    title: {type:String, required:true}, // String is shorthand for {type: String}
    description: String,
    category: {type:String},
    price: {type:Number, min:[0,'wrong price'] ,required:true},
    discountPercentage: Number,
    thumbnail:{type:String,required:true},
    rating: Number,
    images: [String],
  });

  exports.Product = mongoose.model('Product', ProductSchema);