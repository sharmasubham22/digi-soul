/**
 * @author Amanjot Singh
 **/

import { httpClient } from "../../../lib/httpClient";

const getAllReviews = () => {
  return httpClient.get("/reviews");
};

const getReview = (reviewId) => {
  return httpClient.get(`/reviews/review/${reviewId}`);
};

const createReview = (review) => {
  return httpClient.post("/reviews", { review });
};

const removeReview = (reviewId) => {
  return httpClient.delete(`/reviews/review/${reviewId}`);
};

const updateReview = (reviewId, review) => {
  console.log("Reviews API - updateReview -->", review);
  const response = httpClient.put(`/reviews/review/${reviewId}`, { review });
  console.log("reviews-api response --> ", response);
  return response;
};

export const reviewsApi = {
  getAllReviews,
  getReview,
  updateReview,
  removeReview,
  createReview,
};
