import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CircularLoading from "../common/Loaders/CirularLoading";
const Dashboard = React.lazy(() => import("./dashboard/Dashboard"));

const Home = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<CircularLoading />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<CircularLoading />}>
              <Navigate to="/home/dashboard" />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default Home;
