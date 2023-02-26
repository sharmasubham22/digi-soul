import { Container } from "@mui/material";
import React from "react";
import reviewsData from "../data/reviews.json";
import ReviewCard from "../components/ReviewCard"

function Reviews() {
  const reviews = reviewsData.map((review) => {
    return (
      <ReviewCard
        key={review.reviewId}
        id={review.reviewId}
        title={review.reviewTitle}
        description={review.reviewDescription}
        fullReview={review.fullReview}
        imgURL={review.reviewImg}
        yt={review.reviewYT}
      />
    );
  });

  return <Container
        sx={{
          marginTop: "50px",
          display: "grid",
          gap: "50px 50px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {reviews}
      </Container>;
}

export default Reviews;
