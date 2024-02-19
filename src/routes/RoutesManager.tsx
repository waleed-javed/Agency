import { createBrowserRouter } from "react-router-dom";
import Landing from "../layout/Landing";
import { NotFoundPage } from "../pages";
import HomePage from "../pages/home/Home";

const RoutesManager = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default RoutesManager;
