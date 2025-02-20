import React from "react";
import styles from "./Reviews.module.css";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { Button } from "../../components/Button/Button";
import { Review } from "../../components/Review/Review";
import chevroletBefore from '/src/assets/chevrolet-before.webp'
import chevroletAfter from '/src/assets/chevrolet-after.webp'
import fordBefore from '/src/assets/ford-before.webp'
import fordAfter from '/src/assets/ford-after.webp'
import redBefore from '/src/assets/red-before.webp'
import redAfter from '/src/assets/red-after.webp'


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
        aria-label='Abrir Whats App'
            
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
              before={chevroletBefore}
              after={chevroletAfter}
              review='"Un lujo la verdad"'
            />
          </div>
          <div className={styles.card}>
            <Review
              name="Lucas"
              before={redBefore}
              after={redAfter}
            />
          </div>
          <div className={styles.card}>
            <Review
              name="Agustín"
              before={fordBefore}
              after={fordAfter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
