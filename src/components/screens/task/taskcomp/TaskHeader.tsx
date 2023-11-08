import { useState } from "react";
import CustomDatePicker from "../../../common/dates/DatePicker";
import AddTask from "./AddTask";
import Modal2 from "../../../common/modals/Modal2";

const TaskHeader = () => {
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
      <CustomDatePicker />
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
