import React from "react";
import styles from "./Home.module.css";
import { useRef } from "react";
import Cards from "../components/Cards";
import data from "../db.json";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const begin = useRef(null);
  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    setApartments(data[0].apartments)
  }, [])

  return (
    <div className="bg-slate-700 h-full pt-[56px] md:pt-[80px]">
      {/* HEADER */}
      <section className=" flex justify-center h-full ">
        <div className={`${styles.homeHeader}`}></div>
        <div className="absolute flex flex-col justify-center items-center w-full h-[450px] md:h-screen">
          <h1 className="text-white text-[25px] font-semibold font-raleway md:text-4xl lg:text-5xl">
            Patagonia Apartments
          </h1>
          <button
            className={`z-0 mt-2 md:mt-4 lg:mt-10`}
            onClick={() => {
              begin.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <img
              className="h-10 hover:scale-105 md:h-10 lg:h-14"
              src="/images/arrow-circle-down-svgrepo-com.svg"
              alt="Arrow Down"
            />
          </button>
        </div>
      </section>

      {/* CONTENT */}
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
        <div className="w-full bg-[#f0f4f4] mt-[244px] md:mt-[240px] ">
          <Cards apartments={apartments}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
