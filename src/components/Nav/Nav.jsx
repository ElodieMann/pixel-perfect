import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <ul>
        <li>
          <img src={logo} alt="logo team" />
          <div>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">
            <button>contact us</button>
          </Link>
        </li>
            <img className={styles.hamburgerIcon} src={hamburgerIcon} alt="hamburgerIcon" />
      </ul>
    </div>
  );
};

export default Nav;
