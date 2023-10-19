import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loading from "./components/common/Loading";
import { connect } from "react-redux";

interface AppProps {
  isLoggedIn: boolean;
}

const Dashboard = React.lazy(
  () => import("./components/screens/dashboard/Dashboard")
);
const Auth = React.lazy(() => import("./components/screens/auth/Auth"));
const Chat = React.lazy(() => import("./components/screens/chat/Chat"));

const App: React.FC<AppProps> = ({ isLoggedIn }) => {
  console.log(isLoggedIn);

  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/auth"
            element={!isLoggedIn ? <Auth /> : <Dashboard />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/auth" />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Auth />}
          />
          <Route path="/chat" element={isLoggedIn ? <Chat /> : <Auth />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
