import { FaTrash, FaEdit } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";
import moment from "moment";
import { useState } from "react";
import { delete_my_task } from "../../../../apis/my_task";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/slice/Auth_Slice";

const TaskCard = (props: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    const query = `?id=${props.task._id}`;
    delete_my_task(query)
      .then((res) => {
        setLoading(false);
        toast.success("Tasl deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
        if (err.response.data.status === 401) {
          dispatch(logout());
        }
      });
  };

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
        {loading ? (
          <div style={{ padding: "0" }} className="vertical-container">
            <div
              className="button-loading"
              style={{
                width: "20px",
                height: "20px",
              }}
            ></div>
          </div>
        ) : (
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
        )}
        <button onClick={handleEdit}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
