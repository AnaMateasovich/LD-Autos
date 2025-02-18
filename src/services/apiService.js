import axios from "axios";

const API_URL = "http://localhost:3000";

// Configuracion de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const getServices = async () => {
  try {
    const response = await api.get("/services");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los servicios", error);
    throw error;
  }
};

export const getServiceByIdAPI = async (id) => {
  try {
    const response = await api.get(`/services/${id}`)
    return response.data
  } catch (error) {
    console.error("Error al obtener el servicio", error);
    throw error;
  }
}

export const searchServiceByName = async (term) => {
  try {
    const response = await api.get(`/services/search?name=${term}`)
    return response.data
  } catch (error) {
    console.error(`Error al obtener el servicio`, error);
    throw error;
  }
}

export const getSubservices = async () => {
  try {
    const response = await api.get(`/subservices`)
    return response.data
  } catch (error) {
    console.error(`Error al obtener los subservicios`, error);
    throw error;
  }
}
