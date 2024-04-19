import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className="bg-red-400 h-14 flex items-center justify-end">
      <div className="hidden md:block">
        <Link className="mr-3" to="/">
          Home
        </Link>
        <Link className="mr-3" to="/about">
          About
        </Link>
      </div>
      <div className="block md:hidden" id={styles["nav-icon"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavBar;
