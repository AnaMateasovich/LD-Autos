import React from "react";
import { Button } from "../Button/Button";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";

export const Pricing = ({ handleisVisibleForm, price_min, price_max }) => {
  return (
    <div className={styles.container}>
      <h4>${price_min} - ${price_max} </h4>
      <div>
        <Button
          onClick={handleisVisibleForm}
          txt="Consultar"
          className={styles.btn}
          aria-label='Abrir formulario de consulta'
        />
      </div>
    </div>
  );
};
