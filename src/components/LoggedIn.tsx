import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./FormStyles.css";

const LoggedIn: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="form-container"
    >
      <h2>Welcome! You are logged in.</h2>
      <button onClick={handleLogout}>Logout</button>
    </motion.div>
  );
};

export default LoggedIn;
