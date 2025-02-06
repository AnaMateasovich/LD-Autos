import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";
export const Button = ({ className, txt, to }) => {
  return (
    <Link to={to}>
      <button className={`${styles.btn} ${className}`}>{txt}</button>
    </Link>
  );
};
