import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import "../index.css";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import Jobdetails from "../Pages/Home/JobDetails/Jobdetails";
import PrivetRouter from "./PrivetRouter";
import JobApply from "../Pages/JobApply/JobApply";

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
        path: "jobs/:id",
        element: (
          <PrivetRouter>
            <Jobdetails></Jobdetails>,
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivetRouter>
            <JobApply></JobApply>
          </PrivetRouter>
        ),
       
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
