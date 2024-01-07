import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <ul>
        <li className={styles.link}>
          <h3>myteam</h3>
          <div>
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
          </div>
        </li>
        <li>
          <button>contact us</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
