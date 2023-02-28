import { Button, Container, Grid } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "../components/CenteredTabs";
import EventCard from "../components/EventCard";
import eventsData from "../data/events.json";

function AllEvents() {
  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/events/create"
        >
          Create
        </Button>
        <CenteredTabs />
      </Container>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={8}>
          {eventsData.map((event) => (
            <Grid item key={event.eventId} xs={12} sm={6} md={4}>
              <EventCard
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

export default AllEvents;
