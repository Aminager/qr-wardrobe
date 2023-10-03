import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage.jsx";
import { AdminSignInPage } from "./screens/AdminSignInPage.jsx";
import { HomePage } from "./screens/HomePage.jsx";
import { UserSignInPage } from "./screens/UserSignInPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      <Route path="/admin-sign-in" element={<AdminSignInPage />} />
      <Route path="/auth/:org/:tagid" element={<UserSignInPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
