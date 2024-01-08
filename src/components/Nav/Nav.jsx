import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import styles from "./Nav.module.scss";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <img src={logo} alt="team logo" />
          <div className={isMenuOpen ? styles.menuOpen : ''}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">
            <button className={styles.btn}>contact us</button>
          </Link>
        </li>
      </ul>
      <img 
        className={styles.hamburgerIcon} 
        src={hamburgerIcon} 
        alt="menu icon" 
        onClick={toggleMenu} 
      />
     
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <img 
            className={styles.closeIcon} 
            src={closeIcon} 
            alt="close menu" 
            onClick={toggleMenu} 
          />
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">
            <button>contact us</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
