import React from "react";
import styles from "./BackButton.module.css";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export const BackButton = ({className}) => {
  return (
    <div className={`${styles.back} ${className}`}>
      <ArrowBackIosNewRoundedIcon style={{ fontSize: "3rem"}} />
    </div>
  );
};
