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
    token: localStorage.getItem("TOKEN") || null,
    refreshToken: localStorage.getItem("REFRESH_TOKEN") || null,
  },
};

const store = configureStore({
  reducer: {
    auth: auth_reducer,
  },
  preloadedState: initialState as any,
});

const token = localStorage.getItem("TOKEN");
const refreshToken = localStorage.getItem("REFRESH_TOKEN");
//const { token, refreshToken } = store.getState().auth;

axios.interceptors.request.use((config) => {
  if (token && refreshToken) {
    config.headers["token"] = token;
    config.headers["refresh-token"] = refreshToken;
  }

  return config;
});

export default store;
