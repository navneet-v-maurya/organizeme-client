import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </>
  );
};

export default Home;
