import React from "react";
import { useAuth } from "./context/AuthContext";

const Logout = () => {
  const { logout, setCurrentUser } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      console.log("Sign out success");
      setCurrentUser("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="logout" style={{ padding: "20px" }}>
      <button
        style={{
          padding: "10px 10px",
          backgroundColor: "green",
          color: "#fff",
          fontSize: " 20px",
          border: "none",
          borderRadius: "10px",
        }}
        onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
