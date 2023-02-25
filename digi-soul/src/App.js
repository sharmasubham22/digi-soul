import { Container } from "@mui/system";
import AllEvents from "./AllEvents";
import NavBar from "./components/NavBar";
import EventDetails from "./EventDetails";

function App() {
  return (
    <Container>
      <AllEvents />
      {/* <EventDetails /> */}
    </Container>
  );
}

export default App;
