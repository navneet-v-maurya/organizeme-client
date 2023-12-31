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

export const delete_my_task = (query: any) => {
  return axios.delete(
    `https://organize-me-server.onrender.com/my_task/delete_my_task${query}`
  );
};

export const update_my_task = (payload: any) => {
  return axios.patch(
    "https://organize-me-server.onrender.com/my_task/update_my_task",
    payload
  );
};
