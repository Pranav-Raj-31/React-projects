import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/user/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 400) {
        toast.error("Invalid Credentials", {
          position: "top-center",
        });
        return;
      }

      document.cookie = `token=${res.data.token}`;
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error("Invalid Credentials", {
          position: "top-center",
        });
      } else {
        toast.error("An error occurred. Please try again later.", {
          position: "top-center",
        });
      }
      console.error(err);
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <form className="w-full max-w-md" onSubmit={handleSubmit}>
    //     <h2 className="text-2xl font-bold mb-4">Login</h2>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full p-2 mb-2 border"
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       className="w-full p-2 mb-2 border"
    //     />
    //     <button type="submit" className="w-full bg-blue-500 text-white py-2">
    //       Login
    //     </button>
    //     <p className="mt-4">
    //       Don't have an account?{" "}
    //       <Link to="/register" className="text-blue-500">
    //         Register an account
    //       </Link>
    //     </p>
    //   </form>
    // </div>
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="lo-button">
          Login
        </button>
        <p className="lo-footer">
          Don't have an account? <a href="/register" className="lo-link">Register an account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;