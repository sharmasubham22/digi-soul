import { Button, Container } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "../components/CenteredTabs";
import EventCard from "../components/EventCard";
import eventsData from "../data/events.json";
import EventsGridContainer from "../components/EventsGridContainer";

function AllEvents() {
  const events = eventsData.map((event) => {
    return (
      <EventCard
        key={event.eventId}
        id={event.eventId}
        name={event.eventName}
        imgurl={event.eventImage}
        details={event.eventDetails}
      />
    );
  });

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
      <EventsGridContainer events={events} />
    </Container>
  );
}

export default AllEvents;
