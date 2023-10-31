import TaskCard from "./TaskCard";

const TaskBar = (props: any) => {
  return (
    <div className="task-bar">
      <p className="task-type">{`${props?.type} (${props?.data?.length})`}</p>
      {props?.data?.map((task: any, index: any) => {
        return <TaskCard key={index} task={task} />;
      })}
    </div>
  );
};

export default TaskBar;
