// import Signup from "./components/Signup";
// import "./App.css";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import Login from "./components/Login";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import io from "socket.io-client";
// import { setSocket } from "./redux/socketSlice";
// import { setOnlineUsers } from "./redux/userSlice";
// import { BASE_URL } from ".";
// import Footer from "./components/Footer";
// // import ContactUs from "./components/ContactUs";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   // {
//   //   path: "/contact-us", // Add the new route for Contact Us
//   //   element: <ContactUs />,
//   // },
// ]);

// function App() {
//   const { authUser } = useSelector((store) => store.user);
//   const { socket } = useSelector((store) => store.socket);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (authUser) {
//       const socketio = io(`${BASE_URL}`, {
//         query: {
//           userId: authUser._id,
//         },
//       });
//       dispatch(setSocket(socketio));

//       socketio?.on("getOnlineUsers", (onlineUsers) => {
//         dispatch(setOnlineUsers(onlineUsers));
//       });
//       return () => socketio.close();
//     } else {
//       if (socket) {
//         socket.close();
//         dispatch(setSocket(null));
//       }
//     }
//   }, [authUser]);

//   return (
//     <div>
//       <div className="p-4 h-screen flex items-center justify-center">
//         <RouterProvider router={router} />
//       </div>

//       <Footer></Footer>
//     </div>
//   );
// }

//export default App;
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { BASE_URL } from "./config";
import "./App.css";
import "./index.css";

function App() {
  const authUser = useSelector((store) => store.user.authUser);
  const socket = useSelector((store) => store.socket.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socketio = io(`${BASE_URL}`, {
        query: {
          userId: authUser._id,
        },
      });
      dispatch(setSocket(socketio));

      socketio.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      return () => {
        socketio.close();
      };
    } else if (socket) {
      socket.close();
      dispatch(setSocket(null));
    }
  }, [authUser, dispatch]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="main-content p-4 h-screen flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
