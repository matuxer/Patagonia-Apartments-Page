import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowLeft from "../images/arrow-sm-left-svgrepo-com.svg";
import ArrowRight from "../images/arrow-sm-right-svgrepo-com.svg";

function CarouselComponent({ images }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleNotHover = () => {
    setIsHovered(false);
  };

  const renderArrowPrev = (clickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        className="absolute left-0 hidden top-[35%] cursor-pointer w-7 p-0 h-7"
        onClick={clickHandler}
        title={label}
      >
        <img src={ArrowLeft} alt="arrowLeft" className="h-full" />
      </button>
    );

  const renderArrowNext = (clickHandler, hasNext, label) =>
    hasNext && (
      <button
        className="absolute right-0 hidden top-[35%] cursor-pointer w-7 p-0 h-7"
        onClick={clickHandler}
        title={label}
      >
        <img src={ArrowRight} alt="arrowRight" className="h-full" />
      </button>
    );


  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          className={`bg-[#4E6E82] w-[10px] h-[10px] inline-block rounded-full cursor-pointer mr-[5px] sm:mx-[5px]`}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }
    return (
      <li
        className={`bg-[#dcdcdc] w-[10px] h-[10px] inline-block rounded-full cursor-pointer mr-[5px] sm:mx-[5px]`}
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

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleNotHover}
      className="relative"
    >
      <Carousel
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
        {images.map((el) => {
          return (
            <img
              className="mb-10 rounded-md"
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
