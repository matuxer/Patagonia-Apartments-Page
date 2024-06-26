import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowLeft from "../images/arrow-sm-left-svgrepo-com.svg";
import ArrowRight from "../images/arrow-sm-right-svgrepo-com.svg";

function CarouselComponent({ images, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const [page, setPage] = useState(0)

  /* Funciones para controlar si el carrusel tiene hover */
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleNotHover = () => {
    setIsHovered(false);
  };

  /* Funciones para renderizar flechas de navegación del carrusel personalizadas */
  const renderArrowPrev = (clickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        className="absolute left-0 hidden top-[40%] cursor-pointer w-9 p-0 h-9 md:block md:!bg-white md:rounded-r-full lg:top-[45%]"
        onClick={clickHandler}
        title={label}
      >
        <img src={ArrowLeft} alt="arrowLeft" className="h-full" />
      </button>
    );

  const renderArrowNext = (clickHandler, hasNext, label) =>
    hasNext && (
      <button
        className="absolute right-0 hidden top-[40%] cursor-pointer w-9 p-0 h-9 md:block md:!bg-white md:rounded-l-full lg:top-[45%]"
        onClick={clickHandler}
        title={label}
      >
        <img src={ArrowRight} alt="arrowRight" className="h-full" />
      </button>
    );

  /* Función para renderizar indicadores de navegación del carrusel personalizados */
  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          className={`bg-[#4E6E82] w-[7px] h-[7px] inline-block rounded-full cursor-pointer mr-[5px] sm:w-[10px] sm:h-[10px] sm:mx-[5px] md:ml-0 lg:ml-[5px] `}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        className={`bg-[#dcdcdc] w-[7px] h-[7px] inline-block rounded-full cursor-pointer mr-[5px] sm:w-[10px] sm:h-[10px] sm:ml-[5px] md:ml-0 lg:ml-[5px] `}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  /* Cada vez que se renderiza un Carrusel se devuelve a la primer página para evitar errores */
  useEffect(() => {
    setPage(0)
  }, [id])
  

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleNotHover}
      className="relative"
    >
      <Carousel
        selectedItem={page}
        onChange={(index) => setPage(index)}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        renderIndicator={renderCustomIndicator}
        showArrows={isHovered ? true : false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
      >

        {/* Se usa el método map para iterar el array de imagenes y crear un elemento img para cada una */}
        {images.map((el) => {
          return (
            <img
              className="mb-10 rounded-md"
              key={el}
              src={require(`../${el}`)}
              alt="..."
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
