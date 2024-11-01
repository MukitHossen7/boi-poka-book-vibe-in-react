import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ListedBook from "../ListedBook/ListedBook";
import PagesToRead from "../PagesToRead/PagesToRead";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../BookDetails/BookDetails";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/listBooks",
          element: <ListedBook></ListedBook>,
        },
        {
          path: "/pagesRead",
          element: <PagesToRead></PagesToRead>,
        },
        {
          path: "/bookDetails/:bookId",
          element: <BookDetails></BookDetails>,
          loader: () => fetch("booksData.json"),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
