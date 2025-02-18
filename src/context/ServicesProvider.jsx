import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState } from "react";
import { getServiceByIdAPI, getServices, searchServiceByName } from "../services/apiService";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [serviceById, setServiceById] = useState([])

  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSearch = async (term) => {
    try {
      const result = await searchServiceByName(term);
      setListSearch(result);
    } catch (error) {
      console.log("Error en la búsqueda: ", error);
    }
  };

  const getServiceById = async (id)  => {
    try {
      const results = await getServiceByIdAPI(id)
      setServiceById(results)
    } catch (error) {
      console.log("Error al obtener el servicio: ", error);
    }
  }

  return (
    <ServicesContext.Provider
      value={{
        services,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        handleSearch,
        listSearch,
        setListSearch,
        getServiceById,
        serviceById,
        setServiceById
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
