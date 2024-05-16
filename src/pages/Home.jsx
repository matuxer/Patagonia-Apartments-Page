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
    <div className="bg-slate-700 h-full pt-[56px] md:pt-[66px]">
      {/* HEADER */}
      <section className=" flex justify-center h-full ">
        <div className={`${styles.homeHeader}`}></div>
        <div className="absolute flex flex-col justify-center items-center w-full h-[450px] md:h-screen">
          <h1 className="text-white text-[25px] font-semibold font-raleway md:text-6xl">
            Patagonia Apartments
          </h1>
          <button
            className={`z-0 mt-2 md:mt-10`}
            onClick={() => {
              begin.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <img
              className="h-10 hover:scale-105 md:h-16"
              src="/images/arrow-circle-down-svgrepo-com.svg"
              alt="Arrow Down"
            />
          </button>
        </div>
      </section>

      {/* CONTENT */}
      <section className="flex flex-col absolute">
        <div
          ref={begin}
          className="bg-white w-full flex justify-center px-10 py-8 md:text-xl md:px-72 md:py-16"
        >
          <p className="font-raleway text-center text-gray-500">
            Nuestros espacios cuentan con toda la comodidad para que disfrutes
            de Ushuaia y te sientas en casa. Ubicados en edificios nuevos, te
            brindamos atención exclusiva y te ayudamos a elegir la mejor manera
            de conocer y disfrutar de Tierra del Fuego, de la forma que mejor se
            adapte a vos.
          </p>
        </div>
        <div className="h-[1000px] w-full bg-[#f0f4f4]">
          <Cards apartments={apartments}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
