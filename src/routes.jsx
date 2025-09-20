import { createBrowserRouter } from "react-router";
import {Home, About, Countries} from "./components/pages/index"
import Details from "./components/pages/details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/countries",
    element: <Countries/>,
  },
  {
    path: "/countries/:name",
    element: <Details/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);