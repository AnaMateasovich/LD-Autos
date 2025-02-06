import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { IconProduct } from "../../components/IconProduct/IconProduct";
import styles from "./Home.module.css";
import { CardProduct } from "../../components/CardProduct/CardProduct";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <button className={styles.promo}>Ver oferta semanal</button>
        <div className={styles.iconsProducts}>
          <IconProduct name="Chapería y pintura" />
          <IconProduct name="Pulidos" />
          <IconProduct name="Sacabollos" />
          <IconProduct name="Seguros" />
        </div>
        <div className={styles.cardProducts}>
          <p className={styles.titleCardProduct}>Servicios Destacados</p>
          <CardProduct name="Sacabollos"/>
          <CardProduct name="Chapería y pintura"/>
        </div>
      </div>
    </>
  );
};

export default Home;
