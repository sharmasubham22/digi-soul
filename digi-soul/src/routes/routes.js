import AllEvents from "../views/AllEvents";
import EventDetails from "../views/EventDetails";

const routes = [
  {
    path: "/",
    element: <h1>Hello Hello!</h1>,
  },
  {
    path: "/events",
    element: <AllEvents />,
  },
  {
    path: "/event/:id",
    element: <EventDetails />,
  },
];

export default routes;
