import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import "../index.css";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Router is not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
