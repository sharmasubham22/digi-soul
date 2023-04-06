/**
 * @author Amanjot Singh
 **/

const express = require("express");
const ReviewService = require("../services/reviewServices");

const router = express.Router();

/**
 * @author Amanjot Singh
 * @description Get all reviews
 * @params request, response
 * @return reviews
 */
router.get("/", (req, res) => {
  ReviewService.getAllReviews()
    .then((reviews) => {
      if (reviews.length > 0) {
        res.status(200).json({
          message: "Reviews retrieved",
          success: true,
          reviews: reviews,
        });
      } else {
        res.status(404).json({
          message: "No review found",
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

/**
 * @author Amanjot Singh
 * @description Get review with given id
 * @params request, response
 * @return review
 */
router.get("/review/:reviewId", (req, res) => {
  ReviewService.getReview(req.params.reviewId)
    .then((review) => {
      if (review) {
        return res.status(200).json({
          success: true,
          message: "Review fetched",
          review: review,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Review with given id not found",
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

/**
 * @author Amanjot Singh
 * @description Delete review with given id
 * @params request, response
 * @return result
 */
router.delete("/review/:reviewId", (req, res) => {
  ReviewService.deleteReview(req.params.reviewId)
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        res.status(200).json({
          message: "Review deleted",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Review not found",
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

/**
 * @author Amanjot Singh
 * @description Update review with given id
 * @params request, response
 * @return result
 */
router.put("/review/:reviewId", (req, res) => {
  const reviewId = req.params.reviewId;
  const review = req.body;
  ReviewService.updateReview(reviewId, review)
    .then((updateResult) => {
      if (updateResult.acknowledged) {
        res.status(200).json({
          message: "Review updated",
          success: true,
          review: review,
        });
      } else {
        res.status(404).json({
          message: "Review not found",
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

/**
 * @author Amanjot Singh
 * @description Create a new review
 * @params request, response
 * @return review
 */
router.post("/", (req, res) => {
  const review = req.body.review;
  if (review) {
    ReviewService.createNewReview(review)
      .then((newReview) => {
        res.status(200).json({
          message: "Review added",
          success: true,
          review: { ...newReview },
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
      message: "Invalid Input - Unable to add review",
      success: false,
    });
  }
});

module.exports = router;
