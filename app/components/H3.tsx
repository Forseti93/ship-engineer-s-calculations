import React from "react";
import styles from "../styles/Headers1_6.module.scss";

const H3 = (props: { children: string }) => {
  return (
    <h3 className={`${styles.title} text-orange-300`}>{props.children}</h3>
  );
};

export default H3;
