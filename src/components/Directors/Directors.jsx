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


const directorsData = [
  {
    avatar: avatarnikita,
    name: "Nikita Marks",
  },
  {
    avatar: avatarchristian,
    name: "Cristian Duncan",
  },
  {
    avatar: avatarcruz,
    name: "Cruz Hamer",
  },
  {
    avatar: avatardrake,
    name: "Drake Heaton",
  },
  {
    avatar: avatargriffin,
    name: "Griffin Wise",
  },
  {
    name: "Aden Allan",
    quote:
      "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    twitterIcon: iconptwitter,
    linkedinIcon: iconplinkedin,
  },
];

const Directors = () => {
  return (
    <div className={styles.directorsContainer}>
      <img src={pattern8} alt="pattern8" />
      <img src={pattern9} alt="pattern9" />
      <h2>Meet the directors</h2>
      <ul>
        {directorsData.map((director, index) => (
          <li key={index}>
            {director.avatar && (
              <img className={styles.avatar} src={director.avatar} alt={`avatar${index}`} />
            )}
            <p>{director.name}</p>
            {director.quote && <p>{director.quote}</p>}
            {director.twitterIcon && director.linkedinIcon && (
              <div className={styles.socialIcon}>
                <img src={director.twitterIcon} alt="iconpintwitter" />
                <img src={director.linkedinIcon} alt="iconplinkedin" />
              </div>
            )}
            <div className={styles.cross}>
              <img src={iconcross} alt="iconcross" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directors;
