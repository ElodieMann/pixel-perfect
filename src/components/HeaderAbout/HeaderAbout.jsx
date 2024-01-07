import React from "react";
import pattern7 from "../../assets/images/bg-pattern-about-1-mobile-nav-1.svg";
import styles from "./HeaderAbout.module.scss";

const HeaderAbout = () => {
  return (
    <div className={styles.hearderAboutContainer}>
      <div className={styles.title}>
        <h1>About</h1>
      </div>
      <div>
        <hr />
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our <br/> network of passionate professionals we drive innovation and
          deliver incredible <br/> outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll <br/>bring those teams to you.
        </p>
      </div>

      <img src={pattern7} alt="pattern7" />
    </div>
  );
};

export default HeaderAbout;
