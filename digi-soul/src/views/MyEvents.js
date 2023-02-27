import { Button, Container } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MyEventCard from "../components/MyEventCard";
import eventsData from "../data/events.json";
import EventsGridContainer from "../components/EventsGridContainer";

function MyEvents() {
  const events = eventsData.map((event) => {
    return (
      <MyEventCard
        key={event.eventId}
        id={event.eventId}
        name={event.eventName}
        imgurl={event.eventImage}
        details={event.eventDetails}
      />
    );
  });

  return (
    <Container sx={{ marginTop: "25px"}}>
      <Container maxWidth="l">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/events/create"
        >
          Create
        </Button>
      </Container>
      <EventsGridContainer events={events} />
    </Container>
  );
}

export default MyEvents;
