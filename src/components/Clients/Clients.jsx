import React from 'react';
import pattern10 from "../../assets/images/bg-pattern-about-4.svg";
import vergeIcon from "../../assets/images/logo-the-verge.png";
import jakartaIcon from "../../assets/images/logo-jakarta-post.png";
import gardianIcon from "../../assets/images/logo-the-guardian.png";
import techradarIcon from "../../assets/images/logo-tech-radar.png";
import gadgetsIcon from "../../assets/images/logo-gadgets-now.png";

import styles from "./Clients.module.scss";


const Clients = () => {
    return (
        <div className={styles.clientsContainer}>
            <img src={pattern10} alt="pattern10" />

            <h2>Some of our clients</h2>
            <div className={styles.clientsIcon}>
            <img src={vergeIcon} alt="jakartaIcon" />
            <img src={jakartaIcon} alt="gardianIcon" />
            <img src={gardianIcon} alt="techradarIcon" />
            <img src={techradarIcon} alt="pattern10" />
            <img src={gadgetsIcon} alt="gadgetsIcon" />
            </div>
        </div>
    );
};

export default Clients;