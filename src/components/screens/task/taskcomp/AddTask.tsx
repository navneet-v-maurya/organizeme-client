import { useState } from "react";
import { add_my_task, update_my_task } from "../../../../apis/my_task";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/slice/Auth_Slice";

const AddTask = ({ task, setTask, type }: any) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setLoading(true);
    if (type === "create") {
      add_my_task(task)
        .then((res) => {
          setLoading(false);
          toast.success("Task added successfully");
          window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
          if (err.response.data.status === 401) {
            dispatch(logout());
          }
        });
    } else {
      const payload = {
        id: task._id,
        title: task.title,
        details: task.details,
        start: task.start,
        end: task.end,
        status: task.status,
      };
      update_my_task(payload)
        .then((res) => {
          setLoading(false);
          toast.success("Task updated successfully");
          window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
          if (err.response.data.status === 401) {
            dispatch(logout());
          }
        });
    }
  };

  const handleReset = () => {
    setTask({ title: "", details: "", start: "", end: "" });
  };

  return (
    <div
      style={{
        height: "32rem",
        width: "29rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h4>{type === "create" ? "Add your Task" : "Update Task"}</h4>
      <input
        onChange={handleChange}
        style={{ width: "90%", backgroundColor: "rgb(221, 230, 237)" }}
        type="text"
        name="title"
        value={task.title}
        className="input"
        placeholder="Title"
        maxLength={50}
      />
      <textarea
        style={{
          width: "90%",
          height: "60%",
          textAlign: "left",
          verticalAlign: "top",
          backgroundColor: "rgb(221, 230, 237)",
        }}
        className="input"
        onChange={handleChange}
        name="details"
        value={task.details}
        placeholder="Description"
      ></textarea>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <label style={{ fontWeight: "bolder" }} htmlFor="Start-date">
            Start date:
          </label>
          <input
            className="input"
            type="date"
            onChange={handleChange}
            name="start"
            value={task.start}
          />
        </div>
        <div>
          <label style={{ fontWeight: "bolder" }} htmlFor="End-date">
            End date:
          </label>
          <input
            className="input"
            type="date"
            onChange={handleChange}
            name="end"
            value={task.end}
          />
        </div>
      </div>
      <div className="horizontal-container">
        {loading ? (
          <div
            style={{ width: "50%", padding: "0", alignItems: "center" }}
            className="vertical-container"
          >
            <div className="button-loading"></div>
          </div>
        ) : (
          <button
            style={{ width: "50%" }}
            onClick={handleClick}
            className="button"
            disabled={loading}
          >
            {type === "create" ? "Add Task" : "Update Task"}
          </button>
        )}
        <button
          style={{ width: "50%" }}
          className="button loading-button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AddTask;
