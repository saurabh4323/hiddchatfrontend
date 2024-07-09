// import React, { useState } from "react";
// import { BiSearchAlt2 } from "react-icons/bi";
// import OtherUsers from "./OtherUsers";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setAuthUser,
//   setOtherUsers,
//   setSelectedUser,
// } from "../redux/userSlice";
// import { setMessages } from "../redux/messageSlice";
// import { BASE_URL } from "..";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [search, setSearch] = useState("");
//   const { otherUsers } = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
//       navigate("/login");
//       toast.success(res.data.message);
//       dispatch(setAuthUser(null));
//       dispatch(setMessages(null));
//       dispatch(setOtherUsers(null));
//       dispatch(setSelectedUser(null));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();
//     const filteredUsers = otherUsers.filter((user) =>
//       user.fullName.toLowerCase().includes(search.toLowerCase())
//     );
//     if (filteredUsers.length > 0) {
//       dispatch(setOtherUsers(filteredUsers));
//     } else {
//       toast.error("User not found!");
//       dispatch(setOtherUsers([])); // Optionally clear other users if no match found
//     }
//   };

//   return (
//     <div className="sidebar-container">
//       <form onSubmit={searchSubmitHandler} className="search-form">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-input"
//           type="text"
//           placeholder="Search..."
//         />
//         <button type="submit" className="search-button">
//           <BiSearchAlt2 className="w-6 h-6" />
//         </button>
//       </form>
//       <div className="divider"></div>
//       <OtherUsers />
//       <div className="logout-button-container">
//         <button onClick={logoutHandler} className="logout-button">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthUser,
  setOtherUsers,
  setSelectedUser,
} from "../redux/userSlice";
import { setMessages } from "../redux/messageSlice";
import { BASE_URL } from "..";
import "./Sidebar.css";
import useGetOtherUsers from "../hooks/useGetOtherUsers";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useGetOtherUsers(); // Fetch users when the component mounts

  useEffect(() => {
    if (otherUsers) {
      // Filter users based on the search input
      setFilteredUsers(
        otherUsers.filter((user) =>
          user.fullName.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredUsers([]);
    }
  }, [search, otherUsers]);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      dispatch(setMessages(null));
      dispatch(setOtherUsers([])); // Set to empty array on logout
      dispatch(setSelectedUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sidebar-container">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="search-button">
          <BiSearchAlt2 className="w-6 h-6" />
        </button>
      </form>
      <div className="divider"></div>
      <OtherUsers users={filteredUsers} />
      <div className="logout-button-container">
        <button onClick={logoutHandler} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
