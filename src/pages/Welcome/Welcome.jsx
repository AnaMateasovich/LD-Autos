import React from "react";
import styles from "./Welcome.module.css";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import welcomeImage from '/src/assets/welcome.webp'

const Welcome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={welcomeImage} alt="Foto de LD Autos" />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.txt}>
          <h1>
            LD <span>Autos</span>
          </h1>
          <h2>Taller de Detailing, Chapería y Pintura</h2>
          <Link to="/home">
            <Button className={styles.btnW} txt="Ver Sevicios" aria-label='Ver servicios'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
