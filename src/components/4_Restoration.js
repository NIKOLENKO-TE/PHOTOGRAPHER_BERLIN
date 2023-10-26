import React, { useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { restoredPhotos } from "../data/data";
import arrow from "./img/arrow.png";

const cursorStyle =
  "absolute flex left-[8px] ml-[105px] h-[30px] w-[60px] cursor-pointer rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-blue-500/50  hover:bg-gradient-to-br ";
const cursorBGStyle =
  "bg-white/10 top-[10px] ml-[-90px] backdrop-blur-[2px] rounded-[14px] h-[35px] w-[260px] rounded-full shadow-xl shadow-black/50";
const buttonStyle =
  "h-[40px] text-white text-2xl pt-0.5 justify-center rounded-[15px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ";

const ImageRestoration = ({ beforeImage, afterImage, onClick }) => {
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

  const preventRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="restored_images" // Блок обоих фотографий
      className="relative h-[620px] w-[800px] overflow-hidden object-cover rounded-2xl cursor-pointer"
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onContextMenu={preventRightClick}
      onClick={onClick}
    >
      <img // левое фото
        src={beforeImage}
        className="absolute h-full object-cover select-none"
        alt="before left"
      />

      <div className="absolute h-full overflow-hidden">
        <img // правое фото
          src={afterImage}
          className={`h-full object-cover `}
          alt="after right"
          style={{
            userSelect: "none",
            clipPath: `inset(0 0 0 ${sliderX})`,
          }}
        />
      </div>

      <div
  id="cursorButtonTop" // Верхний слайдер блок
  className={`relative select-none mt-[550px] ${cursorBGStyle}`}
  style={{ left: `calc(${sliderX} - 55px)`, userSelect: "none" }}
  onMouseDown={handleStart}
  onTouchStart={handleStart}
>
  <div className="flex">
    <span className="ml-[14px] my-[-2px] text-white text-[25px]">
      BEFORE            AFTER
    </span>
  </div>
  <div className={`bottom-[2.5px] ml-[102px] ${cursorStyle}`}> {/* Верхний синий */}
    <img  
      src={arrow}
      alt="Arrow"
      className="h-5 mt-[5.5px] ml-[5px] pointer-events-none"
    />{/* Верхний синий стрелки */}
  </div>
</div>
      {/* <div
        id="cursorButtonBottom" // Нижний слайдер блок
        className={`relative select-none mt-[8px] ${cursorBGBottomStyle}`}
        style={{
          left: `calc(${sliderX} - 34px)`,
          bottom: "-530px",
          userSelect: "none",
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className={`bottom-[5px] -ml-[3px] ${cursorStyle}`}>
          <img
            src={arrow}
            alt="Arrow"
            className="h-5 mt-[5.5px] ml-[4.5px] pointer-events-none"
          />
        </div>
      </div> */}
    </div>
  );
};

const Restoration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    // Вычисляем следующий индекс, с учетом цикличности
    const nextIndex = (currentIndex + 2) % restoredPhotos.length;
    setCurrentIndex(nextIndex);
  };

  const currentImages = {
    beforeImage: restoredPhotos[currentIndex].img,
    afterImage: restoredPhotos[currentIndex + 1].img,
  };

  return (
    <div className="pb-8">
      <div className="flex flex-col items-center justify-center">
        <span
          className={`px-2 cursor-pointer ${buttonStyle}`}
          onClick={handleClick}
        >
          PRESS to change photo
        </span>
      </div>
      <div className="rounded-2xl">
        <div className="px-2 flex justify-center p-2 gap-3">
          <ImageRestoration
            className="hidden ssm:flex w-full"
            beforeImage={currentImages.beforeImage}
            afterImage={currentImages.afterImage}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Restoration;
