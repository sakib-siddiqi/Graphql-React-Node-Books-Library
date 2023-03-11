import { createBrowserRouter } from "react-router-dom";
import Editor from "./components/Editor";
import Layout from "./components/layout";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    index: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
]);

export default router;
