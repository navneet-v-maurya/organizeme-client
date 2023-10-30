import "./SideBar.css"
import { TiHeadphones } from "react-icons/ti"
import { BsChatLeftText } from "react-icons/bs"
import { RxDashboard } from "react-icons/rx"
import { BsListTask } from "react-icons/bs"
import{AiOutlinePoweroff} from 'react-icons/ai'
const SideBar = () => {
  return (
    <div className="side">
      <div className="logo">
        <div className="icon">
          <TiHeadphones />
        </div>
        <div >Comapnyname</div>
      </div>

      <div className="sidebar-link">
        <div className="icon">
          <RxDashboard />
        </div>
        <div className="text">Dashboard</div>
      </div>

      <div className="sidebar-link">
        <div className="icon">
          <BsChatLeftText />
        </div>
        <div className="chat">Chat</div>
      </div>

      <div className="sidebar-link">
        <div className="icon">
          <BsListTask />
        </div>
        <div className="chat">Task</div>
      </div>

      <div className="sidebar-link">
        <div className="icon">
          <AiOutlinePoweroff />
        </div>
        <div className="logout">Logout</div>
      </div>
    </div>
  )
}

export default SideBar
// 1. Dashboard.

// 2. Chat

// 3. Tasks

// 4. Logout
