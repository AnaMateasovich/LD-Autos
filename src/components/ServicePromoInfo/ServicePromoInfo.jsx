import React, { useState } from "react";
import styles from "./ServicePromoInfo.module.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const ServicePromoInfo = () => {
  const [selected, setSelected] = useState("seguros");
  const info = {
    garantia: "Le damos una garantía de 3 meses.",
    seguros: "Trabajamos con todos los seguros.",
    pagos:
      "Efectivo, transferencia, tarjeta de credito: 3 o 6 cuotas sin interes.",
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => setSelected("seguros")}
        className={`${styles.cardTxt} ${
          selected === "seguros" ? styles.active : ""
        }`}
        aria-label='Información sobre seguros'
      >
        Seguros
      </button>
      <button
        onClick={() => setSelected("pagos")}
        className={`${styles.cardTxt} ${
          selected === "pagos" ? styles.active : ""
        }`}
        aria-label='Información sobre pagos'

      >
        Pagos
      </button>
      <button
        onClick={() => setSelected("garantia")}
        className={`${styles.cardTxt} ${
          selected === "garantia" ? styles.active : ""
        }`}
        aria-label='Información sobre garantía'

      >
        Garantía
      </button>
      <div className={`${styles.infoBox} ${styles.fadeIn}`}>
        <p className={styles.infoText}>
          <InfoOutlinedIcon className={styles.infoIcon} /> {info[selected]}
        </p>
      </div>
    </div>
  );
};
