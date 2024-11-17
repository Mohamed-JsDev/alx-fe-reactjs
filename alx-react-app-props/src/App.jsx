import React from "react";
import UserContext from "./components/UserContext";
import ProfilePage from "./ProfilePage";

const App = () => {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    // Add other user data as needed
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
};

export default App;
