import React from "react";
import styles from "./Main.module.scss";
import pattern3 from "../../assets/images/bg-pattern-home-3.svg";
import iconperson from "../../assets/images/icon-person.svg";
import iconcog from "../../assets/images/icon-cog.svg";
import iconchart from "../../assets/images/icon-chart.svg";

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <hr />
      <img className={styles.pattern3} src={pattern3} alt="pattern3" />
      <div className={styles.mainLayout}>
        <div className={styles.leftMain}>
          <h2>Build & manage <br /> distributed teams <br /> like no one else.</h2>
        </div>
        <ul className={styles.rightMain}>
          <li>
            <img
              className={styles.iconperson}
              src={iconperson}
              alt="iconperson"
            />
            <div>
              <h3>Experienced Individuals</h3>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </li>
          <li>
            <img className={styles.iconcog} src={iconcog} alt="iconcog" />
            <div>
              <h3>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </li>
          <li>
            <img className={styles.iconchart} src={iconchart} alt="iconchart" />
            <div>
              <h3>Enhanced Productivity</h3>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
