import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`${styles.layout} ${active ? styles.active : ""}`}
      // style={{ overflowY: active && "hidden", maxHeight: active && "100vh" }}
    >
      <Navbar active={active} setActive={setActive} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
