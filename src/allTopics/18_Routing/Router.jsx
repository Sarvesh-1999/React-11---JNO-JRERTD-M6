import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);