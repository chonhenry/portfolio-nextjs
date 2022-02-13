import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
