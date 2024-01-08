import React from "react";
import patern11 from "../../assets/images/bg-pattern-about-2-contact-1.svg";
import patern12 from "../../assets/images/bg-pattern-contact-2.svg";
import iconperson from "../../assets/images/icon-person.svg";
import iconcog from "../../assets/images/icon-cog.svg";
import iconchart from "../../assets/images/icon-chart.svg";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <img className={styles.patern11} src={patern11} alt="patern11" />
      <div className={styles.leftContact}>
        <h1>Contact</h1>
        <h2>Ask us about</h2>
        <ul>
          <li>
            <img
              className={styles.iconperson}
              src={iconperson}
              alt="iconperson"
            />
            <div>
              <p>
              The quality of our talent network
              </p>
            </div>
          </li>
          <li>
            <img className={styles.iconcog} src={iconcog} alt="iconcog" />
            <div>
              <p>
              Usage & implementation of our software
              </p>
            </div>
          </li>
          <li>
            <img className={styles.iconchart} src={iconchart} alt="iconchart" />
            <div>
              <p>
              How we help drive innovation
              </p>
            </div>
          </li>
        </ul>
      </div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Title" />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="submit" />
      </form>


    </div>
  );
};

export default ContactForm;
