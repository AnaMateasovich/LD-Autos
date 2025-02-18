import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.jsx";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import PhotoIcon from "@mui/icons-material/Photo";
import {BackButton } from "../BackButton/BackButton.jsx"
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.container}>
      <button className={styles.btnNavBar} onClick={handleIsOpen}>
        {!isOpen && <MenuRoundedIcon style={{ fontSize: "4rem"}}/>}
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        
        <ArrowBackIosNewRoundedIcon onClick={handleIsOpen} className={styles.back} style={{ fontSize: "5rem", paddingLeft: "1rem" }}>
          {isOpen && <img src="/src/assets/atras.png" alt="Cerrar menú" />}
        </ArrowBackIosNewRoundedIcon>

        <div className={styles.relative}>
          <h2 className={styles.logo}>LD Autos</h2>

          <ul className={styles.navLinks}>
            <Link to="/home">
              <li>
                <HomeIcon className={styles.navBarIcons} />
                Inicio
              </li>
            </Link>
            {/* <Link to="/services">
              <li>
                <BuildIcon className={styles.navBarIcons} />
                Subservicios
              </li>
            </Link> */}
            <Link to="/location">
              <li>
                <LocationOnIcon className={styles.navBarIcons} />
                Ubicación
              </li>
            </Link>
            <Link>
              <li>
                <StarIcon className={styles.navBarIcons} />
                Reseñas
              </li>
            </Link>
            <Link>
              <li>
                <PhotoIcon className={styles.navBarIcons} />
                Galeria de trabajos
              </li>
            </Link>
          </ul>
          <div className={styles.containerBtnWsp}>
            <Button txt="Whats App" className={styles.btnWsp} onClick={() => window.open('https://wa.me/5493464589676?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios', '_blank')}/>
          </div>

          <p className={styles.copy}>© Copyright 2025</p>
        </div>
      </nav>
    </header>
  );
};
