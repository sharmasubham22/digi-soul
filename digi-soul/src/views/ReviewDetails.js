import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import reviewsData from "../data/reviews.json";

function ReviewDetails() {
  const { id } = useParams();

  console.log(id);
  console.log(reviewsData);

  const selectedReview = reviewsData
    .filter((review) => review.reviewId === parseInt(id))
    .at(0);

  console.log(selectedReview);
  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card sx={{ maxWidth: 900, margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {selectedReview.reviewTitle}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          alt="Event Image"
          height="500"
          image={selectedReview.reviewImg}
        />
        <CardContent>
          <Typography variant="h5" component="p" color="text.secondary">
            {selectedReview.reviewDescription}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedReview.fullReview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/reviews`}>
            Back
          </Button>
          <Button size="small">Save</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ReviewDetails;
