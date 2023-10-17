import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";

const Dashboard = React.lazy(
  () => import("./components/screens/dashboard/Dashboard")
);
const Auth = React.lazy(() => import("./components/screens/auth/Auth"));
const Chat = React.lazy(() => import("./components/screens/chat/Chat"));

const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
