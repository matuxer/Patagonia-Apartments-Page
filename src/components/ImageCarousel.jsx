import { Carousel, IconButton } from '@material-tailwind/react';
import React from 'react'
import LeftArrow from "../images/arrow-sm-left-svgrepo-com.svg";
import RightArrow from "../images/arrow-sm-right-svgrepo-com.svg";

function ImageCarousel({slides}) {
  return (
    <Carousel
          className="rounded-xl h-72"
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-2 bg-white" : "w-1 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {slides?.map((image, i) => {
            return (
              <img
                src={require(`../${image}`)}
                className="h-full w-full object-cover"
                alt={i}
              />
            );
          })}
        </Carousel>
  )
}

export default ImageCarousel