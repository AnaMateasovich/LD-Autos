import React, { useState } from "react";
import styles from "./Hero.module.css";
import { SearchService } from "../SearchService/SearchService";
import { Promotion } from "../Promotion/Promotion";
import { Button } from "../Button/Button";
import imageHero from "/src//assets/welcome.webp"

export const Hero = () => {
  const [showPromo, setshowPromo] = useState(false);
  const handleShowPromo = () => {
    setshowPromo(!showPromo);
  };

  return (
    <div className={styles.container}>
      <img src={imageHero} alt="Hero imagen" className={styles.logo} />
      <div
        className={`${styles.advertisement} ${showPromo ? styles.visible : ""}`}
      >
        {showPromo && <Promotion onClick={handleShowPromo} />}
      </div>
      <div className={`${showPromo ? styles.advertisementIsOpen : ""}`}>
        <Button
          txt="Ver oferta semanal"
          className={styles.promoBtn}
          onClick={handleShowPromo}
          aria-label='Ver promoción'
        ></Button>
      </div>
      <div className={styles.search}>
        <SearchService />
      </div>
    </div>
  );
};
