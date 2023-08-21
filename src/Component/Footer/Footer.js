import React from "react";
import Icon from "../../Screens/Icon";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contai">
        <h1>
          Wajahat<span style={{ color: "#ff4a57" }}>_</span>Ahmed
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* <div className="ic"> <Icon /></div> */}
      </div>

      <div className="copyright">
        Copyright © {new Date().getFullYear()}{" "}
        <span style={{ color: "#ff4a57" }}>
          {" "}
          Wajahat
          <br />{" "}
        </span>{" "}
        Made with ❤️ by Wajahat Ahmed
      </div>
    </div>
  );
};

export default Footer;
