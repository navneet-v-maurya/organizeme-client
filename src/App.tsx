import React, { Suspense, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CircularLoading from "./components/common/Loaders/CirularLoading";
import NotFound from "./components/screens/notfound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = React.lazy(() => import("./components/screens/auth/Auth"));
const Home = React.lazy(() => import("./components/screens/Home"));

const SideBar = React.lazy(() => import("./components/common/headers/SideBar"));
const Header = React.lazy(() => import("./components/common/headers/Header"));

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // useEffect(() => {
  //   if (err) {
  //     console.log(err);
  //     toast.error(err);
  //   }
  // }, [err]);

  return loading ? (
    <CircularLoading />
  ) : (
    <Suspense fallback={<CircularLoading />}>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <Routes>
        <Route
          path="/"
          element={!user ? <Navigate to="/auth" /> : <Navigate to="/home" />}
        />
        <Route
          path="/auth"
          element={
            !user ? (
              <Auth setErr={setErr} setLoading={setLoading} setUser={setUser} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/home/*"
          element={
            user ? (
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
                    <Home />
                  </div>
                </div>
              </>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
