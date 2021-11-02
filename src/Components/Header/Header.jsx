import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_logo">
        <div className="Header_logo_img">
          <img className="Header_logo_img_i" src="./Images/Logo.png"  alt="header_logo"/>
        </div>
        <div className="Header_logo_text">for today</div>
      </div>
      <div className="Header_menu"></div>
    </div>
  );
};

export default Header;

