import React, { useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { restoredPhotos } from "../data/data";

const cursorStyle =
  "absolute flex left-[5px] h-[30px] w-[60px] cursor-pointer  rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-blue-500/50  hover:bg-gradient-to-br";
const cursorBGStyle =
  " bg-white/10 bottom-[-28px]  backdrop-blur-[2px] rounded-[14px] h-[40px] w-[70px] rounded-full shadow-xl shadow-black/50";
const buttonStyle =
  "h-[40px] text-white text-2xl pt-0.5 justify-center rounded-[15px] font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ";

const ImageRestoration = ({ beforeImage, afterImage }) => {
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
        src={beforeImage}
        className="absolute h-full object-cover"
        alt="before"
      />
      <div className="absolute h-full overflow-hidden">
        <img
          src={afterImage}
          className="h-full object-cover"
          alt="after"
          style={{ userSelect: "none", clipPath: `inset(0 0 0 ${sliderX})` }}
        />
      </div>
      <div
        id="cursorButtonTop"
        className={`relative  ${cursorBGStyle}`}
        style={{ left: `calc(${sliderX} - 32px)`, userSelect: "none" }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className={`bottom-[5px] ${cursorStyle}`}></div>
      </div>
      <div
        id="cursorButtonBottom"
        className={`relative  ${cursorBGStyle}`}
        style={{ left: `calc(${sliderX} - 32px)`, bottom: "-500px", userSelect: "none" }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className={`bottom-[5px] ${cursorStyle}`}></div>
      </div>
    </div>
  );
};

const Restoration = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <span className={`px-2 ${buttonStyle}`}>
          How restoration looks like
        </span>
      </div>
      <div className="px-2 rounded-2xl flex justify-center p-2 gap-3">
        <ImageRestoration
          beforeImage={restoredPhotos[0].img}
          afterImage={restoredPhotos[1].img}
        />
         <ImageRestoration
          beforeImage={restoredPhotos[2].img}
          afterImage={restoredPhotos[3].img}
        />
        <ImageRestoration
          beforeImage={restoredPhotos[4].img}
          afterImage={restoredPhotos[5].img}
        />
      </div>
    </div>
  );
};

export default Restoration;
