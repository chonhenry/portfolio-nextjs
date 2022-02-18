import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import styles from "../styles/ModalBox.module.css";

const ModalBox = ({ project, closeModal }) => {
  const { name, technologies, github, link, details } = project;

  const renderTechlogies = () => {
    return technologies.map((techlogy) => <li key={techlogy}>{techlogy}</li>);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.close}>
        <CloseIcon onClick={closeModal} style={{ fontSize: "2rem" }} />
      </div>

      <div className={styles.details}>
        <div className={styles.heading}>{name}</div>
        <p>{details}</p>
        <div className={styles.heading_2}>Tech Stack</div>
        <ul>{renderTechlogies()}</ul>

        <div className={styles.btns}>
          <button className={styles.btn}>
            <a
              className={styles.link}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span>Visit Github</span>
            </a>
          </button>

          <button className={styles.btn}>
            <a
              className={styles.link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon />
              <span>Visit Website</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
