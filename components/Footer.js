import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.title}>Call</div>
        <div className={styles.info}>201-214-7048</div>
      </div>
      <div className={styles.footer_box}>
        <div className={styles.title}>Write</div>
        <div className={styles.info}>chonhenry@outlook.com</div>
      </div>
      <div className={styles.footer_box}>
        <div className={styles.title}>Follow</div>
        <div className={styles.icon}>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/chonhenry/")
            }
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/chonhenry")}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
