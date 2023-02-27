import { Button, Container, Grid } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MyEventCard from "../components/MyEventCard";
import eventsData from "../data/events.json";

function MyEvents() {
  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/events/create"
        >
          Create
        </Button>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="l">
        <Grid container spacing={8}>
          {eventsData.map((event) => (
            <Grid item key={event.eventId} xs={12} sm={6} md={4}>
              <MyEventCard
                key={event.eventId}
                id={event.eventId}
                name={event.eventName}
                imgurl={event.eventImage}
                details={event.eventDetails}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default MyEvents;
