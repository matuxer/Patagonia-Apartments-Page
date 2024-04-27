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
      <div className="bg-emerald-600 h-14 flex items-center justify-end border-b-white border-b-2 z-10">
        <div className="hidden md:block">
          <Link className="mr-11" to="/">
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
        className={`md:hidden flex flex-col justify-center absolute w-full ${
          styles.mobileDrop
        } ${!toggled ? "hidden" : ""} `}
      >
        <Link
          onClick={handleOnClick}
          className={`flex justify-center py-4 bg-emerald-600 border-b-white border-b-2 ${styles.dropDownLinks} `}
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
          className="h-screen bg-black opacity-40"
          onClick={handleOnClick}
        ></div>
      </div>
    </div>
  );
}

export default NavBar;
