import React from "react";
import styles from "./Location.module.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Rating from "@mui/material/Rating";
import { BackButton } from "../../components/BackButton/BackButton";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";
import { Link } from "react-router-dom";
import locationImage from '/src/assets/location.webp'
const Location = () => {
  return (
    <div className={styles.container}>
      <Link to="/home">
        <BackButton className={styles.backButton} />
      </Link>
      <img
        className={styles.imgBg}
        src={locationImage}
        alt="Ubicación LD Autos"
        
      />
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.2433305822535!2d-61.16048130236917!3d-33.05938627852144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7d30024dbf163%3A0x47894fcb9a8084be!2sLD%20Autos%20taller%20de%20Sacabollos%2C%20Chaper%C3%ADa%20y%20est%C3%A9tica%20Vehicular!5e0!3m2!1ses!2sar!4v1739834306378!5m2!1ses!2sar"
       
      ></iframe>
      <div className={styles.txtConteiner}>
        <h1 className={styles.title}>
          LD Autos <br />
          <span>Taller de Sacabollos, Chapería y Estética Vehicular</span>{" "}
        </h1>
        <div className={styles.rating}>
          <p>5,0</p>
          <Rating
            name="read-only"
            value={5}
            readOnly
            size="large"
            precision={0.5}
            emptyIcon={
              <StarRateRoundedIcon
                style={{ opacity: 0.55 }}
                fontSize="inherit"
              />
            }
          />
          <p>(7)</p>
        </div>
        <p>Taller de reparación de automóviles</p>
        <p className={styles.address}>San Martín 611, Casilda, Santa Fe</p>
        <div className={styles.btnContainer}>
          <Link to='https://www.google.com/maps/dir//San+Mart%C3%ADn+611,+S2170+Casilda,+Santa+Fe/@-33.0596212,-61.2425997,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95b7d30024dbf163:0x47894fcb9a8084be!2m2!1d-61.1601985!2d-33.0596483?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D'>
            <button className={styles.btnLink} aria-label="Ver indicaciones">
              <DirectionsRoundedIcon fontSize="large" />
              Ver indicaciones
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
