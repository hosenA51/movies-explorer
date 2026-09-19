import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />
      },
    ]
  },
]);

function Router() {

  return (
    <RouterProvider router={router} />
  )
}

export default Router
