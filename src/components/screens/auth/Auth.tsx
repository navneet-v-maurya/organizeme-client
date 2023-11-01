import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface MyProps {
  setLoading: any;
  setUser: any;
  setErr: any;
}

const Auth: React.FC<MyProps> = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.setLoading(true);

    if (isLogin) {
      const payload = {
        email: userData.email,
        password: userData.password,
      };
      console.log(payload);
      axios
        .post("https://organize-me-server.onrender.com/auth/login", payload)
        .then((res: any) => {
          props.setLoading(false);
          props.setUser(res.data.data);
        })
        .catch((err: any) => {
          props.setLoading(false);
          props.setErr(err.message);
        });
    } else {
      if (userData.password !== userData.confirmPassword) {
        props.setLoading(false);
        props.setErr("Passwords do not match");
        return;
      }

      const payload = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      };

      axios
        .post("https://organize-me-server.onrender.com/auth/register", payload)
        .then((res: any) => {
          console.log(res.data.data);
          props.setLoading(false);
          props.setUser(res.data.data);
        })
        .catch((err: any) => {
          props.setLoading(false);
          props.setErr(err.message);
        });
    }
  };

  const handleReset = () => {
    setUserData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="vertical-container auth">
      {!isLogin && (
        <input
          className="input"
          placeholder="Name"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      )}

      <input
        className="input"
        placeholder="Email"
        type="email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />

      <input
        className="input"
        placeholder="Password"
        type="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />

      {!isLogin && (
        <input
          className="input"
          placeholder="Confirm Password"
          type="password"
          value={userData.confirmPassword}
          onChange={(e) =>
            setUserData({ ...userData, confirmPassword: e.target.value })
          }
        />
      )}

      <div className="horizontal-container" style={{ padding: 0 }}>
        <button className="button auth-button" onClick={handleFormSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>
        <button className="button  auth-button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <p className="auth-p" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an Account? Register here"
          : "Already have an Account? Login here"}
      </p>
    </div>
  );
};

export default Auth;
