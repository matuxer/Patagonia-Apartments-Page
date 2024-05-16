import React from "react";
import styles from "./Card.module.css"

function Card({ props }) {
    console.log(props.images[0]);
  return (
    <div className="bg-red-600 my-5">
        <img src={props.images[0]} alt={props.name} />
        <h1>{props.name}</h1>
        <p>{props.location}</p>
    </div>
  );
}

export default Card;
