import Modal from "../../../common/modals/Modal";
import AddTask from "./AddTask";

const TaskHeader = () => {
  return (
    <div
      className="horizontal-container"
      style={{ height: "10%", justifyContent: "space-between" }}
    >
      <div>Date Picker</div>
      <Modal buttonName="Add Task" htmlContent={<AddTask />} />
    </div>
  );
};

export default TaskHeader;
