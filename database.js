// getting-started.js
import mongoose from "mongoose";
const { Schema } = mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shop');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const productSchema = new mongoose.Schema({
    name:String,
    precio:Number
});
const Product = mongoose.model('Product', productSchema);
export {
    main,Product
}