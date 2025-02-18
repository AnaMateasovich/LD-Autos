import React from "react";
import styles from "./FormRequest.module.css";
import { Button } from "../Button/Button";

export const FormRequest = ({handleisVisibleForm}) => {

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Completa el formulario</h2>
      <form className={styles.containerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" id="name"/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city">Localidad</label>
          <input type="text" id="city"/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="car">Auto</label>
          <input type="text" id="car"placeholder="ej: Peugeot 206 2015" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="service">Servicio</label>
          <input type="text" id="service"/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            id="description"
            placeholder="ej: necesito un presupuesto por seguro"
          ></textarea>
        </div>
        <div  className={styles.btnsForm}>
          <Button txt="Enviar" type="submit" onClick={() => window.open('https://wa.me/5493464589676?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios', '_blank')}/>
          <Button txt="Cerrar" className={styles.closeBtn} onClick={handleisVisibleForm}/>
        </div>
      </form>
    </div>
  );
};
