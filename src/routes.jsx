import { createBrowserRouter } from "react-router";
import {Home, About, Countries} from "./components/pages/index"

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
    path: "/about",
    element: <About/>,
  },
]);