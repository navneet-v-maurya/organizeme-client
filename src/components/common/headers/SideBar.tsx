import "./SideBar.css";
import { LuListTodo } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { BsListTask } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slice/Auth_Slice";

const SideBar = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(
    +(localStorage.getItem("activeItem") || 1)
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activeItem", isActive.toString());
  }, [isActive]);

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
      name: "My Task",
      id: 3,
      icon: <BsListTask />,
      navigate: "/home/task",
    },
    {
      name: "Group Task",
      id: 4,
      icon: <HiOutlineUserGroup />,
      navigate: "/home/group-task",
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

      <div
        onClick={() => {
          dispatch(logout());
        }}
        className="logout-button sidebar-option-active"
      >
        <AiOutlinePoweroff />
        <p className="logout">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
