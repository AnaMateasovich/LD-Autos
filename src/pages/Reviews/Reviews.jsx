import React, { useEffect, useState } from "react";
import { Review } from "../../components/Review/Review";
import styles from "./Reviews.module.css";
import { BackButton } from "../../components/BackButton/BackButton";
import { FormRequest } from "../../components/FormRequest/FormRequest";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";


const Reviews = () => {
  // const [activeForm, setActiveForm] = useState(false);


  // const handleActiveForm = () => {
  //   setActiveForm(true);
  // };

  return (
    <>
      <Link to="/home">
        <BackButton className={styles.back} />
      </Link>
      <div className={styles.container}>
        {/* {activeForm && <FormRequest className={styles.form} />} */}
        <div className={styles.btn}>
          <Button
            txt="Consultar"
            onClick={() => window.open('https://wa.me/5493464589676?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios', '_blank')}
            
          />
        </div>

        <div className={styles.txtContainer}>
          <h1 className={styles.title}>Resultados que hablan por sí solos</h1>
          <p className={styles.txt}>
            Descubrí cómo nuestro trabajo y experiencia logran resultados
            sorprendentes.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Review
              name="Osvaldo"
              before={`/src/assets/chevrolet-before.jpeg`}
              after={`/src/assets/chevrolet-after.jpeg`}
              review='"Un lujo la verdad"'
            />
          </div>
          <div className={styles.card}>
            <Review
              name="Lucas"
              before={`/src/assets/red-before.jpeg`}
              after={`/src/assets//red-after.jpeg`}
            />
          </div>
          <div className={styles.card}>
            <Review
              name="Agustín"
              before={`/src/assets/ford-before.jpeg`}
              after={`/src/assets/ford-after.jpeg`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
