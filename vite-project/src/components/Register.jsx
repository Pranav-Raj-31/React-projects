import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/user/register",
        { username, email, phone, password },
        { withCredentials: true }
      );
      document.cookie = `token=${res.data.token}`;
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response.data); // Set error message from backend response
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <form className="w-full max-w-md" onSubmit={handleSubmit}>
    //     <h2 className="text-2xl font-bold mb-4">Register</h2>
    //     {error && <div className="text-red-500 mb-2">{error}</div>}
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       className="w-full p-2 mb-2 border"
    //     />
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full p-2 mb-2 border"
    //     />
    //     <input
    //       type="phone"
    //       placeholder="Phone"
    //       value={phone}
    //       onChange={(e) => setPhone(e.target.value)}
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
    //       Register
    //     </button>
    //     <p className="mt-4">
    //       Already have an account?{" "}
    //       <Link to="/login" className="text-blue-500">
    //         Login
    //       </Link>
    //     </p>
    //   </form>
    // </div>
    <div className="container-re">
      <form className="form-re" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button-re">
          Register
        </button>
        <p className="re-footer">
          Already have an account? <a href="/login" className="re-link">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;