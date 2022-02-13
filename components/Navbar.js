import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_left}>
        <div className={styles.nav_box}>
          <CodeIcon />
        </div>
        <div className={styles.nav_name_title}>
          <span className={styles.nav_name}>Henry Chon</span>
          <span className={styles.nav_title}>
            <span className={styles.nav_spacer}>&nbsp;/</span>&nbsp;Software
            Engineer
          </span>
        </div>
      </div>

      <ul
        className={
          active ? styles.nav_right + " " + styles.active : styles.nav_right
        }
      >
        <li className={styles.nav_menu_item}>About</li>
        <li className={styles.nav_menu_item}>Projects</li>
        <li className={styles.nav_menu_item}>Contact</li>
      </ul>

      <div
        className={styles.nav_btn}
        onClick={() => setActive((prev) => !prev)}
      >
        {active ? <CloseIcon /> : <MenuIcon />}
      </div>
    </nav>
  );
};

export default Navbar;
