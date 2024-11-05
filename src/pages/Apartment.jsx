import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "../components/CarouselComponent";
import LocationIcon from "../images/location-pin-alt-1-svgrepo-com.svg";
import RulerIcon from "../images/ruler-svgrepo-com.svg";
import BedIcon from "../images/bed-svgrepo-com.svg";
import temperatureIcon from "../images/temperature-svgrepo-com.svg";
import smokingIcon from "../images/smoking-cigarette-svgrepo-com.svg";
import kitchenIcon from "../images/kitchen-pack-cooking-svgrepo-com.svg";
import parkingIcon from "../images/parking-svgrepo-com.svg";
import petsIcon from "../images/pets-svgrepo-com.svg";
import wifiIcon from "../images/wifi-svgrepo-com.svg";
import { obtenerDatos } from "../helper/controllers";

function Apartment() {
  const featuresInitialState = {
    wifi: false,
    kitchen: false,
    heating: false,
    pets_allowed: false,
    parking: false,
    smoking_allowed: false,
  };

  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feat, setFeat] = useState(featuresInitialState);

  /* Cuando se renderiza la página se busca y guarda la información de los apartments */
  useEffect(() => {
    setLoading(true);
    obtenerDatos("/db.json")
      .then((responseData) => {
        setApartments(responseData[0].apartments);
        let info = responseData[0].apartments.filter((el) => {
          return el.id === Number(id);
        });
        setApartment(info[0]);
        if (info[0].features) {
          setFeat((prevState) => ({
            ...prevState,
            ...info[0].features,
          }));
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    /* Mientras la página esta obteniendo los datos del apartment se muestra un mensaje de carga */
    return (
      <div id="top" className="pt-[56px] h-[700px] md:pt-[80px]">
        Loading
      </div>
    );
  } else {
    return (
      <div className="pt-[56px] md:pt-[80px]">
        <div className="flex flex-col md:flex-row md:items-center lg:pt-1 lg:px-3 xl:px-36 xl:gap-2 2xl:gap-5">
          <div className="px-3 md:w-1/2">
            <h1 className="font-bold font-raleway text-2xl mt-3 md:text-3xl xl:text-4xl">
              {apartment.name}
            </h1>
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start my-3 lg:text-base">
              <img src={LocationIcon} className="h-5 mr-2" alt="..." />
              {apartment.location}
            </p>

            {/* Información del apartment solo visible en Desktop */}
            <div className="hidden mb-6 md:block">
              <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 lg:text-base">
                <img src={RulerIcon} className="h-5 mr-2" alt="..." />
                {apartment.description_1}
              </p>
              <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start lg:text-base">
                <img src={BedIcon} className="h-5 mr-2" alt="..." />
                {apartment.description_2}
              </p>
              <br />
              <p className="font-raleway text-sm font-medium text-justify px-1 lg:text-base lg:font-bold">
                {apartment.description_3}
              </p>
            </div>
          </div>

          {/* Se llama al componente CarouselComponent el cual va a renderizar un Carrusel para mostrar las imagenes del apartment */}
          <div className="block px-3 md:pt-5 md:w-1/2">
            <CarouselComponent images={apartment.images} id={id} />
          </div>
        </div>

        {/* Información del apartment solo visible en Mobile */}
        <div className="px-3 mb-6 sm:px-5 md:hidden">
          <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3">
            <img src={RulerIcon} className="h-5 mr-2" alt="..." />
            {apartment.description_1}
          </p>
          <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start">
            <img src={BedIcon} className="h-5 mr-2" alt="..." />
            {apartment.description_2}
          </p>
          <br />
          <p className="font-raleway text-sm font-medium text-justify px-1 sm:px-0">
            {apartment.description_3}
          </p>
        </div>

        <div className="md:w-1/2 lg:pl-[144px]">
          <h2 className="pl-4 font-raleway font-bold text-xl md:text-2xl">Servicios</h2>
          <div className="grid grid-cols-2 px-5 my-5 md:gap-x-0">
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 md:text-base">
              <img src={wifiIcon} className="h-5 mr-2 md:h-6 md:mr-3" alt="Wifi Icon" />
              Wifi:&nbsp;<strong>{feat.wifi ? "SI" : "NO"}</strong>
            </p>
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 md:text-base">
              <img src={kitchenIcon} className="h-5 mr-2 md:h-6 md:mr-3" alt="Kitchen Icon" />
              Cocina:&nbsp;<strong>{feat.kitchen ? "SI" : "NO"}</strong>
            </p>
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 md:text-base">
              <img
                src={temperatureIcon}
                className="h-5 mr-2 md:h-6 md:mr-3"
                alt="Temperature Icon"
              />
              Calefacción:&nbsp;<strong>{feat.heating ? "SI" : "NO"}</strong>
            </p>
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 md:text-base">
              <img src={parkingIcon} className="h-6 mr-1 md:h-7 md:mr-2" alt="Parking Icon" />
              Estacionamiento:&nbsp;<strong>{feat.parking ? "SI" : "NO"}</strong>
            </p>
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 md:text-base">
              <img src={petsIcon} className="h-5 mr-2 md:h-6 md:mr-3" alt="Pets Icon" />
              Mascotas:&nbsp;<strong>{feat.pets_allowed ? "SI" : "NO"}</strong>
            </p>
            <p className="font-raleway text-sm text-gray-600 font-medium flex flex-row items-center justify-start mb-3 md:text-base">
              <img src={smokingIcon} className="h-5 mr-2 md:h-6 md:mr-3" alt="Smoking Icon" />
              Fumar:&nbsp;<strong>{feat.smoking_allowed ? "SI" : "NO"}</strong>
            </p>
          </div>
        </div>

        {/* Se llama al componente Cards y se le pasa el id del apartment actual para mostrar los otros apartments salteando el actual */}
        <div className="w-full border-t-2 border-t-[#4E6E82] bg-[#f0f4f4]">
          <Cards apartments={apartments} id={Number(id)} />
        </div>
      </div>
    );
  }
}

export default Apartment;
