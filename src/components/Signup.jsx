import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../axiosConfig"; // Updated import
import { BASE_URL } from "../config";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/v1/user/register", // No need for full URL since baseURL is set
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="brand">
          <img src="chatlogo.png" alt="" />
          <h1 className="signup-heading">HIDDCHAT</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              placeholder="Full Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="Username"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Confirm Password"
              className="form-input"
            />
          </div>
          <div className="gender-selection">
            <div className="gender-option">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
              />
            </div>
            <div className="gender-option">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            CREATE USER
          </button>
          <p className="login-link">
            ALREADY HAVE AN ACCOUNT?{" "}
            <span>
              <Link to="/login">LOGIN</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
