import React from "react";

const CircularLoading: React.FC = () => {
  return <div className="loading" style={Styles.loading}></div>;
};

const Styles: Record<string, React.CSSProperties> = {
  loading: {
    border: "4px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "50%",
    borderTop: "4px solid #000",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default CircularLoading;
