import React from "react";
import { useNavigate } from "react-router-dom";

const LoggedIn: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome! You are logged in.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoggedIn;
