import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { CardService } from "../../components/CardService/CardService";
import { Hero } from "../../components/Hero/Hero";
import { IconService } from "../../components/IconService/IconService";
import { ListServices } from "../../components/ListServices/ListServices";
import { NavBar } from "../../components/NavBar/NavBar";
import { useServices } from "../../hooks/useServices";
import styles from "./Home.module.css";

const Home = () => {
  const { listSearch, setSearchTerm, handleSearch } = useServices();
  const [isSearching, setIsSearching] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const searchTermFromURL = searchParams.get("name");
    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
      handleSearch(searchTermFromURL)
    } else {
      setIsSearching([]);
      setSearchTerm("");
      navigate("/home");
    }
  }, [searchParams, setSearchTerm]);

  useEffect(() => {
    if (listSearch.length > 0) {
      setIsSearching(listSearch);
    }
  }, [listSearch]);

  const handleClearSearch = () => {
    setSearchParams({});
    setIsSearching([]);
    setSearchTerm("");
  };

  return (
    <>
      <div>
        <div className={styles.hero}>
          <NavBar />
          <Hero />
        </div>
        {isSearching.length > 0 ? (
          <div className={styles.searching}>
            <div className={styles.clearSearch}>
              <Button
                txt="Limpiar resultados de búsqueda"
                className={styles.btnClearSearch}
                onClick={handleClearSearch}
                aria-label="Limpiar búsqueda"
              />
            </div>
            <h3>Servicios fitrados</h3>
            {isSearching.map((service) => (
              <CardService service={service} key={service.id} />
            ))}
          </div>
        ) : (
          <>
            <IconService />
            <div className={styles.cardServices}>
              <h1 className={styles.titleCardService}>Nuestros Servicios</h1>
              <ListServices />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
