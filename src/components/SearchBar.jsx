import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.ui_input_container}>
      <input
        required=""
        placeholder="Búsqueda de Apartments ..."
        className={styles.ui_input}
        type="text"
      />
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
