import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CircularLoading from "../common/Loaders/CirularLoading";
import SideBar from "../common/headers/SideBar";
import Header from "../common/headers/Header";
import { useSelector } from "react-redux";

const Dashboard = React.lazy(() => import("./dashboard/Dashboard"));
const Chat = React.lazy(() => import("./chat/Chat"));
const Task = React.lazy(() => import("./task/Task"));
const GroupTask = React.lazy(() => import("./group_task/GroupTask"));

const Home = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 10fr",
          height: "96vh",
          width: "99vw",
        }}
      >
        <SideBar />
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.5rem",
            padding: "0rem 1.5rem",
          }}
        >
          <Header />
          <Routes>
            <Route
              path="/dashboard"
              element={
                user ? (
                  <Suspense fallback={<CircularLoading />}>
                    <Dashboard />
                  </Suspense>
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
            <Route
              path="/chat"
              element={
                user ? (
                  <Suspense fallback={<CircularLoading />}>
                    <Chat />
                  </Suspense>
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />

            <Route
              path="/task"
              element={
                user ? (
                  <Suspense fallback={<CircularLoading />}>
                    <Task />
                  </Suspense>
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />

            <Route
              path="/group-task"
              element={
                user ? (
                  <Suspense fallback={<CircularLoading />}>
                    <GroupTask />
                  </Suspense>
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
            <Route path="/" element={<Navigate to="/home/dashboard" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
