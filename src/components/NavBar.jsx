import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import data from "../db.json";
import Logo from "../images/Logo.svg"
import NavBarArrow from "../images/arrow-down-svgrepo-com.svg";

function NavBar() {
  const [toggled, setToggled] = useState(false);
  const [apartmentToggled, setApartmentToggled] = useState(false);
  const [desktopToggled, setDesktopToggled] = useState(false);
  const [apartments, setApartments] = useState([]);

  const handleOnClick = () => {
    setToggled((prevState) => {
      return !prevState;
    });
  };

  const handleApartmentClick = () => {
    setApartmentToggled((prevState) => {
      if (toggled) {
        return !prevState;
      } else {
        return false;
      }
    });
  };

  const handleDesktopClick = () => {
    setDesktopToggled((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    setApartments(data[0].apartments);
    if (!toggled) {
      setApartmentToggled(false);
    }
  }, [toggled]);

  return (
    <div>
      <div className="bg-white h-14 flex items-center justify-between border-b-[#4E6E82] border-b-2 z-[100] w-full fixed md:h-20 md:py-8">
        <div className="p-5">
          <Link
            onClick={() => {
              if (toggled) {
                handleOnClick();
              }

              if (desktopToggled) {
                handleDesktopClick();
              }
            }}
            to="/"
          >
            <img
              className="h-10 md:h-12 md:ml-5"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className={`hidden md:flex md:flex-row ${styles.menuLinks}`}>
          <Link
            onClick={() => {
              if (desktopToggled) {
                handleDesktopClick();
              }
            }}
            className="mr-11 font-raleway"
            to="/about"
          >
            About
          </Link>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleDesktopClick}
          >
            <img
              className={`h-5 mr-3 ${
                !desktopToggled ? styles.dropClosed : styles.dropOpen
              }`}
              src={NavBarArrow}
              alt="arrow down"
            />
            <h1 className="font-raleway">Apartments</h1>
            <img
              className={`h-5 mr-11 ml-3 ${
                !desktopToggled ? styles.dropClosed : styles.dropOpen
              }`}
              src={NavBarArrow}
              alt="arrow down"
            />
          </div>
          <div
            className={`absolute flex flex-col bg-slate-100 top-20 right-0 mr-[110px] items-center p-0 ${
              desktopToggled ? `${styles.menuOpen}` : `${styles.menuClosed}`
            }`}
          >
            {apartments.length !== 0 ? (
              apartments?.map((el) => {
                return (
                  <Link
                    onClick={handleDesktopClick}
                    className="font-raleway px-8 py-4 w-full border-b-2 border-b-[#4E6E82] text-center"
                    to={`/apartment/${el.id}`}
                  >
                    {el.name}
                  </Link>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <Link
            onClick={() => {
              if (desktopToggled) {
                handleDesktopClick();
              }
            }}
            className="mr-11 font-raleway"
            to="/contact"
          >
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
        } ${!toggled ? "-top-36" : "top-[56px]"} `}
      >
        <Link
          onClick={handleOnClick}
          className={`flex justify-center py-4 bg-white border-b-[#4E6E82] border-b-2 z-50 font-raleway ${styles.dropDownLinks}`}
          to="/about"
        >
          About
        </Link>

        <div
          onClick={handleApartmentClick}
          className={`flex justify-center items-center py-4 bg-white border-b-[#4E6E82] cursor-pointer border-b-2 z-50 ${styles.dropDownLinks}`}
        >
          <h1 className="font-raleway text-[#4E6E82]">Apartments</h1>
          <img
            className={`h-5 absolute left-0 pl-4 ${
              !apartmentToggled ? styles.dropClosed : styles.dropOpen
            }`}
            src={NavBarArrow}
            alt="arrow down"
          />
          <img
            className={`h-5 absolute right-0 pr-4 ${
              !apartmentToggled ? styles.dropClosed : styles.dropOpen
            }`}
            src={NavBarArrow}
            alt="arrow down"
          />
        </div>
        <div
          className={`md:hidden flex flex-col justify-center w-full z-40 fixed ${
            styles.mobileDrop
          } ${
            !toggled ? "-top-48" : !apartmentToggled ? "-top-2" : "top-[178px]"
          } `}
        >
          {apartments.length !== 0 ? (
            apartments?.map((el) => {
              return (
                <Link
                  onClick={handleOnClick}
                  className={`flex justify-center py-4 bg-slate-100 border-b-[#4E6E82] border-b-2 font-raleway ${styles.dropDownLinks}`}
                  to={`/apartment/${el.id}`}
                >
                  {el.name}
                </Link>
              );
            })
          ) : (
            <></>
          )}
          <Link
            onClick={handleOnClick}
            className={`flex justify-center py-4 bg-white border-b-[#4E6E82] border-b-2 font-raleway ${styles.dropDownLinks}`}
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <div
          className={`h-screen bg-black opacity-40 ${toggled ? "" : "hidden"} ${
            styles.blackMenu
          }`}
          onClick={handleOnClick}
        ></div>
      </div>
    </div>
  );
}

export default NavBar;
