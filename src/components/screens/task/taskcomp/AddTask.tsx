import { useState } from "react";
import { add_my_task } from "../../../../apis/my_task";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });
  const handleChange = (e: any) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    add_my_task(task)
      .then((res) => {
        toast.success("Task added successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
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
      <h4>Add your Task</h4>
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
        name="description"
        value={task.description}
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
      <button onClick={handleClick} className="button">
        Add task
      </button>
    </div>
  );
};

export default AddTask;
