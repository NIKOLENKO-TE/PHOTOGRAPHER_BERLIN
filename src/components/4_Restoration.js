import React, { useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { restoredPhotos } from "../data/data";
import { orderRestorePhotos } from "../data/data";
import arrow from "./img/arrow.png";

const cursorStyle =
  "absolute flex left-[8px] ml-[105px] h-[30px] w-[60px] cursor-pointer rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-blue-500/50  hover:bg-gradient-to-br ";
const cursorBGStyle =
  "bg-white/1 top-[10px] ml-[-90px] backdrop-blur-[40px] rounded-[14px] h-[35px] w-[250px] rounded-xl shadow-xl shadow-black/50";
const buttonStyle =
  "h-[40px] text-white text-2xl pt-0.5 justify-center rounded-[15px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ";

const ImageRestoration = ({ beforeImage, afterImage, onClick }) => {
  const handleClick = onClick;
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
      id="restored_images"
      className="relative ssm:h-[400px] sm:h-[620px] w-[820px] overflow-hidden object-cover rounded-2xl cursor-pointer"
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onContextMenu={preventRightClick}
      onClick={handleClick}
    >
      <img
        src={beforeImage}
        className="absolute h-full object-cover select-none"
        alt="before left"
      />
      <div className="absolute h-full overflow-hidden">
        <img
          src={afterImage}
          className={`h-full object-cover `}
          alt="after right"
          style={{
            userSelect: "none",
            clipPath: `inset(0 0 0 ${sliderX})`,
            pointerEvents: "auto",
          }}
        />
      </div>
      <div
        id="cursorButtonTop"
        className={`relative select-none ssm:mt-[335px] sm:mt-[550px] ${cursorBGStyle}`}
        style={{ left: `calc(${sliderX} - 45px)`, userSelect: "none" }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="flex">
          <span className="ml-[10px] my-[-2px] text-white text-[25px]">
            BEFORE           AFTER
          </span>
        </div>
        <div
          className={`bottom-[2.5px] ml-[97px] border ${cursorStyle}`}
        >
          <img
            src={arrow}
            alt="Arrows"
            className="h-5 mt-[4px] ml-[3.5px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

const Restoration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImages, setCurrentImages] = useState({
    beforeImage: restoredPhotos[currentIndex].img,
    afterImage: isHovered
      ? orderRestorePhotos[4].img
      : restoredPhotos[currentIndex + 1].img,
  });

  const handleClick = () => {
    const nextIndex = (currentIndex + 2) % restoredPhotos.length;
    setCurrentIndex(nextIndex);
    setCurrentImages({
      beforeImage: restoredPhotos[nextIndex].img,
      afterImage: isHovered
        ? orderRestorePhotos[4].img
        : restoredPhotos[nextIndex + 1].img,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="pb-8">
      <div className="flex flex-col items-center justify-center">
        <button
          className={`px-2 cursor-pointer ${buttonStyle}`}
          onClick={handleClick}
        >
          PRESS to change photo
        </button>
      </div>
      <div className="w-flex h-flex max-w-auto mt-2 ssm:mx-2 md:mx-4 grid ssm:grid-cols-1 lg:grid-cols-2  bg-white/50 justify-between rounded-2xl shadow-xl p-2 ">
        <div className="ssm:md-1 md:px-2 py-auto sm:p-1 md:p-2 " style={{ flex: 1 }}>
          <div className="flex flex-column justify-center align-center gap-3">
            <ImageRestoration
              beforeImage={currentImages.beforeImage}
              afterImage={currentImages.afterImage}
              onClick={handleClick}
            />
          </div>
        </div>
        <div id="IMAGE_RESTORATION" className="flex-col grid m-2 items-center">
          <h1 className="text-center ssm:text-2xl md:text-4xl font-bold select-none">
            IMAGE RESTORATION
          </h1>
          <p className="pr-3 ssm:text-xl md:text-2xl text-justify select-none">
            I offer restoration services for old photographs, film negatives and
            much more. Restoration is simple, restoration is complex with
            additional drawing, coloring of photographs, Restoration of
            photographs damaged by mold and moisture. I offer color correction,
            adjusting white balance, saturation and contrast, restoring the
            brightness of colors, reconstructing missing details, transforming
            your black and white photo into a bright image with beautiful
            colors. Restoring old photographs is what I am most skilled at.
            Restoring images that have been torn or damaged by children,
            weather, nature or animals. Removing stains, scratches and defects.
            Adjusting sharpness.
          </p>
          <div
            id="services_buttons"
            className="ssm:h-[90px] sm:h-[110px] flex justify-center items-center "
          >
            <div
              id="services_buttons_background"
              className="w-full max-w-[800px] grid grid-cols-5 bg-white/70 rounded-2xl shadow-xl py-2 ssm:px-2 md:px-5 lg:px-7"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <img
                src={orderRestorePhotos[0].img}
                alt="Send"
                className="ssm:h-[60px] sm:h-[80px] mt-[3px] cursor-pointer"
                onClick={handleFileUpload}
              />
              <img
                src={orderRestorePhotos[1].img}
                alt="Text"
                className="ssm:h-[60px] sm:h-[80px] mt-[3px]"
              />
              <img
                src={orderRestorePhotos[2].img}
                alt="Price"
                className="ssm:h-[60px] sm:h-[80px] mt-[3px]"
              />
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="ssm:h-[60px] sm:h-[80px] mt-[3px]"
              >
                {isHovered ? (
                  <img
                    src={orderRestorePhotos[4].img}
                    alt="Alternate"
                    className="ssm:h-[60px] sm:h-[80px] mt-[3px]"
                  />
                ) : (
                  <img
                    src={orderRestorePhotos[3].img}
                    alt="Send"
                    className="ssm:h-[60px] sm:h-[80px] mt-[3px]"
                  />
                )}
              </div>
              <img
                src={orderRestorePhotos[5].img}
                alt="Shipping"
                className="ssm:h-[60px] sm:h-[80px] mt-[3px]"
              />
            </div>
          </div>
        </div>

      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default Restoration;