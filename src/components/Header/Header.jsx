import React from "react";
import styles from "./Header.module.scss";
import pattern1 from "../../assets/images/bg-pattern-home-1.svg";
import pattern2 from "../../assets/images/bg-pattern-home-2.svg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.pattern1} src={pattern1} alt="pattern1" />

      <h1>
        Find the <br />
        best <span>talent</span>
      </h1>
      <div className={styles.rightHeader}>
        <hr />
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <img className={styles.pattern2} src={pattern2} alt="pattern2" />
    </div>
  );
};

export default Header;
