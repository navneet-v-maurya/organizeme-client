import { CgProfile } from "react-icons/cg";
import { BsFillBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <div
      className="horizontal-container"
      style={{
        alignItems: "center",
        padding: "1rem 0.3rem",
        justifyContent: "space-between",
      }}
    >
      <input
        style={{ width: "60%" }}
        type="search"
        className="input"
        placeholder="Search Task"
      />
      <div
        className="horizontal-container"
        style={{ fontSize: "1.2rem", gap: "2.5rem" }}
      >
        <BsFillBellFill
          style={{ color: " rgb(12, 39, 139)", cursor: "pointer" }}
        />
        <div
          className="horizontal-container"
          style={{ color: "orange", gap: "0.5rem", cursor: "pointer" }}
        >
          <CgProfile />
          <p>Navneet</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
