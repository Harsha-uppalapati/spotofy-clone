import React from "react";
import "./Footer.css";
import Logo from "./../HeaderComponent/Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <Logo />
        </div>
        <div>
          <ul>
            <li>COMPANY</li>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>COMMUNITIES</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>USEFUL LINKS</li>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div >
          <span>
            <i class="fab fa-instagram fa-3x"></i>
          </span>
          <span>
            <i class="fab fa-twitter fa-3x"></i>
          </span>
          <span>
            <i class="fab fa-facebook fa-3x"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
