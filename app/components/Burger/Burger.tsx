import React, { useState } from "react";
// colors are in global
import styles from "./Burger.module.scss";

interface IBurger {
  children: React.ReactNode[];
}

const Burger = ({ children }: IBurger) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`${styles.burger} burger ${isOpen ? styles.burgerOpen : ""}`}
        onClick={() => clickHandler()}
      >
        <span className={`${isOpen ? styles.firstSpanOpen : ""}`}></span>
        <span className={`${isOpen ? styles.secondSpanOpen : ""}`}></span>
        <span className={`${isOpen ? styles.thirdSpanOpen : ""}`}></span>
      </button>
      <div className="burger-menu">{children}</div>
    </>
  );
};

export default Burger;
