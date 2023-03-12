import { createBrowserRouter } from "react-router-dom";
import Editor from "../components/Editor";
import Layout from "../components/layout";
import Authors from "../pages/Authors";
import { AllAuthors } from "../pages/Authors/AllAuthors";
import Author from "../pages/Authors/Author";
import Books from "../pages/Books";
import { AllBooks } from "../pages/Books/AllBooks";
import Book from "../pages/Books/Book";
import Error from "../pages/Error";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    index: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
        children: [
          {
            index: true,
            element: <AllBooks />,
          },
          {
            path: ":id",
            element: <Book />,
          },
        ],
      },
      {
        path: "/authors",
        element: <Authors />,
        children: [
          {
            index: true,
            element: <AllAuthors />,
          },
          {
            path: ":id",
            element: <Author />,
          },
        ],
      },
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
]);

export default router;
