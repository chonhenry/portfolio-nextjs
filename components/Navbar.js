import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = ({ active, setActive }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_left}>
        <div className={styles.nav_box}>
          <CodeIcon />
        </div>
        <Link href="/">
          <a href="">
            <div className={styles.nav_name_title}>
              <span className={styles.nav_name}>Henry Chon</span>
              <span className={styles.nav_title}>
                <span className={styles.nav_spacer}>&nbsp;/&nbsp;</span>Software
                Engineer
              </span>
            </div>
          </a>
        </Link>
      </div>

      <ul
        className={
          active ? styles.nav_right + " " + styles.active : styles.nav_right
        }
      >
        <li
          className={styles.nav_menu_item}
          onClick={() => setActive((prev) => !prev)}
        >
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li
          className={styles.nav_menu_item}
          onClick={() => setActive((prev) => !prev)}
        >
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li
          className={styles.nav_menu_item}
          onClick={() => setActive((prev) => !prev)}
        >
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
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
