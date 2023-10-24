import React, { useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { restoredPhotos } from "../data/data";

const cursorStyle = 'absolute -left-[32px] flex h-[30px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-lg shadow-blue-500/50  hover:bg-gradient-to-br border-[3px]';
const buttonStyle = 'cursor-pointer h-[40px] text-white text-2xl pt-0.5 justify-center rounded-[15px] font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ';

const Restoration = () => {
  const ImageRestorationLeft = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [sliderX, setSliderX] = useState("50%");

    const handleStart = () => {
      setIsDragging(true);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    const handleMove = (e) => {
      if (isDragging) {
        const container = e.currentTarget;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const offsetX = clientX - container.getBoundingClientRect().left;
        setSliderX(`${(offsetX / container.offsetWidth) * 100}%`);
      }
    };

    return (
      <div
        className="relative h-[620px] w-[800px] overflow-hidden object-cover rounded-2xl"
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
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
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div className={`bottom-[-50px] ${cursorStyle}`}>
          </div>

          <div className={`bottom-[-590px] ${cursorStyle}`}>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
      <span className={`px-2 ${buttonStyle}`}>
          How restoration looks like
        </span></div>
      <div className="px-2 rounded-2xl flex justify-center p-2">
        <ImageRestorationLeft />
      </div>
    </div>
  );
};

export default Restoration;
