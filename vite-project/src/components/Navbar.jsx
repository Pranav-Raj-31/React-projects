import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/logout",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) { 
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/login");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Mental Health Care</h1>
      </div>
      <div className="navbar-links">
         
          <h4> <Link to="/">Home</Link></h4>
          <h4> <Link to="/Services">Services</Link></h4>
          <h4> <Link to="/Aboutus">About</Link></h4>
          
          <button onClick={handleLogout} className='loginbtn'> Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
