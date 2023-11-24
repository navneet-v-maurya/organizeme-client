import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Piechart from "../../common/charts/Piechart";
import Table from "../../common/tables/Table";
import { useDispatch } from "react-redux";
import moment from "moment";
import { my_task_graph_data } from "../../../apis/graph";
import { logout } from "../../../redux/slice/Auth_Slice";
import { toast } from "react-toastify";
import CircularLoading from "../../common/Loaders/CirularLoading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [dailyDate, setDailyDate] = useState(moment().format("YYYY-MM-DD"));
  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState({});

  const handleCellClick = (tasks: any) => {
    setSelectedTasks(tasks);
  };

  useEffect(() => {
    setLoading(true);
    let query = "";
    if (dailyDate) {
      query = `?date=${dailyDate}`;
    }
    my_task_graph_data(query)
      .then((res) => {
        setTasks(res.data.data);
        setSelectedTasks(res.data.data.graph_data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
        if (err.response.data.status === 401) {
          dispatch(logout());
        }
      });
  }, [dailyDate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        gap: "0.5rem",
      }}
    >
      <div className="horizontal-container">
        <input
          className="input"
          type="date"
          value={dailyDate}
          onChange={(e) => {
            setDailyDate(e.target.value);
          }}
        />
      </div>
      {loading ? (
        <CircularLoading />
      ) : (
        <div className="vertical-container" style={{}}>
          <div className="pie-chart">
            <Piechart data={tasks} onCellClick={handleCellClick} />
            <Table tasks={selectedTasks} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
