import React, { useContext } from "react";
import UserContext from "../UserContext";

const UserDetails = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Render other user details as needed */}
    </div>
  );
};

export default UserDetails;
