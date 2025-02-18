import React from "react";
import styles from "./CardService.module.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CardService = ({ service }) => {

  return (
    <Link to={`/service/${service.id}`} key={service.id}>
      <div className={styles.container}>
        <img src={`http://localhost:3000${service.image}`} alt={service.name} />
        <div className={styles.txt}>
          <p>{service.name}</p>
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
        </div>
      </div>
    </Link>
  );
};
