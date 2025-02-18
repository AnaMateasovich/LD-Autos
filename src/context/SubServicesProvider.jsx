import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import React from "react";
import { getSubservices } from "../services/apiService";

export const SubServicesContext = createContext();

export const SubServicesProvider = ({ children }) => {
  const {
    data: subservices,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subservices"],
    queryFn: getSubservices,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <SubServicesContext.Provider value={{subservices, isLoading, error}}>{children}</SubServicesContext.Provider>;
};
