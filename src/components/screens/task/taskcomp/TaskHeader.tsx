import { useState } from "react";
import AddTask from "./AddTask";
import Modal2 from "../../../common/modals/Modal2";

const TaskHeader = ({ date, setDate }: any) => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({
    title: "",
    details: "",
    start: "",
    end: "",
  });
  return (
    <div
      className="horizontal-container"
      style={{ width: "100%", height: "10%", justifyContent: "space-between" }}
    >
      <input
        onChange={(e) => {
          setDate(e.target.value);
        }}
        value={date}
        className="input"
        type="date"
      />
      <button
        className="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Task
      </button>
      <Modal2
        htmlContent={<AddTask task={task} setTask={setTask} type="create" />}
        modalOpen={open}
        setModalOpen={setOpen}
      />
    </div>
  );
};

export default TaskHeader;
