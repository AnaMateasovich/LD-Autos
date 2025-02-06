import React from "react";
import styles from './IconProduct.module.css'

export const IconProduct = ({name}) => {
  return (
    <>
      <div className={styles.container}>
        <img
          src="/src/assets/icon-chaperia-y-pintura.jfif"
          alt="Chapería y pintura"
        />
        <p>{name}</p>
      </div>
    </>
  );
};
