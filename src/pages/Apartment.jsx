import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../db.json";

function Apartment() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    let info = data[0].apartments.filter((el) => {
      return el.id === Number(id)
    })
    setApartment(info[0])
    setLoading(false)
  }, [id])
  

  if (loading) {
    return (
      <div id="top" className="pt-[56px] h-[700px] md:pt-[80px]">Loading</div>
    )
  } else {
    return (
      <div className="pt-[56px] h-[700px] md:pt-[80px]">
        <p>{apartment.name}</p>
        <img className="h-52" src={require(`../${apartment.images[0]}`)} alt="" />
      </div>
    );
  }
}

export default Apartment;
