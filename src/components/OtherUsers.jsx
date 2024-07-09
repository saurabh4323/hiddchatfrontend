// import React from "react";
// import OtherUser from "./OtherUser";
// import useGetOtherUsers from "../hooks/useGetOtherUsers";
// import { useSelector } from "react-redux";

// const OtherUsers = () => {
//   // my custom hook
//   useGetOtherUsers();
//   const { otherUsers } = useSelector((store) => store.user);
//   if (!otherUsers) return; // early return in react

//   return (
//     <div className="overflow-auto flex-1">
//       {otherUsers?.map((user) => {
//         return <OtherUser key={user._id} user={user} />;
//       })}
//     </div>
//   );
// };

// export default OtherUsers;
import React from "react";
import OtherUser from "./OtherUser";

const OtherUsers = ({ users }) => {
  if (!users || users.length === 0) return <div>No users found.</div>; // Return message if no users to display

  return (
    <div className="overflow-auto flex-1">
      {users.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
