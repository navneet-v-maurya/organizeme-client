import { CgProfile } from "react-icons/cg";
import { BsFillBellFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state: any) => state.auth);

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
        style={{ width: "60%", backgroundColor: "rgb(221, 230, 237)" }}
        type="search"
        className="input"
        placeholder="Search Task"
      />
      <div
        className="horizontal-container"
        style={{ fontSize: "1.2rem", gap: "2.5rem" }}
      >
        <BsFillBellFill
          style={{ color: "  rgb(39, 55, 77)", cursor: "pointer" }}
        />
        <div
          className="horizontal-container"
          style={{
            color: "rgb(82, 109, 130)",
            fontWeight: "-moz-initial",
            gap: "0.5rem",
            cursor: "pointer",
          }}
        >
          <CgProfile />
          <p>{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
