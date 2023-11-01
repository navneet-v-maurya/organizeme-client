import { useState } from "react";
import Modal from "../../../common/modals/Modal";

const TaskHeader = () => {
  const [modelOpened, setModalOpened] = useState(false);
  return (
    <div
      className="horizontal-container"
      style={{ height: "10%", justifyContent: "space-between" }}
    >
      <div>Date Picker</div>
      {/* <button
        style={{
          borderRadius: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "rgb(39, 55, 77)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
        }}
        onClick={() => setModalOpened(true)}
      >
        Add Task
      </button> */}

      <Modal />
    </div>
  );
};

export default TaskHeader;
