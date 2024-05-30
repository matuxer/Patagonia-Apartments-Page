import React from "react";
import Card from "./Card";

function Cards({ apartments, id }) {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row md:gap-5 md:px-4">
      {apartments?.map((el) => {
        if (el.id !== id) {
            return <Card props={el} key={el.id} />;
        } else {
          return <></>
        }
      })}
    </div>
  );
}

export default Cards;
