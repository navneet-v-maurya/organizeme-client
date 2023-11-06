import { FaTrash, FaEdit } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";
import moment from "moment";

const TaskCard = (props: any) => {
  const handleDelete = () => {};

  const handleEdit = () => {};

  return (
    <div className="task-card">
      <div
        className="horizontal-container"
        style={{ justifyContent: "space-between", marginBottom: "0.5rem" }}
      >
        <h4 style={{ color: "rgb(39, 55, 77)" }}>{props.task.title}</h4>
        <LuMoreVertical
          style={{
            fontSize: "1rem",
            cursor: "pointer",
            color: "rgb(12, 39, 139)",
          }}
        />
      </div>
      <p>{props.task.details}</p>
      <p>Start: {moment(props?.task?.start).format("D MMMM YYYY")}</p>
      <p>End: {moment(props?.task?.end).format("D MMMM YYYY")}</p>
      <p>Created At: {moment(props?.task?.createdAt).format("D MMMM YYYY")}</p>
      <p>Updated At: {moment(props?.task?.updatedAt).format("D MMMM YYYY")}</p>
      <div className="buttons">
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
        <button onClick={handleEdit}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
