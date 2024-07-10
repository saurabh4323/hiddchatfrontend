import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { BASE_URL } from "../config";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Submitting login form with:", user); // Check if this log appears
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("Login response:", res.data); // Check if this log appears
      navigate("/"); // Redirect after successful login
      dispatch(setAuthUser(res.data)); // Dispatch action to set user data in Redux
      toast.success("Login successful");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="brand">
          <img src="chatlogo.png" alt="Chat Logo" />
          <h1 className="signup-heading">HIDDCHAT</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="input"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
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
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
