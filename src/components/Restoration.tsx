// Restoration.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  restoredPhotos,
  orderRestorePhotos,
} from "../data/data";
import arrow from "./img/arrow.png";

const button_title_style =
  "ssm:-mt-3 sm:-mt-1 md:-mt-0 w-full justify-center ssm:h-[29px] sm:h-[31px] md:h-[38px] ssm:text-[22px] md:text-[26px] xl:text-[30px] flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[13px] md:rounded-[15px]";
const arrows_style =
  "absolute flex left-[8px] ml-[105px] h-[30px] w-[60px] cursor-pointer rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-blue-500/50 hover:bg-gradient-to-br";
const before_after_style =
  "top-[10px] ml-[-90px] backdrop-blur-[40px] rounded-[14px] h-[35px] w-[250px] rounded-[55px] shadow-xl shadow-black/50 ";

interface ImageRestorationProps {
  beforeImage: string;
  afterImage: string;
  onClick: () => void;
}

const ImageRestoration: React.FC<ImageRestorationProps> = ({
  beforeImage,
  afterImage,
  onClick,
}): JSX.Element => {
  const { t } = useTranslation("ImageRestoration");
  const handleClick = onClick;
  const [isDragging, setIsDragging] = useState(false);
  const [sliderX, setSliderX] = useState("50%");

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (e: any) => {
    if (isDragging) {
      const container = e.currentTarget;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const offsetX = clientX - container.getBoundingClientRect().left;
      setSliderX(`${(offsetX / container.offsetWidth) * 100}%`);
    }
  };

  const preventRightClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      id="before_container"
      className="relative ssm:h-[440px] sm:h-[620px] w-[820px] overflow-hidden object-cover rounded-2xl cursor-pointer"
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onContextMenu={preventRightClick}
      onClick={handleClick}
      data-testId="image-restoration"
    >
      <img
        id="beforeImage"
        src={beforeImage}
        className="absolute h-full object-cover select-none"
        alt="before"
        data-testId="before-image"
      />
      <div id="after_container" className="absolute h-full overflow-hidden">
        <img
          id="afterImage"
          src={afterImage}
          className={`h-full object-cover `}
          alt="after"
          style={{
            userSelect: "none",
            clipPath: `inset(0 0 0 ${sliderX})`,
            pointerEvents: "auto",
          }}
          data-testId="after-image"
        />
      </div>
      <div
        id="slider_before_after"
        className={`relative select-none ssm:mt-[365px] sm:mt-[550px] ${before_after_style}`}
        style={{ left: `calc(${sliderX} - 45px)`, userSelect: "none" }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="flex">
          <span className="ml-[10px] my-[-2px] text-white text-[25px]">
            {t("before_after_text")}
          </span>
        </div>
        <div className={`bottom-[2.5px] ml-[97px] border ${arrows_style}`}>
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

const Restoration: React.FC = (): JSX.Element => {
  const { t } = useTranslation("Restoration");
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
  interface PaginationDotsProps {
    count: number;
    activeIndex: number;
  }
  const PaginationDots: React.FC<PaginationDotsProps> = ({
    count,
    activeIndex,
  }) => {
    const dots = Array(Math.ceil(count / 2)).fill(null);

    return (
      <div className="flex justify-center mt-4">
        {dots.map((_, index) => (
          <div
            key={index}
            className={`w-5 h-3 mx-1 rounded-full ${
              Math.floor(activeIndex / 2) === index
                ? "bg-blue-700 bg-opacity-90 backdrop-blur-[2px]"
                : "bg-white bg-opacity-40 backdrop-blur-[2px]"
            }`}
            data-testId={`pagination-dot-${index}`}
          ></div>
        ))}
      </div>
    );
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleFileUpload = () => {
    document.getElementById("fileInput")?.click();
  };
  const OrderSteps = () => {
    const [progress, setProgress] = useState(0);
    const [label, setLabel] = useState("Place order");

    const stepPositions: {
      [key: string]: { left: string; transform: string }[];
    } = {
      sm: [
        { left: "0%", transform: "translateX(1%)" },
        { left: "25%", transform: "translateX(17%)" },
        { left: "50%", transform: "translateX(30%)" },
        { left: "75%", transform: "translateX(58%)" },
        { left: "100%", transform: "translateX(75%)" },
      ],
      md: [
        { left: "0%", transform: "translateX(1%)" },
        { left: "25%", transform: "translateX(20%)" },
        { left: "50%", transform: "translateX(35%)" },
        { left: "75%", transform: "translateX(64%)" },
        { left: "100%", transform: "translateX(82%)" },
      ],
      lg: [
        { left: "0%", transform: "translateX(1%)" },
        { left: "25%", transform: "translateX(22%)" },
        { left: "50%", transform: "translateX(40%)" },
        { left: "75%", transform: "translateX(67%)" },
        { left: "100%", transform: "translateX(88%)" },
      ],
      xl: [
        { left: "0%", transform: "translateX(1%)" },
        { left: "25%", transform: "translateX(23%)" },
        { left: "50%", transform: "translateX(36%)" },
        { left: "75%", transform: "translateX(61%)" },
        { left: "100%", transform: "translateX(81%)" },
      ],
      xxl: [
        { left: "0%", transform: "translateX(1%)" },
        { left: "25%", transform: "translateX(23%)" },
        { left: "50%", transform: "translateX(40%)" },
        { left: "75%", transform: "translateX(64%)" },
        { left: "100%", transform: "translateX(85%)" },
      ],
      xxxl: [
        { left: "0%", transform: "translateX(1%)" },
        { left: "25%", transform: "translateX(24%)" },
        { left: "50%", transform: "translateX(42%)" },
        { left: "75%", transform: "translateX(67%)" },
        { left: "100%", transform: "translateX(88%)" },
      ],
    };

    const screenSizeOptions = {
      sm: 550,
      md: 700,
      lg: 1024,
      xl: 1280,
      xxl: 1500,
      xxxl: Infinity,
    };
    let screenSize = "ssm";
    for (const [size, width] of Object.entries(screenSizeOptions)) {
      if (window.innerWidth <= width) {
        screenSize = size;
        break;
      }
    }
    const textPosition = stepPositions[screenSize][Math.floor(progress / 25)];
    useEffect(() => {
      const timer = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 25);
          switch (progress) {
            case 0:
              setLabel("Text me");
              break;
            case 25:
              setLabel("Make payment");
              break;
            case 50:
              setLabel("See result");
              break;
            case 75:
              setLabel("Get result");
              break;
            default:
              break;
          }
        } else {
          setProgress(0);
          setLabel("Place order");
        }
      }, 2000);

      return () => {
        clearInterval(timer);
      };
    }, [progress]);

    return (
      <div className="pb-1 md:-mx-3 lg:-mx-5">
        <div className="text-lg font-medium -pt-1" style={textPosition}>
          {label}
        </div>
        <div className="w-full h-6 px-1 bg-blue-200 flex items-center justify-left rounded-full shadow-sm">
          <div
            className="h-4 bg-blue-600 rounded-full shadow-xl"
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    );
  };

  const orderStepsIcons = (
    <div
      id="services_buttons"
      className="ssm:h-[120px] sm:h-[120px] flex justify-center items-center "
    >
      <div className=" w-full max-w-[800px] grid grid-row-2 bg-white/70 rounded-2xl shadow-xl py-1 ssm:px-2 md:px-5 lg:px-7">
        <div
          id="services_buttons_background"
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img
            src={orderRestorePhotos[0].img}
            alt="Send"
            className="ssm:h-[60px] h-[80px] mt-[3px] cursor-pointer"
            onClick={handleFileUpload}
            data-testId="send-image-button"
          />
          <img
            src={orderRestorePhotos[1].img}
            alt="Text"
            className="ssm:h-[60px] h-[80px] mt-[3px]"
          />
          <img
            src={orderRestorePhotos[2].img}
            alt="Price"
            className="ssm:h-[60px] h-[80px] mt-[3px]"
          />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="ssm:h-[60px] h-[80px] mt-[3px]"
            data-testId="alternate-image-button"
          >
            {isHovered ? (
              <img
                src={orderRestorePhotos[4].img}
                alt="Alternate"
                className="ssm:h-[60px] h-[80px] mt-[3px]"
              />
            ) : (
              <img
                src={orderRestorePhotos[3].img}
                alt="Send"
                className="ssm:h-[60px] h-[80px] mt-[3px]"
              />
            )}
          </div>
          <img
            src={orderRestorePhotos[5].img}
            alt="Shipping"
            className="ssm:h-[60px] h-[80px] mt-[3px]"
          />
        </div>
        <div className="row">
          <OrderSteps />
        </div>
      </div>
    </div>
  );
  const inputFile = (
    <input
      type="file"
      id="fileInput"
      style={{ display: "none" }}
      onChange={handleFileUpload}
    />
  );
  const paginationDots = (
    <PaginationDots count={restoredPhotos.length} activeIndex={currentIndex} />
  );
  const restorationTextTitle = (
    <h2 className="text-center ssm:text-2xl md:text-4xl font-bold select-none">
      {t("restoration_text_caps")}
    </h2>
  );
  const restorationTextFull = (
    <p className="pr-3 pb-2 ssm:text-xl md:text-2xl text-justify select-none">
      {t("restoration_full_text")}
    </p>
  );
  const buttonChangePhotoTitle = (
    <button
      id="button_change_photo_example"
      className={`cursor-pointer items-center  ${button_title_style}`}
      onClick={handleClick}
      data-testId="change-photo-button"
    >
      {t("restoration_title")}
    </button>
  );
  const imageRestorationBlockLeft = (
    <div id="container_left" className="min-w-[250px] pt-2">
      <div className="grid grid-cols-1 ">
        <div className="flex flex-column justify-center">
        <ImageRestoration
          beforeImage={currentImages.afterImage}
          afterImage={currentImages.beforeImage}
          onClick={handleClick}
        />
        </div>
        <div className="relative top-[-32px] -mb-7">{paginationDots}</div>
      </div>
    </div>
  );
  const imageRestorationBlockRight = (
    <div id="container_right" className="flex-col grid m-2 items-center">
      {restorationTextTitle}
      {restorationTextFull}
      {orderStepsIcons}
      {inputFile}
    </div>
  );

  const image_restoration_background_style =
    "p-2 ssm:pt-5 sm:pt-3 md:pt-2 ssm:mx-2 bg-white bg-opacity-30 backdrop-blur-[10px] rounded-2xl shadow-xl";
  const image_restoration_container_style =
    "grid ssm:grid-cols-1 lg:grid-cols-2 ";
  return (
    <div className={image_restoration_background_style} id={`category${3}`}>
      {buttonChangePhotoTitle}
      <div className={image_restoration_container_style}>
        {imageRestorationBlockLeft}
        {imageRestorationBlockRight}
      </div>
    </div>
  );
};

export default Restoration;
