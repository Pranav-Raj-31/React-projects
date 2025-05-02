import React from "react";
import { Link } from "react-router-dom";
import {FaPhone,FaEnvelope,FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
          <div className="text-center">
            <p>Contact Us</p>
          </div>

          <div className="box">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="form"
            >
              <input
                type="hidden"
                name="access_key"
                value="0406ef18-6d71-44d1-995a-7ad895ffbe7f"
              />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mail"

                />
                <input
                type="number"
                name="number"
                placeholder="phone no."
                className="phone"

              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="sub"

              />

              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="textarea"
              ></textarea>

              <div className="subbtn">
                <input
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
            
            <div className="details">
                <div className="call">
                    <a href="tel:+1234567890">                    
                  <FaPhone size={30} color="#25D366" />
                     </a>
                 <p>call:<br></br>123456789</p>
                 </div>
                 <div className="call">
                 <a href="mailto:someone@example.com">
        <FaEnvelope size={30} color="#D44638" />
      </a>
                 <p>Email:<br></br>utsav123@gmail.com</p>
                 </div>
                 <div className="call">
                 <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt size={30} color="#FF0000" />
      </a>
                 <p>Location:<br></br>Paladi,Ahmedabad-25462</p>
                 </div>

                 <div className="follow">
                 <h4>Follow us on Social Media</h4>
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="#4267B2" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E1306C" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} color="#1DA1F2" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} color="#FF0000" />
      </a>
                 </div>
                 
                
            </div>





   </div>
   </div>
    </>
  );
};

export default Contact;