// Restoration.tsx
import React, { forwardRef, useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { restoredPhotos, orderRestorePhotos, } from "../data/data";
import SiteContainerBackground from './sliders/SiteContainerBackground';

const button_title_style = "ssm:-mt-0 sm:-mt-0 md:-mt-0 w-full justify-center ssm:h-[29px] sm:h-[31px] md:h-[38px] ssm:text-[22px] md:text-[26px] xl:text-[30px] flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[13px] md:rounded-[15px]";
const arrows_style = "z-20 mt-[-125px] absolute flex ml-[36px] h-[30px] w-[60px] cursor-pointer";
const before_after_background_style = "absolute top-[-128px] left-[-8px] backdrop-blur-[40px] h-[35px] w-[295px] rounded-full px-2 shadow-xl shadow-black/50 ";
const image_restoration_container_style = "grid ssm:grid-cols-1 lg:grid-cols-2";
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
  const handleClick = onClick;
  const [isDragging, setIsDragging] = useState(false);
  const [sliderX, setSliderX] = useState("50%");
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const autoplay = useRef<number | null>(null);

  useEffect(() => {
    if (isAutoplaying) {
      autoplay.current = window.setInterval(() => {
        handleClick();
      }, 3000);
    }

    return () => {
      if (autoplay.current) clearInterval(autoplay.current);
    };
  }, [isAutoplaying, handleClick]);

  const toggleAutoplay = () => {
    setIsAutoplaying(!isAutoplaying);
  };

 const handleNextImage = () => {
    handleClick();
  };

  const autoplayButton = (
    <span className="absolute top-[-3px] right-[69px]">
      <button onClick={toggleAutoplay} className="h-[35px] w-[35px] cursor-pointer p-[0px] rounded-full border-none shadow-xl shadow-black/50" data-testid="autoplay_button">
        {isAutoplaying
          ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm-1.25 13.03c0 .48-.2.67-.71.67h-1.3c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67v6.06h.01Zm5.28 0c0 .48-.2.67-.71.67h-1.29c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67v6.06Z" /></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm3.75 11.299c1-.577 1-2.02 0-2.598l-4.5-2.598A1.5 1.5 0 0 0 9 9.402v5.196a1.5 1.5 0 0 0 2.25 1.3l4.5-2.599Z" clip-rule="evenodd" /></svg>
        }
      </button>  </span>
  );

  const nextImageButton = (
    <span className="absolute top-[-3px] right-[-191px]">
      <button onClick={handleNextImage} className="h-[35px] w-[35px] cursor-pointer p-[3px] rounded-full border-none shadow-xl shadow-black/50" data-testid="next_photo_button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459"><path fill="#ffffff" d="M229.5 0C102.751 0 0 102.751 0 229.5S102.751 459 229.5 459C356.25 459 459 356.249 459 229.5S356.25 0 229.5 0zm122.238 246.077c-.063.071-.122.144-.185.214-.659.723 4.184-4.144-85.051 85.091-9.757 9.757-25.586 9.77-35.356 0-9.763-9.763-9.763-25.592 0-35.355l41.527-41.527h-146.7c-13.808 0-25-11.193-25-25s11.192-25 25-25h146.701l-41.527-41.527c-9.763-9.763-9.763-25.592 0-35.355 9.764-9.763 25.592-9.763 35.356 0 89.798 89.798 84.708 84.629 85.852 86.022 7.779 9.489 7.549 23.23-.617 32.437z" /></svg>
      </button>
    </span>
  );
  
  const moveSliderButton = (
    <span className="mt-[-3px] mr-[-8px]">
      <button  className="p-[3px] cursor-pointer  rounded-full border-none shadow-md shadow-black/50" style={{boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.50)'}} data-testid="move_slider_button">
      <svg xmlns="http://www.w3.org/2000/svg" width="53"  version="1.0" viewBox="0 0 1152 614"><path fill="#ffffff" fill-rule="evenodd" d="M283 1.7A308.2 308.2 0 0 0 31 172.5 310.7 310.7 0 0 0 2.3 267a450.7 450.7 0 0 0-.5 74.5 311 311 0 0 0 70.4 163c10.3 12.2 31 32.3 43.7 42.4A304.3 304.3 0 0 0 280.2 612c9.2.8 102.2 1 304.8.7 269.5-.3 292.3-.4 301.9-2a296.2 296.2 0 0 0 95.6-30.2A305.1 305.1 0 0 0 1124 179.8a293 293 0 0 0-62.9-89.8A279.3 279.3 0 0 0 982 33.2a298.3 298.3 0 0 0-95.3-29.9c-9.4-1.6-34.3-1.7-304.7-1.8-162-.1-296.5 0-299 .2zm95.5 100.8c7.2 3.1 17 12.4 20 19 1.2 2.7 2.9 8 3.6 11.7 1.1 5.9 1 7.6-.5 14a59 59 0 0 1-4.3 11.8c-1.6 2.8-30.2 32.2-74.2 76.2L251.5 307l71.6 71.8c44 44 72.6 73.4 74.2 76.2a59 59 0 0 1 4.3 11.8c1.5 6.4 1.6 8.1.5 14-1.9 9.9-5.1 16-12 22.5-9 8.6-14.5 10.7-28.2 10.7-18.5 0-10.3 6.9-109.2-91.8a6929.7 6929.7 0 0 1-89.7-90.4 43.2 43.2 0 0 1-8.8-24.8c0-8.2 3.6-18.3 8.8-24.8a6209 6209 0 0 1 89.2-89.9c98.7-98.7 91.1-92.2 109.5-92.3 9.8 0 12 .3 16.8 2.5zm443.2 0c5.2 2.3 14.5 11.3 95 91.7 79.4 79.4 89.5 89.8 91.6 94.8 4 9.2 4.5 11.2 4.5 18 0 6.8-.5 8.8-4.5 18-2.1 5-12.2 15.4-91.6 94.8-102 101.9-92.9 94.2-111.3 94.2-14.4 0-18.8-1.6-27.6-9.8a39 39 0 0 1-8.7-48.4c1.4-2.9 25.4-27.6 74.2-76.6l72.2-72.2-72.2-72.3c-48.8-48.9-72.8-73.6-74.2-76.5a40.5 40.5 0 0 1-.6-36.8 52.2 52.2 0 0 1 20.6-19.6c2.8-1 8.5-1.6 15.6-1.7 10-.1 11.9.2 17 2.4z"/></svg>
      </button>
    </span>
  );

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
      className="relative ssm:h-[440px] sm:h-[620px] w-[820px]  overflow-hidden object-cover rounded-2xl cursor-pointer"
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onContextMenu={preventRightClick}
      //onClick={handleClick}
      data-testid="image-restoration"
    >
      <img id="beforeImage" src={beforeImage} className="absolute h-full object-cover select-none" alt="before" data-testid="before-image"/>
      <img id="afterImage" src={afterImage} className={`h-full object-cover`} alt="after"style={{userSelect: "none",clipPath: `inset(0 0 0 ${sliderX})`,pointerEvents: "auto",}}data-testid="after-image"/>
      <div id="slider_before_after" className={`absolute select-none flex top-[140px] ssm:mt-[365px] sm:mt-[550px] `} style={{ left: `calc(${sliderX} - 148px)`, userSelect: "none" }} onMouseDown={handleStart} onTouchStart={handleStart}>
        <div id="before_arrows_after_text" className={`${arrows_style}`}>
          {autoplayButton} 
          <span className="mt-[-5px] text-white text-[25px] pr-[2px] ml-[-5px]">BEFORE</span>
          {moveSliderButton}
          <span className="mt-[-5px] ml-[12px] text-white text-[25px]">AFTER</span>
          {nextImageButton}
        </div> 
        <div className={before_after_background_style}></div>
      </div>
    </div>
  );
};

