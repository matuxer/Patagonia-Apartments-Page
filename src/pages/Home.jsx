import React from "react";
import styles from "./Home.module.css";
import { useRef } from "react";
import Cards from "../components/Cards";
import { useState } from "react";
import { useEffect } from "react";
import LogoWhite from "../images/LogoWhite.svg";
import HeaderArrow from "../images/arrow-circle-down-svgrepo-com.svg";
import { obtenerDatos } from "../helper/controllers";

function Home() {
  const begin = useRef(null);
  const [apartments, setApartments] = useState([]);

  /* Cuando se renderiza la página home por primera vez guarda dentro de 'apartments' todos los apartments disponibles dentro de db.json */
  useEffect(() => {
    obtenerDatos("/db.json")
      .then((responseData) => {
        setApartments(responseData[0].apartments);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, []);

  return (
    <div className="bg-slate-700 h-full pt-[56px] md:pt-[80px]">
      {/* HEADER */}
      <section className=" flex justify-center h-full ">
        <div className={`${styles.homeHeader}`}></div>
        <div className="absolute flex flex-row justify-center items-center w-full gap-1 sm:gap-2 md:gap-4 h-[450px] md:h-screen">
          <h1 className="text-white text-2xl font-normal font-oswald pb-16 ml-[18px] sm:ml-5 sm:text-3xl md:text-4xl md:ml-[25px] lg:text-5xl lg:ml-8 lg:pb-20">
            PATAGONIA
          </h1>
          <div className="flex flex-col items-center">
            <img
              className="h-12 sm:h-16 md:h-20 lg:h-24"
              src={LogoWhite}
              alt="Header Logo"
            />
            {/* Botón para bajar al contenido de la página */}
            <button
              className={`z-0 mt-2 md:mt-4`}
              onClick={() => {
                begin.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <img
                className="h-9 hover:scale-105 sm:h-10 lg:h-14"
                src={HeaderArrow}
                alt="Arrow Down"
              />
            </button>
          </div>
          <h1 className="text-white text-2xl font-normal font-oswald pb-16 sm:text-3xl md:text-4xl lg:text-5xl lg:pb-20">
            APARTMENTS
          </h1>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="flex flex-col">
        <div
          ref={begin}
          className="absolute bg-white w-full flex justify-center items-center px-10 py-8 h-[244px] md:text-xl md:h-[240px] lg:px-60 "
        >
          <p className="font-raleway text-sm text-center font-medium text-gray-500  sm:text-base">
            Nuestros espacios cuentan con toda la comodidad para que disfrutes
            de Ushuaia y te sientas en casa. Ubicados en edificios nuevos, te
            brindamos atención exclusiva y te ayudamos a elegir la mejor manera
            de conocer y disfrutar de Tierra del Fuego, de la forma que mejor se
            adapte a vos.
          </p>
        </div>

        {/* Se llama al componente Cards el cual va a renderiza las Cards de apartments */}
        <div className="w-full bg-[#f0f4f4] border-t-2 border-t-[#4E6E82] mt-[244px] md:mt-[240px] ">
          <Cards apartments={apartments} />
        </div>
      </section>
    </div>
  );
}

export default Home;
