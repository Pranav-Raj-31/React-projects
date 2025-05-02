
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Mooddetectionform from "./components/Mooddetectionform";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Aboutus from "./components/Aboutus";
import Overthinking from "./components/Overthinking";
import Tiredmind from "./components/Tiredmind";
import Absentmind from "./components/Absentmind";
import Depression from "./components/Depression";
import Insomnia from "./components/Insomnia";
import ADHD from "./components/ADHD";
import Anxiety from "./components/Anxiety";
import OCD from "./components/OCD";
import Contact from "./components/Contact";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && 
        <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Overthinking" element={<Overthinking />} />
        <Route path="/Tiredmind" element={<Tiredmind />} />
        <Route path="/Absentmind" element={<Absentmind />} />
        <Route path="/Depression" element={<Depression />} />
        <Route path="/Insomnia" element={<Insomnia />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ADHD" element={<ADHD />} />
        <Route path="/Anxiety" element={<Anxiety />} />
        <Route path="/OCD" element={<OCD />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/register" && 
        <Footer /> }
    </div>
  );
}

export default App;

