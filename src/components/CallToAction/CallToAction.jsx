import React from "react";
import pattern6 from "../../assets/images/bg-pattern-home-6-about-5.svg";
import { Link } from "react-router-dom";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <div className={styles.callToActionContainer}>
      <img src={pattern6} alt="pattern6" />
      <h2>Ready to get started?</h2>
      <Link to="/contact">
        <button>contact us</button>
      </Link>
    </div>
  );
};

export default CallToAction;
