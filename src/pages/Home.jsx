import React from "react";
import styles from "./Home.module.css";
import { useRef } from "react";
import arrowDown from "../images/arrow-circle-down-svgrepo-com.svg";

function Home() {
  const begin = useRef(null);
  return (
    <div className="bg-slate-700 h-full pt-[56px] md:pt-[66px]">
      <div className=" flex justify-center h-full ">
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
            <img className="h-10 hover:scale-105 md:h-16" src={arrowDown} alt="Arrow Down" />
          </button>
        </div>
      </div>
      <div ref={begin} className="bg-white w-full absolute flex justify-center px-10 py-8 md:text-xl md:px-72 md:py-16">
        <p className="font-raleway text-center text-gray-500">
          Nuestros espacios cuentan con toda la comodidad para que disfrutes de
          Ushuaia y te sientas en casa. Ubicados en edificios nuevos, te
          brindamos atención exclusiva y te ayudamos a elegir la mejor manera de
          conocer y disfrutar de Tierra del Fuego, de la forma que mejor se
          adapte a vos.
        </p>
      </div>
      
    </div>
  );
}

export default Home;
