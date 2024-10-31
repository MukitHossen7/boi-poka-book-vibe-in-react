import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root/Root";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
