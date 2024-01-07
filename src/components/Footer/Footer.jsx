import React from "react";
import iconfacebook from "../../assets/images/icon-facebook.svg";
import iconpinterest from "../../assets/images/icon-pinterest.svg";
import iconpintwitter from "../../assets/images/icon-twitter.svg";
import logo from "../../assets/images/logo.svg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <img src={logo} alt="logo" />
        <div>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </div>
      </div>
      <ul>
        <li>987 Hillcrest Lane</li>
        <li>Irvine, CA</li>
        <li>California 92714</li>
        <li>Call Us : 949-833-7432</li>
      </ul>

      <div>
        <ul>
          <li>
            <img src={iconfacebook} alt="iconfacebook" />
          </li>
          <li>
            <img src={iconpinterest} alt="iconpinterest" />
          </li>
          <li>
            <img src={iconpintwitter} alt="iconpintwitter" />
          </li>
        </ul>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
