import React, { useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { restoredPhotos } from "../data/data";

const buttonStyle = 'absolute -left-[32px] flex h-[30px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-lg shadow-blue-500/50  hover:bg-gradient-to-br border-[3px]';

const Restoration = () => {
  const ImageRestoration1 = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [sliderX, setSliderX] = useState("50%");

    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const container = e.currentTarget;
        const offsetX = e.clientX - container.getBoundingClientRect().left;
        setSliderX(`${(offsetX / container.offsetWidth) * 100}%`);
      }
    };

    return (
      <div
        className="relative h-[620px] w-[800px] overflow-hidden object-cover rounded-2xl"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img
          src={restoredPhotos[0].img}
          className="absolute h-full object-cover"
          alt="1"
        />
        <div className="absolute h-full overflow-hidden">
          <img
            src={restoredPhotos[1].img}
            className="h-full object-cover"
            alt="2"
            style={{ clipPath: `inset(0 0 0 ${sliderX})` }}
          />
        </div>
        <div
          className="relative w-2 bg-white "
          style={{ left: sliderX, userSelect: "none" }}
          onMouseDown={handleMouseDown}
        >
          <div className={`bottom-[-50px] ${buttonStyle}`}>
          </div>

          <div className={`bottom-[-590px] ${buttonStyle}`}>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 rounded-2xl ">
      <ImageRestoration1 />
    </div>
  );
};

export default Restoration;
