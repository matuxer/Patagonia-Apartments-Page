import React from "react";
import { Link } from "react-router-dom";

function Card({ props }) {
  const myStyle = {
    backgroundImage: `url(${props.images[0]})`,
    height: "250px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "24px 24px 0 0",
  };
  return (
    <Link to={`/apartment/${props.id}`} className="group bg-white my-5 rounded-t-3xl rounded-b-md mx-14 w-10/12 cursor-pointer flex flex-col justify-evenly md:mx-0 md:h-[346px]">
      <div
        style={myStyle}
        className="duration-200 ease-in-out group-hover:brightness-75"
      ></div>
      <div className="py-4 px-5 w-full flex flex-row items-center justify-between md">
        <div className="w-full md:w-5/6">
          <h1 className="font-raleway font-bold">{props.name}</h1>
          <p className="font-raleway font-medium text-sm text-gray-400">
            {props.location}
          </p>
        </div>
        <img className="h-7 mr-2 ease-in-out duration-200 group-hover:mr-0" src="/images/arrow-narrow-right-svgrepo-com.svg" alt="arrow-right" />
      </div>
    </Link>
  );
}

export default Card;
