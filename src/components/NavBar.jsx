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
      <div className="bg-white h-14 flex items-center justify-between border-b-[#4E6E82] border-b-2 z-[100] w-full fixed md:h-20 md:py-8">
        <div className="p-5">
          <a href="/">
            <img className="h-10 md:h-12 md:ml-5" src="/images/Logo.svg" alt="Logo" />
          </a>
        </div>
        <div className={`hidden md:block ${styles.menuLinks}`}>
          <Link className="mr-11 font-raleway hidden" to="/">
            Home
          </Link>
          <Link className="mr-11 font-raleway" to="/about">
            About
          </Link>
          <Link className="mr-11 font-raleway" to="/contact">
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
          className={`hidden justify-center py-4 bg-white border-b-[#4E6E82] border-b-2 font-raleway ${styles.dropDownLinks} `}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={handleOnClick}
          className={`flex justify-center py-4 bg-white border-b-[#4E6E82] border-b-2 font-raleway ${styles.dropDownLinks}`}
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={handleOnClick}
          className={`flex justify-center py-4 bg-white border-b-[#4E6E82] border-b-2 font-raleway ${styles.dropDownLinks}`}
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
