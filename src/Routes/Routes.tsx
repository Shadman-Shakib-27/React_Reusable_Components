import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AdminLayout from "../Components/Layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // Index True Means Path (/) Will Be Home
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
  {
    path: "/Admin",
    element: <AdminLayout />,
    children: [
      {
        // Index True Means Path (/) Will Be Element H1.
        index: true,
        element: <h1>This is Admin Dashboard.</h1>,
      },
      {
        path: "add-admin",
        element: <h1>This is Add Admin Page.</h1>,
      },
    ],
  },
]);

export default router;
