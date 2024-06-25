import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../db.json";
import LocationIcon from "../images/location-pin-alt-1-svgrepo-com.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "../components/CarouselComponent";
import RulerIcon from "../images/ruler-svgrepo-com.svg";
import BedIcon from "../images/bed-svgrepo-com.svg";
import Cards from "../components/Cards";

function Apartment() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let info = data[0].apartments.filter((el) => {
      return el.id === Number(id);
    });
    setApartment(info[0]);
    setApartments(data[0].apartments);
    setLoading(false);
  }, [id]);

  if (loading) {
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

          {/* IMAGE CAROUSEL */}
          <div className="block px-3 md:pt-5 md:w-1/2">
            <CarouselComponent images={apartment.images} id={id} />
          </div>
        </div>

        {/* APARTMENT INFO MOBILE */}
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

        {/* CARDS */}
        <div className="w-full border-t-2 border-t-[#4E6E82] bg-[#f0f4f4]">
          <Cards apartments={apartments} id={Number(id)} />
        </div>
      </div>
    );
  }
}

export default Apartment;
