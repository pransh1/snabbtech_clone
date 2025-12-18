import React from "react";
import "../css/Footer.css";
import Logo from "../assets/logo-circle.png";
import Partner1 from "../assets/goodfirms.svg";
import Partner2 from "../assets/topecommerce.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <img src={Logo} alt="SnabbTech" className="footer-logo" />

          <p className="footer-location">
            Location: Mohali, India | Patran, India | Dublin, Ireland |
          </p>
          <p className="footer-location">
            Surrey, Canada | Sharjah, UAE
          </p>

          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaMediumM />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <div>
            <h4>Services</h4>
            <ul>
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>Software Development</li>
            </ul>
          </div>

          <div>
            <h4>Industries</h4>
            <ul>
              <li>Healthcare</li>
              <li>E-Commerce</li>
              <li>Food & Pickup & Delivery</li>
              <li>Home Services / Fitness</li>
              <li>Sports</li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Portfolio</li>
              <li>Partnerships</li>
              <li>About Us</li>
              <li>Email Us: <span>ashish@snabbtech.com</span></li>
              <li>SnabbHealth</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
      </div>
        <div className="footer-right">
          <div className="footer-badges">
            <img src={Partner1} alt="GoodFirms Partner" />
            <img src={Partner2} alt="Top Ecommerce Company" />
          </div>
        </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2025 SnabbTech | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
