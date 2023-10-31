const TaskHeader = () => {
  return (
    <div
      className="horizontal-container"
      style={{ height: "10%", justifyContent: "space-between" }}
    >
      <div>Date Picker</div>
      <button
        style={{
          borderRadius: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "rgb(39, 55, 77)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskHeader;
