import "./Task.css";
import TaskBar from "./taskcomp/TaskBar";
import TaskHeader from "./taskcomp/TaskHeader";

const Task = () => {
  const demotasks = {
    created: [
      {
        _id: "1",
        todo: "Taking dog to park",
        details:
          "I have to take my dog to park so that it does not gets lazy I have to take my dog to park so that it does not gets lazy and fat and fat just by overeating I have to take my dog to park so that it does not gets lazy",
        status: "created",
        start: "2023-01-01T00:00:00.000+00:00",
        end: "2023-01-10T00:00:00.000+00:00",
        createdAt: "2023-10-16T08:49:41.967+00:00",
        updatedAt: "2023-10-16T08:49:41.967+00:00",
      },
      {
        _id: "1",
        todo: "Taking dog to park",
        details:
          "I have to take my dog to park so that it does not gets lazy and fat just by overeating",
        status: "created",
        start: "2023-01-01T00:00:00.000+00:00",
        end: "2023-01-10T00:00:00.000+00:00",
        createdAt: "2023-10-16T08:49:41.967+00:00",
        updatedAt: "2023-10-16T08:49:41.967+00:00",
      },
      {
        _id: "1",
        todo: "Taking dog to park",
        details:
          "I have to take my dog to park so that it does not gets lazy and fat just by overeating",
        status: "created",
        start: "2023-01-01T00:00:00.000+00:00",
        end: "2023-01-10T00:00:00.000+00:00",
        createdAt: "2023-10-16T08:49:41.967+00:00",
        updatedAt: "2023-10-16T08:49:41.967+00:00",
      },
    ],
    progress: [
      {
        _id: "1",
        todo: "Taking dog to park",
        details:
          "I have to take my dog to park so that it does not gets lazy and fat just by overeating",
        status: "created",
        start: "2023-01-01T00:00:00.000+00:00",
        end: "2023-01-10T00:00:00.000+00:00",
        createdAt: "2023-10-16T08:49:41.967+00:00",
        updatedAt: "2023-10-16T08:49:41.967+00:00",
      },
    ],

    completed: [
      {
        _id: "1",
        todo: "Taking dog to park",
        details:
          "I have to take my dog to park so that it does not gets lazy and fat just by overeating",
        status: "created",
        start: "2023-01-01T00:00:00.000+00:00",
        end: "2023-01-10T00:00:00.000+00:00",
        createdAt: "2023-10-16T08:49:41.967+00:00",
        updatedAt: "2023-10-16T08:49:41.967+00:00",
      },
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TaskHeader />
      <div className="task">
        <TaskBar data={demotasks.created} type="Created" />
        <TaskBar data={demotasks.progress} type="In-Progress" />
        <TaskBar data={demotasks.completed} type="Completed" />
      </div>
    </div>
  );
};

export default Task;
