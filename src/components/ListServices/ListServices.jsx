
import React from "react";
import { useServices } from "../../hooks/useServices.jsx";
import { CardService } from "../CardService/CardService.jsx";


export const ListServices = () => {

  const { services } = useServices();

  return (
    <>
      {services.map((service) => (
        <CardService key={service.id} service={service}/>
      ))}
    </>
  );
};
