import React from "react";
import { useAuth } from "./context/AuthContext";

const Logout = () => {
  const { logout, setCurrentUser } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      alert("Sign out success");
      setCurrentUser("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="logout">
      <button
        style={{
          padding: "10px 12px",
          backgroundColor: "hsl(26, 100%, 55%)",
          color: "#fff",
          fontSize: " 12px",
          border: "none",
          borderRadius: "4px",
        }}
        onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
