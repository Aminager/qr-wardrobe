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
import { UserTagPage, UserTagPageLoader } from "./screens/UserTagPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      <Route path="/admin-sign-in" element={<AdminSignInPage />} />
      <Route path="/auth/:org/:tagid" element={<UserSignInPage />} />
      <Route
        path="/:org/:tagid"
        element={<UserTagPage />}
        loader={UserTagPageLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
