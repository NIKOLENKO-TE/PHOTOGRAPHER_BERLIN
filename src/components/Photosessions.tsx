//Photosessions.tsx
import { useEffect, useRef, useState } from "react";
import { Splide } from "@splidejs/splide";
import { photosessionsHorizontal, photosessionsVertical } from "../data/data";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

const Photosessions = () => {
  const { t } = useTranslation("Photosessions");
  const horizontalSliders = photosessionsHorizontal.map((photo: { id: number; title: string; img: string } | undefined) =>
    photo?.img
  );
  const verticalSliders = photosessionsVertical.map((photo: { id: number; title: string; img: string } | undefined) =>
    photo?.img
  );

  const splideRefHorizontal = useRef<HTMLDivElement | null>(null);
  const splideRefVertical = useRef<HTMLDivElement | null>(null);
  const previewSplideRefHorizontal = useRef<HTMLDivElement | null>(null);
  const previewSplideRefVertical = useRef<HTMLDivElement | null>(null);
  const [selectedHorizontalSlide, setSelectedHorizontalSlide] = useState(0);
  const [selectedVerticalSlide, setSelectedVerticalSlide] = useState(0);
  const getPerVerticalPageValue = () => {
    if (window.innerWidth < 640) {
      return 3;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else if (window.innerWidth < 1280) {
      return 2;
    } else {
      return 3;
    }
  };
  const getPerHorizontalPageValue = () => {
    if (window.innerWidth < 640) {
      return 2;
    } else if (window.innerWidth < 768) {
      return 3;
    } else if (window.innerWidth < 1024) {
      return 4;
    } else if (window.innerWidth < 1280) {
      return 5;
    } else {
      return 6;
    }
  };
  useEffect(() => {
    if (splideRefHorizontal.current) {
      const splideInstance = new Splide(splideRefHorizontal.current, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        rewind: true,
        arrows: true,
        focus: "center",
        pagination: true,
        autoplay: true,
        interval: 4000,
      });

      splideInstance.on("mounted", () => {
        splideInstance.go(selectedHorizontalSlide);
      });

      splideInstance.mount();

      return () => {
        splideInstance.destroy();
      };
    }
  }, [selectedHorizontalSlide]);

  useEffect(() => {
    if (splideRefVertical.current) {
      const splideInstance = new Splide(splideRefVertical.current, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        rewind: true,
        arrows: true,
        focus: "center",
        pagination: true,
        autoplay: true,
        interval: 3000,
      });

      splideInstance.on("mounted", () => {
        splideInstance.go(selectedVerticalSlide);
      });

      splideInstance.mount();

      return () => {
        splideInstance.destroy();
      };
    }
  }, [selectedVerticalSlide]);

  const handleHorizontalPreviewClick = (index: number) => {
    setSelectedHorizontalSlide(index);
  };

  const handleVerticalPreviewClick = (index: number) => {
    setSelectedVerticalSlide(index);
  };
  useEffect(() => {
    if (previewSplideRefHorizontal.current) {
      const previewSplide = new Splide(previewSplideRefHorizontal.current, {
        type: "slide",
        perPage: getPerHorizontalPageValue(),
        gap: 5,
        rewind: true,
        pagination: false,
        focus: "center",
      });

      previewSplide.on("mounted", () => {
        const slides = previewSplideRefHorizontal.current!.querySelectorAll(".splide__slide");
        slides.forEach((slide, index) => {
          slide.addEventListener("click", () => {
            handleHorizontalPreviewClick(index);
          });
        });
      });

      previewSplide.mount();

      const handleResizeHorizontal = () => {
        const newPerPage = getPerHorizontalPageValue();
        previewSplide.options.perPage = newPerPage;
        previewSplide.refresh();
      };

      window.addEventListener("resize", handleResizeHorizontal);

      return () => {
        window.removeEventListener("resize", handleResizeHorizontal);
        previewSplide.destroy();
      };
    }
  }, []);


  useEffect(() => {
    if (previewSplideRefVertical.current) {
      const previewSplide = new Splide(previewSplideRefVertical.current, {
        type: "slide",
        perPage: getPerVerticalPageValue(),
        gap: 5,
        rewind: true,
        pagination: false,
        focus: "center",
      });

      previewSplide.on("mounted", () => {
        const slides = previewSplideRefVertical.current!.querySelectorAll(".splide__slide");
        slides.forEach((slide, index) => {
          slide.addEventListener("click", () => {
            handleVerticalPreviewClick(index);
          });
        });
      });

      previewSplide.mount();

      const handleResizeVertical = () => {
        const newPerPage = getPerVerticalPageValue();
        previewSplide.options.perPage = newPerPage;
        previewSplide.refresh();
      };

      window.addEventListener("resize", handleResizeVertical);

      return () => {
        window.removeEventListener("resize", handleResizeVertical);
        previewSplide.destroy();
      };
    }
  }, []);


  const HorizontalThumbnailCarousel = (
    <section id="horizontal_thumbnail_carousel" ref={splideRefHorizontal} className="splide pb-2 pt-0.5" data-testId="horizontal-carousel">
      <div className="splide__track rounded-2xl">
        <ul className="splide__list">
          {horizontalSliders.map((sliderItem: string | undefined, slideIndex: number) => (
            <li key={slideIndex} className={`splide__slide`} onContextMenu={(e) => e.preventDefault()} data-testId={`horizontal-carousel-item-${slideIndex}`}>
              <img className="ssm:h-[440px] lg:h-[600px] xl:h-[700px] w-full object-cover duration-300 ease-out" src={sliderItem} alt={`Slide ${slideIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const VerticalThumbnailCarousel = (
    <section id="vertical_thumbnail_carousel" ref={splideRefVertical} className="splide pb-2 pt-0.5" data-testId="vertical-carousel">
      <div className="splide__track rounded-2xl">
        <ul className="splide__list">
          {verticalSliders.map((sliderItem: string | undefined, slideIndex: number) => (
            <li key={slideIndex} className={`splide__slide`} onContextMenu={(e) => e.preventDefault()} data-testId={`vertical-carousel-item-${slideIndex}`}>
              <img className="ssm:h-[430px]  sm:h-[380px]  md:h-[385px] lg:h-[500px] xl:h-[600px] w-full object-cover duration-300 ease-out" src={sliderItem} alt={`Slide ${slideIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const HorizontalThumbnailCarouselPreview = (
    <section id="horizontal_thumbnail_carousel_preview" ref={previewSplideRefHorizontal} className="splide" data-testId="horizontal-carousel-preview">
      <div className="splide__track">
        <ul className="splide__list">
          {horizontalSliders.map((previewItem: string | undefined, previewIndex: number) => (
            <li key={previewIndex} className={`splide__slide`} data-category-index={previewIndex} onClick={() => handleHorizontalPreviewClick(previewIndex)} onContextMenu={(e) => e.preventDefault()} data-testId={`horizontal-carousel-preview-item-${previewIndex}`}>
              <img className="h-[100px] w-full object-cover rounded-2xl" src={previewItem} alt={`Preview ${previewIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const VerticalThumbnailCarouselPreview = (
    <section id="vertical_thumbnail_carousel_preview" ref={previewSplideRefVertical} className="splide" data-testId="vertical-carousel-preview">
      <div className="splide__track">
        <ul className="splide__list">
          {verticalSliders.map((previewItem: string | undefined, previewIndex: number) => (
            <li key={previewIndex} className={`splide__slide`} data-category-index={previewIndex} onClick={() => handleVerticalPreviewClick(previewIndex)} onContextMenu={(e) => e.preventDefault()} data-testId={`vertical-carousel-preview-item-${previewIndex}`}>
              <img className="ssm:h-[150px] sm:h-[160px] md:h-[155px] lg:h-[200px] w-full object-cover rounded-2xl" src={previewItem} alt={`Preview ${previewIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const PhotosessionsTitle = (
    <h3 className="flex justify-center mb-1 uppercase">
      <span className="w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]">
        <span className="text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[10px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 mx-4">
          {t("photosessions_title")}
        </span>
      </span>
    </h3>
  );
  const CarouselBackgroundStyle =
    "px-2 py-2 mx-2 my-2 bg-white rounded-2xl shadow-lg bg-opacity-30 backdrop-blur-sm";
  return (
    <div className={CarouselBackgroundStyle} id={`category${4}`} data-testId="photosessions-wrapper">
      {PhotosessionsTitle}
      <div className="flex ssm:flex-wrap md:flex-nowrap ">
        <div id="Vertical" className="ssm:basis-1/1 sm:basis-1/3 md:basis-1/4 pr-2 ssm:pb-2 sm:pb-0 md:pb-0 ">
          {VerticalThumbnailCarousel}
          {VerticalThumbnailCarouselPreview}
        </div>
        <div id="Horizontal" className="ssm:basis-1/1 sm:basis-2/3 md:basis-3/4 lg:pt-0">
          <div>
            {HorizontalThumbnailCarousel}
            {HorizontalThumbnailCarouselPreview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photosessions;


