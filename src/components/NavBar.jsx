import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../images/Logo.svg";
import NavBarArrow from "../images/arrow-down-svgrepo-com.svg";
import { obtenerDatos } from "../helper/controllers";
import SearchBar from "./SearchBar";

function NavBar() {
  const [apartments, setApartments] = useState([]);

  /* Estados para controlar si los menus dropdown estan activos o no */
  const [toggled, setToggled] = useState(false);
  const [apartmentToggled, setApartmentToggled] = useState(false);
  const [desktopToggled, setDesktopToggled] = useState(false);
  const [hidden, setHidden] = useState(true);

  /* Funciones que alternan el estado de los estados de los menus dropdown */
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
    if (desktopToggled) {
      setDesktopToggled(false);
      setTimeout(() => {
        setHidden(true);
      }, 500);
    } else {
      setHidden(false);
      setDesktopToggled(true);
    }
  };

  /* Cuando se renderiza la página home por primera vez guarda dentro de 'apartments' todos los apartments disponibles dentro de db.json y se setea el estado toggled como falso en caso de haber estado activo */
  useEffect(() => {
    if (desktopToggled) {
      setHidden(true)
    }
    obtenerDatos("/db.json")
      .then((responseData) => {
        setApartments(responseData[0].apartments);
      })
      .catch((err) => {
        console.log(err.message);
      });
    if (!toggled) {
      setApartmentToggled(false);
    }
  }, [toggled, desktopToggled]);

  return (
    <div>
      <div className="bg-white h-14 flex items-center justify-between border-b-[#4E6E82] border-b-2 z-[100] w-full fixed md:h-20 md:py-8">
        <div className="p-5">
          {/* Botón que lleva a la página Home con el Logo de la página */}
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
            <img className="h-10 md:h-12 md:ml-5" src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Navegación que solo va a ser visible cuando se este en pantalla tamaño 768px o más (md:flex indica que a partir de tamaño md o 768px el elemento cambia a display: flex) */}
        <div
          className={`hidden w-full justify-between md:flex md:flex-row ${styles.menuLinks}`}
        >
          <SearchBar apartments={apartments} />

          <div className="flex flex-row select-none">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={handleDesktopClick}
            >
              <h1 className="font-raleway ">Apartments</h1>
              <img
                className={`h-5 mr-11 ml-3 ${
                  !desktopToggled ? styles.dropClosed : styles.dropOpen
                }`}
                src={NavBarArrow}
                alt="arrow down"
              />
            </div>

            {/* Menu desplegable que muestra los apartments */}
            <div
              className={`absolute flex flex-col bg-slate-100 top-20 right-0 mr-[93px] h-[400px] overflow-y-scroll items-center p-0 ${
                desktopToggled
                  ? ``
                  : `${hidden ? 'hidden' : ''}`
              }`}
            >
              {/* Se usa el método map para crear un elemento Link para cada apartment */}
              {apartments.length !== 0 ? (
                apartments?.map((el) => {
                  return (
                    <Link
                      onClick={handleDesktopClick}
                      key={el.id}
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
              className="mr-11 font-raleway flex items-center"
              to="/contact"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Navegación que solo va a ser visible cuando la pantalla sea de tamaño 767px o menos */}
        <div className="w-full flex justify-between md:hidden">
          <SearchBar />

          {/* Botón tipo hamburguesa con animación usado para desplegar el menu de navegación para mobile */}
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

      {/* Menu desplegable para mobile que se esconde detras de la NavBar y baja cuando es activado */}
      <div
        className={`md:hidden flex flex-col justify-center w-full z-50 fixed select-none ${
          styles.mobileDrop
        } ${!toggled ? "-top-10" : "top-[56px]"} `}
      >
        <div
          onClick={handleApartmentClick}
          className={`flex justify-center items-center py-4 bg-white border-b-[#4E6E82] cursor-pointer border-b-2 z-50 ${styles.dropDownLinks}`}
        >
          <h1 className="font-raleway text-[#4E6E82]">Apartments</h1>
          <img
            className={`h-5 absolute right-0 pr-4 ${
              !apartmentToggled ? styles.dropClosed : styles.dropOpen
            }`}
            src={NavBarArrow}
            alt="arrow down"
          />
        </div>

        {/* Menu desplegable para mobile que muestra los apartments disponibles y se esconde detras de la NavBar, baja cuando es activado */}
        <div
          className={`md:hidden h-[400px] flex flex-col justify-center w-full z-40 fixed ${
            styles.mobileDrop
          } ${
            !toggled
              ? "-top-[22.2rem]"
              : !apartmentToggled
              ? "-top-[14rem]"
              : "top-[117px] "
          } `}
        >
          <div className={`overflow-y-scroll`}>
            {/* Se utiliza el método map para generar un elemento Link para cada apartment disponible en el array de apartments */}
            {apartments.length !== 0 ? (
              apartments?.map((el) => {
                return (
                  <Link
                    onClick={handleOnClick}
                    key={el.id}
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
          </div>
          <Link
            onClick={handleOnClick}
            className={`flex justify-center py-4 bg-white border-b-[#4E6E82] border-t-[#4E6E82] border-y-2 font-raleway ${styles.dropDownLinks}`}
            to="/contact"
          >
            Contacto
          </Link>
        </div>

        {/* Elemento div vacio que es usado para oscurecer el contenido del resto del sitio web cuando el menu desplegable de mobile sea activado */}
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
