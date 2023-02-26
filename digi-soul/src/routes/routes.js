import AllEvents from "../views/AllEvents";
import UpcomingEvents from "../views/UpcomingEvents";
import EventDetails from "../views/EventDetails";
import Reviews from "../views/Reviews";
import ReviewDetails from "../views/ReviewDetails";
import CreateEvent from "../views/CreateEvent";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <h1>Hello Hello!</h1>,
  },
  {
    name: "Products",
    path: "/products",
    element: <h1>Products</h1>,
  },
  {
    name: "Reviews",
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/review/:id",
    element: <ReviewDetails />,
  },
  {
    name: "Blogs",
    path: "/blogs",
    element: <h1>Blogs</h1>,
  },
  {
    name: "Events",
    path: "/events/all",
    element: <AllEvents />,
  },
  {
    path: "/events/upcoming",
    element: <UpcomingEvents />,
  },
  {
    path: "/events/create",
    element: <CreateEvent />,
  },
  {
    path: "/event/:id",
    element: <EventDetails />,
  },
  {
    name: "Insights",
    path: "/insights",
    element: <h1>Insights</h1>,
  },
];

export default routes;
