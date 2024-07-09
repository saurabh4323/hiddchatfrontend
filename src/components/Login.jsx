import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { BASE_URL } from "..";
import "../hooks/Login.css";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="brand">
          {" "}
          <img src="chatlogo.png" alt=""></img>
          <h1 className="signup-heading">HIDDCHAT</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="input"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text"> </span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" className="btn">
              LOGIN HERE
            </button>
          </div>
          <p className="link-text">
            Don't have an account?{" "}
            <span>
              {" "}
              <Link to="/signup"> signup </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
