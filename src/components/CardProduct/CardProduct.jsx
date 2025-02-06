import React from "react";
import styles from "./CardProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CardProduct = ({name}) => {
  return (
    <div className={styles.container}>
      <img src="/src/assets/sacabollos.jpg" alt="Sacabollos" />

      <div className={styles.txt}>
        <p>{name}</p>
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrow}/>
      </div>
    </div>
  );
};
