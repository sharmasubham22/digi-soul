import { Button, Container} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "../components/CenteredTabs";
import EventCard from "../components/EventCard";
import eventsData from "../data/upcomingEvents.json";

function UpcomingEvents() {
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
    <main sx={{marginTop:"100px"}}>
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create
        </Button>
        <CenteredTabs />
      </Container>
      <Container
        sx={{
          marginTop: "50px",
          display: "grid",
          gap: "50px 50px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {events}
      </Container>
    </main>
  );
}

export default UpcomingEvents;