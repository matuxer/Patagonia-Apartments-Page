import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../db.json";
import ImageCarousel from "../components/ImageCarousel";

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
      <div className="pt-[76px] px-6 h-[700px] md:pt-[100px]">
        <h1 className="font-bold font-raleway text-2xl">{apartment.name}</h1>
        <p className="font-raleway font-medium mb-2">{apartment.location}</p>
        <ImageCarousel slides={apartment.images} />
      </div>
    );
  }
}

export default Apartment;
