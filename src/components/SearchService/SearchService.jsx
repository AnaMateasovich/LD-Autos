import React from "react";
import { useServices } from "../../hooks/useServices.jsx";
import styles from "./SearchService.module.css";
import { useSearchParams } from 'react-router-dom'

export const SearchService = () => {

  const { searchTerm, setSearchTerm, handleSearch } = useServices();
  const 	[ searchParams, setSearchParams ] = useSearchParams()

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({name: searchTerm})
    handleSearch(searchTerm);
  };


  return (
    <form method="get" action="/search" className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="searchInput" className={styles.label}>
        <h3>
          Encuentra el Servicio Perfecto <br />
          para Ti
        </h3>
      </label>
      <input
        type="text"
        id="searchInput"
        name="name"
        className={styles.input}
        placeholder="Ej: pulidos"
        onChange={handleInputChange}
        value={searchTerm}
      />
      <button className={styles.searchBtn} type="submit">Buscar</button>
    </form>
  );
};
