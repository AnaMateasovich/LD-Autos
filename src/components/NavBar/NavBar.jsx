import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.jsx";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.container}>
      <button className={styles.btnNavBar} onClick={handleIsOpen}>
        {!isOpen && <img src="/src/assets/menu.png" alt="Abrir menú" />}
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <button onClick={handleIsOpen}>
          {isOpen && (
            <img src="/src/assets/cerrar-menu.png" alt="Cerrar menú" />
          )}
        </button>
        <div className={styles.relative}>
          <ul className={styles.navLinks}>
            <Link to="/home">
              <li>Inicio</li>
            </Link>
            <Link>
              <li>Servicios</li>
            </Link>
            <Link>
              <li>Ubicación</li>
            </Link>
            <Link>
              <li>Reseñas</li>
            </Link>
            <Link>
              <li>Galeria de trabajos</li>
            </Link>
          </ul>
          <div className={styles.flexContainer}>
            <Button txt="Whats App" className={styles.btnWsp} />
            <p>© Copyright 2025</p>
          </div>
        </div>
      </nav>
    </header>
  );
};
