import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import("../pages/auth/Login"));
const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Profile = lazy(() => import("../pages/profile/Profile"));

const Routes = () => {
  const isAuthenticated = true;

  const route = useRoutes([
    {
      path: "/",
      element: <Navigate to={"/dashboard"} />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated} path={"/auth"}>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <ProtectedRoute isAuthenticated={!isAuthenticated} path={"/dashboard"}>
          <Login />
        </ProtectedRoute>
      ),
      children: [],
    },
    {
      path: "*",
      element: (
        <>
          <div>Not Found</div>
        </>
      ),
    },
  ]);
  return route;
};

export default Routes;
