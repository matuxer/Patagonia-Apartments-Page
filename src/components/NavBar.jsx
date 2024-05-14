import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const [toggled, setToggled] = useState(false);

  const handleOnClick = () => {
    setToggled((prevState) => {
      return !prevState;
    });
  };

  
  return (
    <div>
      <div className="bg-emerald-600 h-14 flex items-center justify-between border-b-white border-b-2 z-[100] w-full fixed md:py-8">
        <div className="p-5">
          <a href="/">
            <img src="" alt="Logo" />
          </a>
        </div>
        <div className={`hidden md:block ${styles.menuLinks}`}>
          <Link className="mr-11 hidden" to="/">
            Home
          </Link>
          <Link className="mr-11" to="/about">
            About
          </Link>
          <Link className="mr-11" to="/contact">
            Contact
          </Link>
        </div>
        <div className="block md:hidden">
          <div className="wrap">
            <button
              className={toggled ? styles.open : ""}
              value={toggled}
              onClick={handleOnClick}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col justify-center w-full z-50 fixed ${
          styles.mobileDrop
        } ${!toggled ? "-top-24" : "top-[56px]"} `}
      >
        <Link
          onClick={handleOnClick}
          className={`hidden justify-center py-4 bg-emerald-600 border-b-white border-b-2 ${styles.dropDownLinks} `}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={handleOnClick}
          className={`flex justify-center py-4 bg-emerald-600 border-b-white border-b-2 ${styles.dropDownLinks}`}
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={handleOnClick}
          className={`flex justify-center py-4 bg-emerald-600 border-b-white border-b-2 ${styles.dropDownLinks}`}
          to="/contact"
        >
          Contact
        </Link>
        <div
          className={`h-screen bg-black opacity-40 ${
            toggled ? "" : "hidden" 
          } ${styles.blackMenu}`}
          onClick={handleOnClick}
        ></div>
      </div>
    </div>
  );
}

export default NavBar;
