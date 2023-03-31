import { httpClient } from "../../../lib/httpClient";

const getAllProducts = () => {
  return httpClient.get("/products");
};

const getProduct = (productId) => {
  return httpClient.get(`/products/product/${productId}`);
};

const createProduct = (product) => {
  return httpClient.post("/products", { product });
};

const removeProduct = (productId) => {
  return httpClient.delete(`/products/product/${productId}`);
};

const updateProduct = (productId, product) => {
  return httpClient.put(`/products/product/${productId}`, { product });
};

export const productsApi = {
    getAllProducts,
    getProduct,
    updateProduct,
    removeProduct,
    createProduct
}