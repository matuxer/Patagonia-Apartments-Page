import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../db.json";
import LocationIcon from "../images/location-pin-alt-1-svgrepo-com.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "../components/CarouselComponent";

function Apartment() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let info = data[0].apartments.filter((el) => {
      return el.id === Number(id);
    });
    setApartment(info[0]);

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
      <div className="pt-[56px] h-[700px] md:pt-[80px]">
        <div className="px-2">
          <h1 className="font-bold font-raleway text-xl mt-3">
            {apartment.name}
          </h1>
          <p className="text-sm font-medium font-raleway my-2 flex flex-row items-center justify-start">
            <img src={LocationIcon} className="h-5 mr-1" alt="..." />
            {apartment.location}
          </p>
        </div>
        <div className="block px-1">
          <CarouselComponent images={apartment.images} />
        </div>
      </div>
    );
  }
}

export default Apartment;
