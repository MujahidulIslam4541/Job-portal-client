import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import "../index.css";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import Jobdetails from "../Pages/Home/JobDetails/Jobdetails";
import PrivetRouter from "./PrivetRouter";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/addJob/AddJob";
import MyPostedJobs from "../Pages/PostedJobs/MyPostedJobs";
// import AllJobs from "../Pages/Home/AllJobs/Alljobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
import AllJobs from "../Pages/Home/AllJobs/AllJobs";

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
          fetch(`https://job-portal-server-two-peach.vercel.app/jobs/${params.id}`),
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
        path: "myApplications",
        element: (
          <PrivetRouter>
            <MyApplication></MyApplication>
          </PrivetRouter>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivetRouter>
            <AddJob></AddJob>
          </PrivetRouter>
        ),
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivetRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivetRouter>
        ),
      },
      {
        path: "allJobs",
        element: (
          <PrivetRouter>
            <AllJobs></AllJobs>
          </PrivetRouter>
        )
      },
      {
        path: "viewApplications/:user_id",
        element: (
          <PrivetRouter>
            <ViewApplications></ViewApplications>
          </PrivetRouter>
        ),
        loader:({params})=>fetch(`https://job-portal-server-two-peach.vercel.app/jobApplications/jobs/${params.user_id}`)
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
