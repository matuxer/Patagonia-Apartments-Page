import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar({apartments}) {
  const [input, setInput] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  /* Función que se ejecuta cuando se haga Submit del input del SearchBar y busca los apartments que coincidan con el nombre */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let apartment = apartments.filter((el) => el.name.toLowerCase() === input.toLowerCase() )

    /* Si encuentra un apartment que coincida, redirige al usuario a la página de apartment, sino lo redirige a una página de error 404 */
    if (apartment[0]) {
      navigate({
        pathname: `/apartment/${apartment[0].id}`
      });
    } else {
      navigate({
        pathname: `/apartment/err`
      });
    }
  }

  /* Función que va ir modificando el estado input según cambie el input de la SearchBar */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  /* Cada vez que se vuelve a renderizar el componente SearchBar se limpia el estado de input */
  useEffect(() => {
    setInput("");
  }, [location]);

  return (
    <div className={`md:ml-5 ${styles.ui_input_container}`}>
      <form onSubmit={handleSearchSubmit} action="">
      <input
        required=""
        placeholder="Búsqueda por nombre..."
        autoComplete="off"
        className={styles.ui_input}
        value={input}
        type="text"
        onChange={handleInputChange}
      />
      </form>
      <div className={styles.ui_input_underline}></div>
      <div className={styles.ui_input_highlight}></div>
      <div className={styles.ui_input_icon}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
