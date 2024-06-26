import React from "react";
import { Link } from "react-router-dom";
import CardArrow from "../images/arrow-narrow-right-svgrepo-com.svg";

function Card({ props }) {

  /* Se declara un estilo para generar una imagen de fondo variable */
  const myStyle = {
    backgroundImage: `url(${require(`../${props.images[0]}`)})`,
    height: "250px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "22px 22px 0 0",
  };

  /* Cada Card es un elemento Link de que lleva a la página de apartment segun el id */
  return (
    <Link to={`/apartment/${props.id}`} className="group bg-white rounded-t-3xl rounded-b-md mx-14 w-11/12  cursor-pointer flex flex-col justify-between md:mx-0 md:my-5 md:w-10/12">
      <div
        style={myStyle}
        className="duration-200 ease-in-out group-hover:brightness-75"
      ></div>
      <div className="py-4 px-5 w-fullh flex flex-row items-center justify-between md:h-[96px] ">
        <div className="w-full md:w-5/6">
          <h1 className="font-raleway font-bold">{props.name}</h1>
          <p className="font-raleway font-semibold text-sm text-gray-500">
            {props.location}
          </p>
        </div>
        <img className="h-7 mr-2 ease-in-out duration-200 group-hover:mr-0" src={CardArrow} alt="arrow-right" />
      </div>
    </Link>
  );
}


export default Card;
