/**
 * @author Amanjot Singh
 **/

const Review = require("../models/Review");

const getReview = (reviewId) => {
  return Review.findById(reviewId);
};

const getAllReviews = () => {
  return Review.find({});
};

const createNewReview = async (review) => {
  const newReview = new Review(review);
  return newReview.save();
};

const deleteReview = (reviewId) => {
  return Review.deleteOne({ _id: reviewId });
};

const updateReview = (reviewId, review) => {
  return Review.updateOne({ _id: reviewId }, review.review);
};

module.exports = {
  getReview,
  getAllReviews,
  createNewReview,
  updateReview,
  deleteReview,
};
