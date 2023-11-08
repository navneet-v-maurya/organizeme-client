import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("TOKEN", action.payload.accessToken);
      localStorage.setItem("REFRESH_TOKEN", action.payload.refreshToken);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErr: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("activeItem");
    },
  },
});

export const { setUser, setLoading, setErr, clearError, logout } =
  authSlice.actions;
export default authSlice.reducer;
