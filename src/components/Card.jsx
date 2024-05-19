import React from "react";
import styles from "./Card.module.css";

function Card({ props }) {
  console.log(props.images[0]);

  const myStyle = {
    backgroundImage: `url(${props.images[0]})`,
    height: "250px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "24px 24px 0 0",
  };
  return (
    <div className="bg-white my-5 rounded-t-3xl rounded-b-md mx-14 w-10/12 md:mx-0 md:h-[346px]">
      <div style={myStyle}></div>
      <div className="py-4 px-5 w-4/5">
        <h1 className="font-raleway font-bold">{props.name}</h1>
        <p className="font-raleway font-medium text-sm text-gray-400">{props.location}</p>
      </div>
    </div>
  );
}

export default Card;
