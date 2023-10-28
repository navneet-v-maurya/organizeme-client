import React, { useState } from "react";
import axios from "axios";

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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {!isLogin && (
          <div>
            <label>
              Name:
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </label>
            <br />
          </div>
        )}

        <label>
          Email:
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </label>
        <br />

        {!isLogin && (
          <div>
            <label>
              Confirm Password:
              <input
                type="password"
                value={userData.confirmPassword}
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
              />
            </label>
            <br />
          </div>
        )}

        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
