import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CircularLoading from "./components/common/Loaders/CirularLoading";
import NotFound from "./components/screens/notfound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Auth = React.lazy(() => import("./components/screens/auth/Auth"));

const Home = React.lazy(() => import("./components/screens/Home"));

const App = () => {
  const { user, loading } = useSelector((state: any) => state.auth);

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
          element={!user ? <Auth /> : <Navigate to="/home" />}
        />
        <Route
          path="/home/*"
          element={user ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
