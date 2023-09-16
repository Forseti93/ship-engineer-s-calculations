import React from "react";
import styles from "../../styles/Layout.module.scss";
import Burger from "../Burger/Burger";

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
          <Burger>
            {/* <a href="/bunkering">Bunkering</a>
            <a href="/bunkering">Fuel consumption</a>
            <a href="/bunkering">Percentage of slip</a> */}
          </Burger>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
