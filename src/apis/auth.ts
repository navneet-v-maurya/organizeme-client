import axios from "axios";

export const login = (payload: any) => {
  return axios.post(
    "https://organize-me-server.onrender.com/auth/login",
    payload
  );
};

export const generateOtp = (payload: any) => {
  return axios.post(
    "https://organize-me-server.onrender.com/auth/generate_otp",
    payload
  );
};

export const register = (payload: any) => {
  return axios.post(
    "https://organize-me-server.onrender.com/auth/register",
    payload
  );
};
