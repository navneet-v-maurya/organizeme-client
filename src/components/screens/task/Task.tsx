import { useEffect, useState } from "react";
import "./Task.css";
import TaskBar from "./taskcomp/TaskBar";
import TaskHeader from "./taskcomp/TaskHeader";
import { get_my_task } from "../../../apis/my_task";
import { toast } from "react-toastify";
import CircularLoading from "../../common/Loaders/CirularLoading";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slice/Auth_Slice";
import moment from "moment";

const Task = () => {
  const dispatch = useDispatch();
  const [dailyDate, setDailyDate] = useState(moment().format("YYYY-MM-DD"));
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
    }
    get_my_task(query)
      .then((res) => {
        setTasks(res.data.data);
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
      }}
    >
      <TaskHeader date={dailyDate} setDate={setDailyDate} />
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
