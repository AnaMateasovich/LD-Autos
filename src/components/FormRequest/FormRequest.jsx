import React, { useState } from "react";
import styles from "./FormRequest.module.css";
import { Button } from "../Button/Button";

export const FormRequest = ({ handleisVisibleForm }) => {
  const [formState, setFormState] = useState({
    name: "",
    city: "",
    car: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Nombre:* ${formState.name},\n*Localidad:* ${formState.city},\n*Auto:* ${formState.car},\n*Servicio:* ${formState.service},\n*Mensaje:* ${formState.message}`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "3464589676";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Completa el formulario</h2>
      <form className={styles.containerForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre y Apellido</label>
          <input name="name" type="text" id="name" onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="city">Localidad</label>
          <input name="city" type="text" id="city" onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="car">Auto</label>
          <input
            name="car"
            type="text"
            id="car"
            placeholder="ej: Peugeot 206 2015"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="service">Servicio</label>
          <input
            name="service"
            type="text"
            id="service"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Mensaje</label>
          <textarea
            name="message"
            id="message"
            placeholder="ej: Hola, necesito un presupuesto por seguro"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.btnsForm}>
          <Button txt="Enviar" type="submit" />
          <Button
            txt="Cerrar"
            className={styles.closeBtn}
            onClick={handleisVisibleForm}
          />
        </div>
      </form>
    </div>
  );
};
