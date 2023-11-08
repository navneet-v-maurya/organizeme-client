import React, { useState } from "react";
import "./Auth.css";
import { toast } from "react-toastify";
import OTP from "./OTP";
import Modal2 from "../../common/modals/Modal2";
import { useDispatch } from "react-redux";
import { login, register, generateOtp } from "../../../apis/auth";
import { setUser, setLoading, setErr } from "../../../redux/slice/Auth_Slice";
import axios from "axios";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  otp: string;
}

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    dispatch(setLoading(true));

    const payload = {
      email: userData.email,
      password: userData.password,
    };

    login(payload)
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setUser(res.data.data));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        toast.error(err.response.data.message);
        setErr(err.response.data.message);
      });
  };

  const hadleGenrateOtp = () => {
    if (userData.password !== userData.confirmPassword) {
      toast.error("Password and confirm pass should match");
      return;
    }

    const payload = {
      email: userData.email,
    };

    setOpen(true);
    generateOtp(payload)
      .then((res: any) => {
        toast.success("Otp sent Successfully!");
      })
      .catch((err: any) => {
        toast.error(err.response.data.message);
      });
  };

  const handleReister = () => {
    dispatch(setLoading(true));

    const payload = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      otp: Number(userData.otp),
    };

    register(payload)
      .then((res: any) => {
        dispatch(setLoading(false));
        dispatch(setUser(res.data.data));
      })
      .catch((err: any) => {
        dispatch(setLoading(false));
        toast.error(err.response.data.message);
        setErr(err.response.data.message);
      });
  };

  const handleReset = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    });
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
          onChange={(e) => {
            setUserData({ ...userData, confirmPassword: e.target.value });
          }}
        />
      )}

      <div className="horizontal-container auth-buttons" style={{ padding: 0 }}>
        {isLogin ? (
          <button className="button auth-button" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <div>
            <button className="button" onClick={hadleGenrateOtp}>
              Register
            </button>
            {open && (
              <Modal2
                open={open}
                htmlContent={
                  <OTP
                    user={userData}
                    setUserData={setUserData}
                    hadleGenrateOtp={hadleGenrateOtp}
                    handleReister={handleReister}
                  />
                }
              />
            )}
          </div>
        )}
        <button className="button  auth-button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <p
        className="auth-p"
        onClick={() => {
          setIsLogin(!isLogin);
          handleReset();
        }}
      >
        {isLogin
          ? "Don't have an Account? Register here"
          : "Already have an Account? Login here"}
      </p>
    </div>
  );
};

export default Auth;
