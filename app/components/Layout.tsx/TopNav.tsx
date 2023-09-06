import React from "react";
import styles from "../../styles/Layout.module.scss";

const TopNav = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_link}>
          <a href="/">Home</a>
        </li>
        <li className={styles.nav_link}>
          <a href="/about">About</a>
        </li>
        <li className={styles.nav_link}>
          <button className={styles.burger}>
            <a href="/bunkering">Bunkering</a>
            <a href="/bunkering">Fuel consumption</a>
            <a href="/bunkering">Percentage of slip</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
