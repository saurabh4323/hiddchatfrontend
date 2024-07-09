import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./HomePage.css";

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]); // Update dependency array

  return (
    <div className="home">
      <Navbar />
      <div className="custom-container">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;
