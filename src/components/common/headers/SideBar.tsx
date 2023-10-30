import "./SideBar.css";
import { LuListTodo } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { BsListTask } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [isActive, setIsActive] = useState(1);
  const navigate = useNavigate();

  const sidebar_data = [
    {
      name: "Dashboard",
      id: 1,
      icon: <RxDashboard />,
      navigate: "/home/dashboard",
    },
    {
      name: "Chat",
      id: 2,
      icon: <BsChatLeftText />,
      navigate: "/home/chat",
    },
    {
      name: "Task",
      id: 3,
      icon: <BsListTask />,
      navigate: "/home/task",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-option">
        <LuListTodo />
        <p>Organize-me</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {sidebar_data.map((el) => {
          return (
            <div
              onClick={() => {
                navigate(el.navigate);
                setIsActive(el.id);
              }}
              className={
                isActive === el.id ? "sidebar-option-active" : "sidebar-option"
              }
              key={el.id}
            >
              {el.icon}
              <p>{el.name}</p>
            </div>
          );
        })}
      </div>

      <div className="logout-button sidebar-option-active">
        <AiOutlinePoweroff />
        <p className="logout">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
