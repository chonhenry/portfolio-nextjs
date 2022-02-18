import React, { useState } from "react";
import styles from "../../styles/Projects.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Modal from "react-modal";
import ModalBox from "../../components/ModalBox";
import { projects } from "../../public/data.js";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(23, 37, 42, 0.7)",
    zIndex: "200",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const renderProjects = () => {
    return projects.map((project) => (
      <div className={styles.project} key={project.id}>
        <div className={styles.project_left}>
          <div className={styles.project_heading}>
            <div className={styles.project_title}>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </div>
            <div
              className={styles.project_link}
              target="_blank"
              rel="noreferrer"
            >
              <a href={project.github} style={{ fontSize: "5px" }}>
                <GitHubIcon style={{ fontSize: "1.3rem" }} />
              </a>
            </div>
          </div>

          <div className={styles.project_description}>
            {project.description}
          </div>

          <button
            className={styles.details_btn}
            onClick={() => handleProjectClick(project)}
          >
            More Details
          </button>
        </div>

        <div
          className={styles.project_right}
          style={{ backgroundImage: `url(${project.image.src})` }}
          onClick={() => window.open(project.link)}
        />
      </div>
    ));
  };

  return (
    <div className={styles.projects}>
      <div className={styles.heading_container}>
        <div className={styles.square} />
        <div className={styles.heading}>Projects</div>
      </div>

      <div className={styles.container}>{renderProjects()}</div>

      <Modal ariaHideApp={false} isOpen={modalOpen} style={customStyles}>
        <ModalBox
          project={selectedProject}
          closeModal={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Projects;
