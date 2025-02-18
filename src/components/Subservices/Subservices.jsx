import React, { useEffect, useState } from "react";
import { useServices } from "../../hooks/useServices";
import { useParams } from "react-router-dom";
import styles from "./Subservices.module.css";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const Subservices = () => {
  const { getServiceById, serviceById } = useServices();
  const [subservices, setSubservices] = useState([]);
  const [selected, setSelected] = useState([]);

  const { id } = useParams();
  const serviceId = parseInt(id, 10);

  const formatPrice = (price_min, price_max) => parseInt(price_min, price_max);

  useEffect(() => {
    getServiceById(serviceId);
  }, [serviceId]);

  useEffect(() => {
    if (serviceById.subservices && serviceById.subservices.length > 0) {
      setSubservices(serviceById.subservices);
    }
  }, [serviceById]);

  const handleActiveTab = (subserviceId) => {
    setSelected((prevSelected) =>
      prevSelected.includes(subserviceId)
        ? prevSelected.filter((id) => id !== subserviceId)
        : [...prevSelected, subserviceId]
    );
  };

  return (
    <>
      {subservices.map((subservice) => (
        <div
          key={subservice.id}
          className={styles.container}
          onClick={() => handleActiveTab(subservice.id)}
        >
          <h4 className={styles.subserviceTitle}>
            {subservice.name}{" "}
            {selected.includes(subservice.id) ? (
              <DoneRoundedIcon
                style={{ fontSize: "2rem" }}
                className={styles.done}
              />
            ) : (
              <AddRoundedIcon
                style={{ fontSize: "2rem" }}
                className={styles.add}
              />
            )}
          </h4>
          <div
            className={`${styles.content} ${
              selected.includes(subservice.id) ? styles.open : styles.close
            }`}
          >
            {selected.includes(subservice.id) && (
              <div className={styles.innerContent}>
                <p>
                  {subservice.description !== null && subservice.description}
                </p>
                <p className={styles.price}>
                  <span>${formatPrice(subservice.price_min)}</span> -{" "}
                  <span>${formatPrice(subservice.price_max)}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
