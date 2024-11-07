import React, { useEffect, useState } from "react";
import Card from "./Card";

/* Funcion que randomiza los apartment que se van a mostrar segun la cantidad indicada (numElements) y que apartment excluir (excludeId) */
const getRandomElements = (array, numElements, excludeId) => {
  let result = [];
  let _array = array.filter((apartment) => apartment.id !== excludeId);
  while (result.length < numElements && _array.length > 0) {
    let randomIndex = Math.floor(Math.random() * _array.length);
    result.push(_array.splice(randomIndex, 1)[0]);
  }
  return result;
};

/* El componente Cards recibe un array con los apartment para renderizar una Card a cada uno y un id para filtrar apartments especificos */
function Cards({ apartments, id, filters }) {
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [loading, setLoading] = useState(true);


  /* El useEffect() se va a ejecutar cada vez que las variables filters, id o apartments cambien */
  useEffect(() => {
    const areAllFiltersFalse = () => {
      return Object.values(filters).every((value) => value === false);
    };

    const filterApartments = () => {

      /* Si todos los filtros estan desactivados se devuelven todos los apartments */
      if (areAllFiltersFalse()) {
        return apartments;
      }

      /* Se filtran los apartment segun cuales filtros estan en true */
      return apartments.filter((apartment) => {
        for (let key in filters) {
          if (filters[key] === true && apartment.features[key] !== true) {
            return false;
          }
        }
        return true;
      });
    };

    /* Si existe un id (página de Apartment) solo se mostrara 3 apartments aleatorios excluyendo el apartment en el que se encuentra la página en el momento. Sino, si no exite id (página de Home) se muestran todos los apartment respetando los filtros si es que hay */
    if (id) {
      setFilteredApartments(getRandomElements(apartments, 3, id));
    } else {
      const filtered = filterApartments();
      setFilteredApartments(filtered);
    }

    setLoading(false);
  }, [filters, apartments, id]);

  if (loading) {
    /* Mientras la página esta obteniendo los datos del apartment se muestra un mensaje de carga */
    return (
      <div id="top" className="pt-[56px] h-[700px] md:pt-[80px]">
        Loading
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center py-4 gap-4 md:px-4 md:gap-0 lg:flex-row lg:gap-10 lg:px-20 lg:flex-wrap ">
        {/* El método map va a iterar el array de filteredApartments renderizando un componente Card para cada uno */}
        {filteredApartments?.map((el) => {
          return <Card props={el} key={el.id} />;
        })}
      </div>
    );
  }
}

export default Cards;
