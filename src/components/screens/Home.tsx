import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CircularLoading from "../common/Loaders/CirularLoading";
const Dashboard = React.lazy(() => import("./dashboard/Dashboard"));
const Chat = React.lazy(() => import("./chat/Chat"));
const Task = React.lazy(() => import("./task/Task"));
const GroupTask = React.lazy(() => import("./group_task/GroupTask"));

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
          path="/chat"
          element={
            <Suspense fallback={<CircularLoading />}>
              <Chat />
            </Suspense>
          }
        />

        <Route
          path="/task"
          element={
            <Suspense fallback={<CircularLoading />}>
              <Task />
            </Suspense>
          }
        />

        <Route
          path="/group-task"
          element={
            <Suspense fallback={<CircularLoading />}>
              <GroupTask />
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
