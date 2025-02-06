import React from "react";
import styles from "./Welcome.module.css";
import { Button } from "../../components/Button/Button";

const Welcome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src="/src/assets/welcome.jpg"
            alt="Foto de LD Autos"
          />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.txt}>
          <h1>
            LD <span>Autos</span>
          </h1>
          <h2>Taller de Detailing, Chapería y Pintura</h2>
          <Button
            to={"/home"}
            onClick="/home"
            className={styles.btnW}
            txt="Ver Sevicios"
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
