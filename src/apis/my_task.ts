import axios from "axios";

export const add_my_task = (payload: any) => {
  return axios.post(
    "https://organize-me-server.onrender.com/my_task/add_my_task",
    payload
  );
};

export const get_my_task = (query: any) => {
  return axios.get(
    `https://organize-me-server.onrender.com/my_task/get_my_task${query}`
  );
};
