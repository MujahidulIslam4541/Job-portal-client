import {
    createBrowserRouter,
  } from "react-router-dom";
  import "./index.css";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  export default router;