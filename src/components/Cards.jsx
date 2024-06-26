import React from "react";
import Card from "./Card";

/* El componente Cards recibe un array con los apartment para renderizar una Card a cada uno y un id para filtrar apartments especificos */
function Cards({ apartments, id }) {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-4 md:px-4 md:gap-0 lg:flex-row lg:gap-10 lg:px-20 ">
      
      {/* El método map va a iterar el array de apartments renderizando un componente Card para cada uno */}
      {apartments?.map((el) => {
        if (el.id !== id) {
            return <Card props={el} key={el.id} />;
        }
      })}
    </div>
  );
}

export default Cards;
