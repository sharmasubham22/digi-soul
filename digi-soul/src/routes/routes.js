import AllEvents from "../views/AllEvents";
import EventDetails from "../views/EventDetails";

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
    element: <h1>Reviews</h1>,
  },
  {
    name: "Blogs",
    path: "/blogs",
    element: <h1>Blogs</h1>,
  },
  {
    name: "Events",
    path: "/events",
    element: <AllEvents />,
  },
  {
    path: "/event/:id",
    element: <EventDetails />,
  },
  {
    name: "Insights",
    path: "/insights",
    element: <h1>Insights</h1>,
  }
];

export default routes;
