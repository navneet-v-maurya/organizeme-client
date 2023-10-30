import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CircularLoading from "./components/common/Loaders/CirularLoading";
import NotFound from "./components/screens/notfound/NotFound";
import { toast } from "react-toastify";

const Auth = React.lazy(() => import("./components/screens/auth/Auth"));
const Home = React.lazy(() => import("./components/screens/Home"));

const SideBar = React.lazy(() => import("./components/common/headers/SideBar"));
const Header = React.lazy(() => import("./components/common/headers/Header"));

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (err) {
      toast.error(err);
    }
  }, [err]);

  return loading ? (
    <CircularLoading />
  ) : (
    <Suspense fallback={<CircularLoading />}>
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
                <div style={{ display: "flex" ,backgroundColor:"rgb(15, 18, 63)"}}>
                  <SideBar />
                  <div style={{ display: "flex" ,flexDirection:"column",width:"100%"}}>
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
