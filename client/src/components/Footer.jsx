import React from "react";
import logo from "../assets/logo.svg";
import twitter from "../assets/twitter-hollow.svg";
import facebook from "../assets/facebook-hollow.svg";
import linkedin from "../assets/linkedin-hollow.svg";
import instagram from "../assets/instagram-hollow.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-bar">
      <ul>
        <li>
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/discover">discover</Link>
        </li>
        <li>
          <Link to="mailto:ecstasyteam9@gmail.com">ecstasyteam9@gmail.com</Link>
        </li>
        <li>
          <Link to="/">
            <img src={instagram} className="f-instagram" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={twitter} className="f-twitter" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={linkedin} className="f-linkedin" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={facebook} className="f-facebook" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
