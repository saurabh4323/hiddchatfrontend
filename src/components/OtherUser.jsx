// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedUser } from "../redux/userSlice";
// import "./OtherUser.css"; // Import the CSS file

// const OtherUser = ({ user }) => {
//   const dispatch = useDispatch();
//   const { selectedUser, onlineUsers } = useSelector((store) => store.user);
//   const isOnline = onlineUsers?.includes(user._id);

//   const selectedUserHandler = (user) => {
//     dispatch(setSelectedUser(user));
//   };

//   return (
//     <>
//       <div
//         onClick={() => selectedUserHandler(user)}
//         className={`user-container ${
//           selectedUser?._id === user?._id ? "selected" : ""
//         }`}
//       >
//         <div className={`avatar ${isOnline ? "online" : ""}`}>
//           <img src={user.profilePhoto} alt="User profile" />
//         </div>
//         <div className="flex-col">
//           <p>{user?.fullName}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OtherUser;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import "./OtherUser.css";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(user._id);

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      onClick={() => selectedUserHandler(user)}
      className={`user-container ${
        selectedUser?._id === user?._id ? "selected" : ""
      }`}
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <img src={user.profilePhoto} alt="User profile" />
      </div>
      <div className="flex-col">
        <p>{user?.fullName}</p>
      </div>
    </div>
  );
};

export default OtherUser;
