import { Container } from "@mui/material";
import React from "react";

function EventsGridContainer(props) {
  return (
    <Container
      sx={{
        marginTop: "50px",
        display: "grid",
        gap: "50px 50px",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {props.events}
    </Container>
  );
}

export default EventsGridContainer;
