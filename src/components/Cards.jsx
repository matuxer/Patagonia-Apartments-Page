import React from "react";
import Card from "./Card";

function Cards({ apartments, id }) {
  return (
    <div>
      {apartments?.map((el) => {
        if (el.id !== id) {
            return <Card props={el} key={el.id} />;
        }
      })}
    </div>
  );
}

export default Cards;
