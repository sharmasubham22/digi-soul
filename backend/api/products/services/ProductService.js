const { productNames } = require("../models/Product");
const Product = require("../models/Product");

const getProduct = (productId) => {
  return Product.findById(productId);
};

const getAllProducts = () => {
  return Product.find({});
};

const createNewProduct = async (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

const deleteProduct = (productId) => {
  return Product.deleteOne({ _id: productId });
};

const updateProduct = (productId, product) => {
  return product.updateOne({ _id: productId }, product);
};

module.exports = {
  getProduct,
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
