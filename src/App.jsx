import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

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
      {
        path: "movies/:id",
        element: <MovieDetails />,
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
