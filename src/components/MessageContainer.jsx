import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import "./MessageContainer.css"; // Import the CSS file
import Navbar from "./Navbar";

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <>
      <>
        {selectedUser !== null ? (
          <div className="message-container">
            <div className="header">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
              <div className="profile-info">
                <div className="profile-details">
                  <p>{selectedUser?.fullName}</p>
                </div>
              </div>
            </div>
            <Messages />
            <SendInput />
          </div>
        ) : (
          <div className="centered-message">
            <h1 className="main-text">
              Hello, <span className="user"> {authUser?.fullName} ! </span>
            </h1>
            <h1 className="sub-text">Let's start a Chat</h1>
          </div>
        )}
      </>
    </>
  );
};

export default MessageContainer;
