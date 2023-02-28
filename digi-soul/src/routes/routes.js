import AllEvents from "../views/AllEvents";
import UpcomingEvents from "../views/UpcomingEvents";
import EventDetails from "../views/EventDetails";
import Reviews from "../views/Reviews";
import ReviewDetails from "../views/ReviewDetails";
import CreateEvent from "../views/CreateEvent";
import AllProducts from "../views/AllProducts";
import Smartphones from "../views/Smartphones";
import ProductDetails from "../views/ProductDetails";
import Home from "../views/Home";
import MyEvents from "../views/MyEvents";
import AddUser from '../components/AddUser';
import BlogList from '../components/BlogList';
// import useLocalStorage from '../hooks/useLocalStorage';
import ViewBlog from '../components/ViewBlog';
import AddBlog from '../components/AddBlog';
import SecondBlog from '../components/SecondBlog';


const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "/product/all",
    element: <AllProducts />,
  },
  {
    path: "/product/phones",
    element: <Smartphones />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
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
    path: "/homePage",
    element:<BlogList />,
  },
  {
    path: "/blog1",
    element: <ViewBlog />,
  },
  {
    path: "/secondblog",
    element: <SecondBlog />,
  },
  {
    path: "/addblog",
    element: <AddBlog />,
  },
  {
    path: "/add",
    element: <AddUser />,
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
    path: "/events/myevents",
    element: <MyEvents />,
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
  {
    name: "Support",
    path: "/support",
    element: <h1>Support</h1>,
  },

];

export default routes;
