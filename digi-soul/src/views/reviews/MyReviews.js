/**
 * @author Amanjot Singh
 **/
import * as React from "react";
import { Button, Container, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MyReviewCard from "../../components/MyReviewCard";
import { reviewsApi } from "./services/reviews-api";
import axios from "axios";

function MyReviews() {
  const [reviewsData, setReviewsData] = React.useState([]);
  const [reviewIDs, setReviewIDs] = React.useState([]);
  const dataFetchedRef = React.useRef(false);

  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    axios
      .post("https://digi-soul.onrender.com/api/user_details/fetchreviews", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setReviewIDs(res?.data?.reviewIds);
        console.log(reviewIDs);
        res?.data?.reviewIds.map((id) => {
          reviewsApi
            .getReview(id)
            .then((res) => {
              setReviewsData((prev) => [...prev, res?.data?.review || {}]);
              console.log(reviewsData);
            })
            .catch((err) => {
              console.log("While fetching an review -->", err);
            });
        });
      });
  }, []);

  function deleteReview(id) {
    reviewsApi
      .removeReview(id)
      .then((res) => {
        console.log("Review Delete-->", res);
        setReviewsData((prevReviewData) => {
          return prevReviewData.filter((review) => {
            return review._id !== id;
          });
        });
      })
      .catch((err) => {
        console.log("While deleting review-->", err);
      });
  }

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/reviews/create"
        >
          Create
        </Button>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="l">
        <Grid container spacing={8}>
          {reviewsData.map((review) => (
            <Grid item key={review.reviewId} xs={12} sm={6} md={4}>
              <MyReviewCard
                key={review._id}
                id={review._id}
                name={review.name}
                imageURL={review.imageURL}
                brief={review.brief}
                deleteReview={deleteReview}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default MyReviews;
