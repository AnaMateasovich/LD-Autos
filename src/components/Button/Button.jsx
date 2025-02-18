import React from "react";
import styles from "./Button.module.css";
export const Button = ({ txt, onClick, className, type }) => {
  return (
      <button className={`${styles.btn} ${className}`} type={type} onClick={onClick}>{txt}</button>
  );
};
