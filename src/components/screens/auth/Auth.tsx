import React, { useState } from "react";
import "./Auth.css";
import OtpModal from "../../common/OtpModel";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    setOtpModalOpen(true);
    console.log(userData);
  };

  const handleLogin = () => {
    console.log(userData);
  };

  const handleReset = () => {
    setUserData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="auth-box">
        {isLogin ? (
          <>
            <p>Login</p>
            <input
              name="email"
              onChange={handleChange}
              value={userData.email}
              className="input"
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onChange={handleChange}
              value={userData.password}
              className="input"
              type="password"
              placeholder="Password"
            />
          </>
        ) : (
          <>
            <p>Register</p>
            <input
              name="name"
              onChange={handleChange}
              value={userData.name}
              className="input"
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              onChange={handleChange}
              value={userData.email}
              className="input"
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onChange={handleChange}
              value={userData.password}
              className="input"
              type="password"
              placeholder="Password"
            />
            <input
              name="confirmPassword"
              onChange={handleChange}
              value={userData.confirmPassword}
              className="input"
              type="password"
              placeholder="Confirm Password"
            />
          </>
        )}

        <div className="button-container">
          <button
            className="button"
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? "Login" : "Register"}
          </button>
          <button onClick={handleReset} className="button secondary">
            Reset
          </button>
        </div>
        <p
          className="toggle-auth"
          onClick={() => {
            handleReset();
            setIsLogin(!isLogin);
          }}
        >
          {isLogin
            ? "Don't have an Account? Register"
            : "Already have an Account? Login"}
        </p>
      </div>
      <OtpModal
        isOpen={otpModalOpen}
        onClose={() => {
          setOtpModalOpen(false);
        }}
      />
    </div>
  );
};

export default Auth;
