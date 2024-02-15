import { useEffect, useRef, useState } from "react";
import { Splide } from "@splidejs/splide";
import { hospitalPhotos } from "../data/data";
import { useTranslation } from "react-i18next";

const Hospital = () => {
  const { t } = useTranslation("Hospital");
  const sliders = hospitalPhotos.map((photo) => photo.img);
  const splideRef = useRef<HTMLDivElement | null>(null);
  const previewSplideRef = useRef<HTMLDivElement | null>(null);
  const [selectedSlide] = useState(0);
  const splideInstanceRef = useRef<Splide | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = new Splide(splideRef.current, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        gap: 10,
        rewind: true,
        arrows: true,
        focus: "center",
      });

      splideInstance.on("mounted", () => {
        splideInstanceRef.current = splideInstance;
        splideInstance.go(selectedSlide);
      });

      splideInstance.mount();

      return () => {
        splideInstance.destroy();
      };
    }
  }, [selectedSlide]);

  useEffect(() => {
    if (previewSplideRef.current) {
      const previewSplide = new Splide(previewSplideRef.current, {
        type: "slide",
        perPage: getPerPageValue(),
        gap: 5,
        rewind: true,
        pagination: false,
        focus: "center",
      });

      previewSplide.on("mounted", () => {
        const slides = previewSplideRef.current!.querySelectorAll(
          ".splide__slide"
        );
        slides.forEach((slide: Element, index: number) => {
          slide.addEventListener("click", () => {
            handlePreviewClick(index);
          });
        });
      });

      previewSplide.mount();

      const handleResize = () => {
        const newPerPage = getPerPageValue();
        previewSplide.go(selectedSlide);
        previewSplide.options.perPage = newPerPage;
        previewSplide.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        previewSplide.destroy();
      };
    }
  }, [selectedSlide]);

  const getPerPageValue = () => {
    if (window.innerWidth < 640) {
      return 3;
    } else if (window.innerWidth < 768) {
      return 4;
    } else if (window.innerWidth < 1024) {
      return 5;
    } else if (window.innerWidth < 1280) {
      return 6;
    } else {
      return 8;
    }
  };

  const handlePreviewClick = (index: number) => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go(index);
    }
  };

  const handleConfirm = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setFadeOut(false);
    }, 900);
  };

  const container = "relative px-2 py-2 mx-2 my-2 bg-white rounded-2xl shadow-lg bg-opacity-30 backdrop-blur-sm";

  const HospitalTitle = <h3 className="flex justify-center mb-1">
    <span className="w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]">
      <span className="text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[10px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 mx-4">{t("hospital")}</span>
    </span>
  </h3>;

  const buttonAge = (
    <div className={`absolute bottom-2 left-2 px-5 w-[calc(100%-1rem)] ssm:h-[calc(100%-3.2rem)] sm:h-[calc(100%-3.3rem)] md:h-[calc(100%-3.7rem)] z-50 inline-flex items-center justify-center backdrop-blur-sm bg-gradient-to-b from-blue-600/60 to-amber-400/90 drop-shadow-lg rounded-2xl transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <button className="flex flex-wrap justify-center items-center ssm:py-2 sm:py-[0px] ssm:h-auto sm:h-[40px] md:h-[55px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]" onClick={handleConfirm}>
        <span className="text-white ssm:text-[22px] md:text-[26px]  xl:text-[30px] ssm:-mt-1  sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 uppercase">{t("age18")}</span>
      </button>
    </div>
  );

  const ThumbnailCarousel = <section id="thumbnail_carousel" ref={splideRef} className="splide pb-2 mt-1.5">
    <div className="splide__track rounded-2xl">
      <ul className="splide__list">
        {sliders.map((sliderItem, slideIndex) => (
          <li key={slideIndex} className={`splide__slide`} onContextMenu={(e) => e.preventDefault()}>
            <img className="ssm:h-[440px] xl:h-[700px] w-full object-cover duration-300 ease-out" src={sliderItem} alt={`Slide ${slideIndex}`} />
          </li>
        ))}
      </ul>
    </div>
  </section>;

  const ThumbnailCarouselPreview = <section id="thumbnail_carousel_preview" ref={previewSplideRef} className="splide">
    <div className="splide__track">
      <ul className="splide__list">
        {sliders.map((previewItem, previewIndex) => (
          <li key={previewIndex} className={`splide__slide`} onClick={() => handlePreviewClick(previewIndex)} onContextMenu={(e) => e.preventDefault()}>
            <img className="h-[100px] w-full object-cover rounded-2xl" src={previewItem} alt={`Preview ${previewIndex}`} />
          </li>
        ))}
      </ul>
    </div>
  </section>;

  return (
    <div className={container} id={`category${6}`}>
      {HospitalTitle}
      {showConfirmation && (
        buttonAge
      )}
      {ThumbnailCarousel}
      {ThumbnailCarouselPreview}
    </div>
  );
};

export default Hospital;
