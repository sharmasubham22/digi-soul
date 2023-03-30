import AllEvents from "../views/events/AllEvents";
import UpcomingEvents from "../views/events/UpcomingEvents";
import EventDetails from "../views/events/EventDetails";
import Reviews from "../views/reviews/Reviews";
import ReviewDetails from "../views/reviews/ReviewDetails";
import CreateEvent from "../views/events/CreateEvent";
import AllProducts from "../views/products/AllProducts";
import Smartphones from "../views/products/Smartphones";
import ProductDetails from "../views/products/ProductDetails";
import Home from "../views/home/Home";
import MyEvents from "../views/events/MyEvents";
import AddUser from "../views/blogs/AddUser";
import BlogList from "../views/blogs/BlogList";
import ViewBlog from '../views/blogs/ViewBlog';
import AddBlog from '../views/blogs/AddBlog';
import SecondBlog from '../views/blogs/SecondBlog';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from "../views/ResetPassword";

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
    element: <BlogList />,
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
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword/>
  }
];

export default routes;
