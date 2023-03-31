const express = require("express");
const ProductService = require("../services/ProductService");

const router = express.Router();

router.get("/", (req, res) => {
  ProductService.getAllProducts()
    .then((products) => {
      if (products.length > 0) {
        res.status(200).json({
          message: "Products retrieved",
          success: true,
          products: products,
        });
      } else {
        res.status(404).json({
          message: "No Product found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        success: false,
      });
    });
});

router.get("/product/:productId", (req, res) => {
  ProductService.getProduct(req.params.productId)
    .then((product) => {
      if (product) {
        return res.status(200).json({
          success: true,
          message: "Product fetched",
          product: product,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Product with given id not found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    });
});

router.delete("/product/:productId", (req, res) => {
  ProductService.deleteProduct(req.params.productId)
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        res.status(200).json({
          message: "Product deleted",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Product not found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Something went wrong",
        success: false,
      });
    });
});

router.put("/product/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = req.body;
  console.log(productId);
  ProductService.updateProduct(productId, product)
    .then((updateResult) => {
      console.log(updateResult);
      if (updateResult.matchedCount) {
        res.status(200).json({
          message: "Product updated",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Product not found",
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        success: false,
      });
    });
});

router.post("/", (req, res) => {
  const product = req.body;
  if (product) {
    ProductService.createNewProduct(product)
      .then((newProduct) => {
        res.status(200).json({
          message: "Product added",
          success: true,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
          success: false,
        });
      });
  } else {
    res.status(500).json({
      message: "Invalid Input - Unable to add Product",
      success: false,
    });
  }
});

module.exports = router;
