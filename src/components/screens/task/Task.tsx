import { useEffect, useState } from "react";
import "./Task.css";
import TaskBar from "./taskcomp/TaskBar";
import TaskHeader from "./taskcomp/TaskHeader";
import { get_my_task } from "../../../apis/my_task";
import { toast } from "react-toastify";
import CircularLoading from "../../common/Loaders/CirularLoading";

const Task = () => {
  const [dailyDate, setDailyDate] = useState(null);
  const [start, setStart] = useState();
  const [end, setEnd] = useState(null);
  const [tasks, setTasks] = useState({
    created: [],
    progress: [],
    completed: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let query = "";
    if (dailyDate) {
      query = `?date=${dailyDate}`;
    } else if (start && end) {
      query = `?start=${start}&end=${end}`;
    }
    get_my_task(query)
      .then((res) => {
        setTasks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
      });
  }, [dailyDate, start, end]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <TaskHeader />
      {loading ? (
        <CircularLoading />
      ) : (
        <div className="task">
          <TaskBar data={tasks?.created} type="Created" />
          <TaskBar data={tasks.progress} type="In-Progress" />
          <TaskBar data={tasks.completed} type="Completed" />
        </div>
      )}
    </div>
  );
};

export default Task;
