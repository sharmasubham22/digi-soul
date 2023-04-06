/**
 * @author Amanjot Singh
 **/

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
// import reviewsData from "../../data/reviews.json";
import { reviewsApi } from "./services/reviews-api";

function ReviewDetails() {
  const { id } = useParams();

  const [selectedReview, setSelectedReview] = React.useState([]);
  React.useEffect(() => {
    reviewsApi
      .getReview(id)
      .then((res) => {
        setSelectedReview(() => res?.data?.review || {});
      })
      .catch((err) => {
        console.log("While fetching an review -->", err);
      });
  }, []);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card sx={{ maxWidth: 900, margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {selectedReview.name}
          </Typography>
        </CardContent>

        {selectedReview.youtube ? (
          <CardMedia
            component="iframe"
            height="500"
            src={selectedReview.youtube}
          />
        ) : (
          <CardMedia
            sx={{ objectFit: "cover" }}
            component="img"
            alt="Review Image"
            height="500"
            image={selectedReview.imageURL}
          />
        )}
        <CardContent>
          <Typography variant="h5" component="p" color="text.secondary">
            {selectedReview.reviewDescription}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedReview.detail}
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
