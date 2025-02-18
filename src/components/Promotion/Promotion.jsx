import React from "react";
import styles from "./Promotion.module.css";
import { Button } from "../Button/Button";
export const Promotion = ({ onClick }) => {
  return (
      <div className={styles.container}>
        <h3>Oferta Semanal</h3>
        <div className={styles.promoContent}>
          <h4>
            ¡3 Y 6 CUOTAS! <br /> SIN INTERES
          </h4>
          <p>Con todos los bancos</p>
        </div>
        <Button txt="OK" className={styles.btnPromo} onClick={onClick} />
      </div>

  );
};
