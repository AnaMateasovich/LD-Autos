import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { FormRequest } from "../../components/FormRequest/FormRequest";
import { Pricing } from "../../components/Pricing/Pricing";
import { ServicePromoInfo } from "../../components/ServicePromoInfo/ServicePromoInfo";
import { Subservices } from "../../components/Subservices/Subservices";
import { useServices } from "../../hooks/useServices";
import styles from "./ServiceDetails.module.css";

const ServiceDetails = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentService, setCurrentService] = useState([]);

  const handleisVisibleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const { id } = useParams();
  const serviceId = parseInt(id, 10);

  const { serviceById, getServiceById } = useServices();

  useEffect(() => {
    getServiceById(serviceId);
    window.scrollTo(0, 0);
  }, [serviceId]);

  useEffect(() => {
    if (serviceById.service && serviceById.service.length > 0) {
      setCurrentService(serviceById.service[0]);
    }
  }, [serviceById]);

  return (
    <>
      {isFormVisible && (
        <div
          className={`${styles.overlay} ${isFormVisible ? styles.visible : ""}`}
          onClick={handleisVisibleForm}
        >
          {" "}
        </div>
      )}
      {isFormVisible && (
        <div
          className={`${styles.form} ${isFormVisible ? styles.visible : ""}`}
        >
          <FormRequest handleisVisibleForm={handleisVisibleForm} />
        </div>
      )}
      <div
        className={`${styles.container} ${isFormVisible ? styles.bgBlur : ""}`}
      >
        <Link to="/home">
          <BackButton className={styles.back} />
        </Link>
        <img
          src={`http://localhost:3000${currentService.image}`}
          alt={currentService.name}
          className={styles.imgService}
        />
        <div className={styles.ServiceContent}>
          <div className={styles.ServiceText}>
            <h1 className={styles.ServiceTitle}>{currentService.name}</h1>
            <p>{currentService.description}</p>
          </div>
          <div className={styles.subCategorys}>
            <ServicePromoInfo />
            <h3>Subcategorías</h3>
            <p>{currentService.subservices}</p>
            <Subservices />
          </div>
          <p className={styles.note}>
            Nota Importante: Los precios indicados son aproximados, ya que cada
            trabajo requiere un nivel de cuidado y atención diferente. Para
            obtener un presupuesto personalizado, ingresa en "Consultar" y
            completa el formulario.
          </p>
          <div className={styles.pricing}>
            <Pricing
              price_min={currentService.price_min}
              price_max={currentService.price_max}
              handleisVisibleForm={handleisVisibleForm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
