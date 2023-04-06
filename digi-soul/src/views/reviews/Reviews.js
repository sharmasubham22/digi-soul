/**
 * @author Amanjot Singh
 **/

import { Container, Grid } from "@mui/material";
import React from "react";
// import reviewsData from "../../data/reviews.json"
import ReviewCard from "../../components/ReviewCard";
import {reviewsApi} from "./services/reviews-api"

function Reviews() {
  const [reviewsData, setReviewsData] = React.useState([]);
  React.useEffect(() => {
    reviewsApi
      .getAllReviews()
      .then((res) => {
        setReviewsData(() => res?.data?.reviews || []);
      })
      .catch((err) => {
        console.log("While fetching reviews-->", err);
      });
  }, []);
  return (
    <Container sx={{ py: 8 }} maxWidth="l">
      <Grid container spacing={8}>
        {reviewsData.map((review) => (
          <Grid item key={review.reviewId} xs={12} sm={12} md={6}>
            <ReviewCard
              key={review._id}
              id={review._id}
              name={review.name}
              imageURL={review.imageURL}
              brief={review.brief}
              youtube = {review.youtube}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Reviews;
