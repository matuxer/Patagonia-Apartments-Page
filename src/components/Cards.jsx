import React from "react";
import Card from "./Card";

function Cards({ apartments, id }) {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-4 md:px-4 md:gap-0 lg:flex-row lg:gap-10 lg:px-20 ">
      {apartments?.map((el) => {
        if (el.id !== id) {
            return <Card props={el} key={el.id} />;
        }
      })}
    </div>
  );
}

export default Cards;
