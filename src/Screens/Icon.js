import React from "react";
import "../Component/Footer/footer.css";
import "./home.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaGithub,
} from "react-icons/fa";

const Icon = () => {
  return (
    <div id="icon">
      <ul className="icons">
        <a
          href="https://www.facebook.com/profile.php?id=100009959528790"
          target="_blank"
        >
          <li className="fb">
            <FaFacebookF />
          </li>
        </a>
        <li className="twi">
          <FaTwitter />
        </li>
        <li className="insta">
          <FaInstagram />
        </li>
        <li className="google">
          <FaGooglePlusG />
        </li>

        <a href="https://github.com/Mudassir-jamal" target="_blank">
          <li className="github">
            <FaGithub />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Icon;
