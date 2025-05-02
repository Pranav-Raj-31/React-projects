import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='container-h'>
      <div className="container1">
          <h6>Therapy</h6>
          <h6>Living well</h6>
          <h6>Relationship</h6>
          <h6>Psychology</h6>
          <h6>Trending</h6>
      </div>
      <div className='container2'>
          <h6>Meet Our Review Board</h6>
          <h6>Edition Process</h6>
          <h6>Privacy Policy</h6>
          <h6>Advertice</h6>
          <h6>Advertise</h6>
      </div>
      <div className='container3'>
          <h6>About us</h6>
          <h6>Diversity Pledge</h6>
          <h6>In the News</h6>
          <h6>Terms of service</h6>
          <h6>Contact</h6>
      </div>
      <div className='container4'>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:contact@mentalhealth.com">contact@mentalhealth.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/mentalhealth">@mentalhealth</a></p>
        <p>Phone: 546-895-235</p>
      </div>
      </div>
      <div className='lastcontainer'>
      <p>&copy; 2024 Mental Health Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
       