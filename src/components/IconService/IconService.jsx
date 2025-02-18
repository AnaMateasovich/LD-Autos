import React from "react";
import { useSubServices } from "../../hooks/useSubServices";
import styles from "./IconService.module.css";
import { useServices } from "../../hooks/useServices";
import { useNavigate } from "react-router-dom";

export const IconService = () => {
  const { subservices } = useSubServices();
  const { services, getServiceById, serviceById } = useServices();
  const navigate = useNavigate()

  const handleSubservice = (subservice) => {
    const serviceId = (subservice.services_id);
    navigate(`/service/${serviceId}`)
  };

  return (
    <>
      <div className={styles.scrollContainer}>
        <div className={styles.iconsServices}>
          {subservices.map((subservice) => (
            <div
              key={subservice.id}
              className={styles.container}
              onClick={() => handleSubservice(subservice)}
            >
              <p>{subservice.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