const Restoration = forwardRef<HTMLDivElement>((_props, ref) => {
  const { t } = useTranslation("Restoration");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImages, setCurrentImages] = useState({
    beforeImage: restoredPhotos[currentIndex].img,
    afterImage: isHovered
      ? orderRestorePhotos[4].img
      : restoredPhotos[currentIndex + 1].img,
  });
  const handleClick = useCallback(() => {
    const nextIndex = (currentIndex + 2) % restoredPhotos.length;
    setCurrentIndex(nextIndex);
    setCurrentImages({
      beforeImage: restoredPhotos[nextIndex].img,
      afterImage: isHovered
        ? orderRestorePhotos[4].img
        : restoredPhotos[nextIndex + 1].img,
    });
  }, [currentIndex, isHovered]);

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
      <div className="flex justify-center mt-4" data-testid="pagination-block">
        {dots.map((_, index) => (
          <div
            key={index}
            className={`w-5 h-3 mx-2 rounded-full ${Math.floor(activeIndex / 2) === index
              ? "bg-blue-700 bg-opacity-90 backdrop-blur-[2px]"
              : "bg-white bg-opacity-40 backdrop-blur-[2px]"
              }`}
            data-testid={`pagination-dot-${index}`}
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
      <div className="w-full max-w-[800px] grid grid-row-2 bg-white/70 rounded-2xl shadow-xl py-1 ssm:px-2 md:px-5 lg:px-7">
        <div
          id="services_buttons_background"
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img
            src={orderRestorePhotos[0].img}
            alt="Send"
            className="ssm:h-[60px] h-[80px] mt-[3px]"
            data-testid="send-image-button"
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
          /><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="45" height="45" fill="#000" stroke="#000" data-name="Layer 1" viewBox="0 0 24 24"><g id="SVGRepo_iconCarrier"><path d="m11.05 22.5-5.14-5.14a2 2 0 0 1-.59-1.43 2 2 0 0 1 2-2 2 2 0 0 1 1.43.59l1.32 1.32V6.38a2 2 0 0 1 1.74-2 1.89 1.89 0 0 1 1.52.56 1.87 1.87 0 0 1 .56 1.34V12l5 .72a1.91 1.91 0 0 1 1.64 1.89 17.18 17.18 0 0 1-1.82 7.71l-.09.18M19.64 7.23l2.86-2.87-2.86-2.86M15.82 4.36h6.68M4.36 7.23 1.5 4.36 4.36 1.5M8.18 4.36H1.5"/></g></svg>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="ssm:h-[60px] h-[80px] mt-[3px]"
            data-testid="alternate-image-button"
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
    <p
      id="button_change_photo_example"
      className={`items-center  ${button_title_style}`}
      // onClick={handleClick}
      data-testid="change-photo-button"
    >
      {t("restoration_title")}
    </p>
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
    </div>
  );

  return (
    <SiteContainerBackground id={`category${3}`} data-testid="restoration-wrapper">
      <div ref={ref} >
        {buttonChangePhotoTitle}
        <div className={image_restoration_container_style}>
          {imageRestorationBlockLeft}
          {imageRestorationBlockRight}
        </div>
      </div>
    </SiteContainerBackground>
  );
});

export default Restoration;
