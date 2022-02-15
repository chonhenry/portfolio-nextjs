import React from "react";
import styles from "../../styles/Projects.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../../public/data.js";

const Projects = () => {
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
    </div>
  );
};

export default Projects;
