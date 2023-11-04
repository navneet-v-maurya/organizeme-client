import axios from "axios";

export const add_my_task = (payload: any) => {
  return axios.post(
    "https://organize-me-server.onrender.com/my_task/add_my_task",
    payload
  );
};
