import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import AuthProvide from "./context/AuthProvide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvide>
      <RouterProvider router={router} />
    </AuthProvide>
  </StrictMode>
);
