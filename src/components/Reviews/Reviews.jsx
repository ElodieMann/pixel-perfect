import React from "react";
import pattern4 from "../../assets/images/bg-pattern-home-4-about-3.svg";
import pattern5 from "../../assets/images/bg-pattern-home-5.svg";
import iconquotes from "../../assets/images/icon-quotes.svg";
import avatarkady from "../../assets/images/avatar-kady.jpg";
import avataraiysha from "../../assets/images/avatar-aiysha.jpg";
import avatararthur from "../../assets/images/avatar-arthur.jpg";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <img src={pattern4} alt="pattern4" />
      <img src={pattern5} alt="pattern5" />
      <h2>
        Delivering real results for top <br /> companies. Some of our
        <span> success stories.</span>
      </h2>
      <ul>
        <li>
          <img
            className={styles.iconquotes}
            src={iconquotes}
            alt="iconquotes"
          />
          <p>
            {" "}
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3>Kady Baker</h3>
          <img className={styles.avatar} src={avatarkady} alt="avatarkady" />
        </li>
        <li>
          <img
            className={styles.iconquotes}
            src={iconquotes}
            alt="iconquotes"
          />
          <p>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <h3>Aiysha Reese</h3>
          <img className={styles.avatar} src={avataraiysha} alt="avataraiysha" />
        </li>
        <li>
          <img
            className={styles.iconquotes}
            src={iconquotes}
            alt="iconquotes"
          />
          <p>
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <h3>Arthur Clarke</h3>
          <img className={styles.avatar} src={avatararthur} alt="avatararthur" />
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
