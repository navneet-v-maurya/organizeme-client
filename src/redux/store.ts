import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "./slice/Auth_Slice";
import axios from "axios";

const loadUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialState = {
  auth: {
    user: loadUser(),
    isAuthenticated: !!loadUser(),
    loading: false,
    error: null,
  },
};

const store = configureStore({
  reducer: {
    auth: auth_reducer,
  },
  preloadedState: initialState as any,
});

axios.interceptors.request.use((config) => {
  const user = loadUser();

  if (user) {
    config.headers["token"] = user.accessToken || null;
    config.headers["refresh-token"] = user.refreshToken || null;
  }

  return config;
});

export default store;
