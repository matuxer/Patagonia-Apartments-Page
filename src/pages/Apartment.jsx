import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../db.json";
import PhotoAlbum from "react-photo-album";
import LocationIcon from "../images/location-pin-alt-1-svgrepo-com.svg";

function Apartment() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let info = data[0].apartments.filter((el) => {
      return el.id === Number(id);
    });
    setApartment(info[0]);
    let imgPromises = info[0].images.map((el) => {
      return new Promise((resolve) => {
        const elImage = new Image();
        elImage.src = require(`../${el}`);

        elImage.onload = function () {
          resolve({
            src: elImage.src,
            width: elImage.width,
            height: elImage.height,
          });
        };
      });
    });
    Promise.all(imgPromises).then((imgArr) => {
      setPhotos(imgArr);
      setLoading(false);
    });
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
            <img src={LocationIcon} className="h-5 mr-1" alt="..." />{apartment.location}
          </p>
        </div>
        <div className="overflow-y-scroll h-[300px] px-2 ">
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      </div>
    );
  }
}

export default Apartment;
