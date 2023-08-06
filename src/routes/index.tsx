import { Navigate, createHashRouter } from "react-router-dom";
import NavBar from "../layout/navbar";
import HomePage from "../pages/homePage";

const allRoutes = createHashRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        errorElement: <h1>error</h1>,
        children: [
          { path: "/", element: <Navigate to="home" /> },
          { path: "home", element: <HomePage /> },
          { path: "*", element: <h1>error</h1> },
        ],
      },
    ],
  },
]);

export default allRoutes;
