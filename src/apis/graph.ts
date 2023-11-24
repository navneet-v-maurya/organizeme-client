import axios from "axios";

export const my_task_graph_data = (query: any) => {
  return axios.get(
    `https://organize-me-server.onrender.com/graph_data/my_task_graph_data${query}`
  );
};
