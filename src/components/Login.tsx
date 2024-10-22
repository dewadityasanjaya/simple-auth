import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./FormStyles.css";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaInstagram,
} from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      navigate("/loggedin");
    } else {
      alert("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="form-container"
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={email ? "filled" : ""}
          />
          <label>Email</label>
        </div>

        <div className="input-container password-container">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={password ? "filled" : ""}
            style={{ paddingRight: "40px" }}
          />
          <label>Password</label>
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#666",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="separator">
        <span>or</span>
      </div>

      <div className="social-login-container">
        <button
          className="social-btn google-btn"
          onClick={() => handleSocialLogin("Google")}
        >
          <FaGoogle className="social-icon" /> Login with Google
        </button>
        <button
          className="social-btn facebook-btn"
          onClick={() => handleSocialLogin("Facebook")}
        >
          <FaFacebookF className="social-icon" /> Login with Facebook
        </button>
        <button
          className="social-btn apple-btn"
          onClick={() => handleSocialLogin("Apple")}
        >
          <FaApple className="social-icon" /> Login with Apple
        </button>
        <button
          className="social-btn instagram-btn"
          onClick={() => handleSocialLogin("Instagram")}
        >
          <FaInstagram className="social-icon" /> Login with Instagram
        </button>
      </div>
    </motion.div>
  );
};

export default Login;
