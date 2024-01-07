import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <ul>
        <li className={styles.links}>
          <img src={logo} alt="logo team" />
          <div>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
          </div>
        </li>
        <li>
          <Link to="/contact"><button>contact us</button></Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
