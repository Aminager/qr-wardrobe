import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage.jsx";
import { AdminSignInPage } from "./screens/AdminSignIn.jsx";
import { HomePage } from "./screens/HomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}>
      <Route path="/admin-sign-in" element={<AdminSignInPage />} />
      <Route path="/admin-overview" element={<AdminSignInPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
