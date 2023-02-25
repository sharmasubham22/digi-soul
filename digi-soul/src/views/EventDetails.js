import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import eventsData from "../data/events.json";

function EventDetails() {
  const { id } = useParams();
  console.log(id)
  const currentEvent = eventsData.filter((event) => event.eventId === parseInt(id)).at(0);

  console.log(currentEvent);

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
        <CardMedia sx={{objectFit: "cover"}}
          component="img"
          alt="Event Image"
          height="200"
          image={currentEvent.eventImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {currentEvent.eventName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {currentEvent.eventDetailsLong}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/events`}>
            Back
          </Button>
          <Button size="small">Save</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default EventDetails;
