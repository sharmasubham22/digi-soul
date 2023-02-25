import { Button, Container } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "../components/CenteredTabs";

function AllEvents() {
  return (
    <main>
      <Container maxWidth="l" sx={{ display: "flex", alignItems: "center"}}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create
        </Button>
        <CenteredTabs />
      </Container>
    </main>
  );
}

export default AllEvents;
