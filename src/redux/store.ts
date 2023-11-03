import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "./slice/Auth_Slice";

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
  preloadedState: initialState,
});

export default store;
