import React from "react";
import pattern8 from "../../assets/images/bg-pattern-about-2-contact-1.svg";
import pattern9 from "../../assets/images/bg-pattern-home-4-about-3.svg";
import avatarnikita from "../../assets/images/avatar-nikita.jpg";
import avatarchristian from "../../assets/images/avatar-christian.jpg";
import avatarcruz from "../../assets/images/avatar-cruz.jpg";
import avatardrake from "../../assets/images/avatar-drake.jpg";
import avatargriffin from "../../assets/images/avatar-griffin.jpg";
import iconptwitter from "../../assets/images/icon-twitter.svg";
import iconplinkedin from "../../assets/images/icon-linkedin.svg";
import iconcross from "../../assets/images/icon-cross.svg";

import styles from "./Directors.module.scss";

const Directors = () => {
  return (
    <div className={styles.directorsContainer}>
      <img src={pattern8} alt="pattern8" />
      <img src={pattern9} alt="pattern9" />
      <h2>Meet the directors</h2>
      <ul>
        <li>
          <img
            className={styles.avatar}
            src={avatarnikita}
            alt="avatarnikita"
          />
          <p>Nikita Marks</p>
          <div className={styles.cross}>
            <img src={iconcross} alt="iconcross" />
          </div>
        </li>
        <li>
          <img
            className={styles.avatar}
            src={avatarchristian}
            alt="avatarchristian"
          />
          <p>Cristian Duncan</p>
          <div className={styles.cross}>
            <img src={iconcross} alt="iconcross" />
          </div>
        </li>
        <li>
          <img className={styles.avatar} src={avatarcruz} alt="avatarcruz" />
          <p>Cruz Hamer</p>
          <div className={styles.cross}>
            <img src={iconcross} alt="iconcross" />
          </div>
        </li>
        <li>
          <img className={styles.avatar} src={avatardrake} alt="avatardrake" />
          <p>Drake Heaton</p>
          <div className={styles.cross}>
            <img src={iconcross} alt="iconcross" />
          </div>
        </li>
        <li>
          <img
            className={styles.avatar}
            src={avatargriffin}
            alt="avatargriffin"
          />
          <p>Griffin Wise</p>
          <div className={styles.cross}>
            <img src={iconcross} alt="iconcross" />
          </div>
        </li>
        <li>
          <p>Aden Allan</p>
          <p>
            “Empowered teams create truly amazing products. Set the north star
            and let them follow it.”
          </p>
          <div className={styles.socialIcon}>
            <img src={iconptwitter} alt="iconpintwitter" />
            <img src={iconplinkedin} alt="iconplinkedin" />
          </div>
          <div className={styles.cross}>
            <img src={iconcross} alt="iconcross" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Directors;
