import { Button, Container } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CenteredTabs from "./components/CenteredTabs";
import { display, padding } from "@mui/system";
import NavBar from "./components/NavBar";

function AllEvents() {
  return (
    <main>
      <NavBar />
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
