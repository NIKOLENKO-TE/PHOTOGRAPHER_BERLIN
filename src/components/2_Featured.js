import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide } from "@splidejs/splide";
import { featuredPhotos } from "../data/data";

const Featured = () => {
  const sliders = featuredPhotos.map((photo) => photo.img);
  const splideRef = useRef(null);
  const previewSplideRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const splideInstanceRef = useRef(null);

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

  useEffect(() => {
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
  }, [selectedSlide]);

  useEffect(() => {
    const previewSplide = new Splide(previewSplideRef.current, {
      type: "slide",
      perPage: getPerPageValue(),
      gap: 10,
      rewind: true,
      pagination: false,
      focus: "center",
    });

    previewSplide.on("mounted", () => {
      const slides = previewSplideRef.current.querySelectorAll(".splide__slide");
      slides.forEach((slide, index) => {
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
  }, []);

  const handlePreviewClick = (index) => {
    setSelectedSlide(index);
  };

  return (
    <div className="px-2">
      <section id="thumbnail-carousel" ref={splideRef} className="splide pb-2">
        <div className="splide__track rounded-2xl">
          <ul className="splide__list">
            {sliders.map((sliderItem, slideIndex) => (
              <li key={slideIndex} className={`splide__slide`} onContextMenu={(e) => e.preventDefault()}>
                <img
                  className="ssm:h-[440px] xl:h-[700px] w-full object-cover duration-300 ease-out"
                  src={sliderItem}
                  alt={`Slide ${slideIndex}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="thumbnail-preview" ref={previewSplideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {sliders.map((previewItem, previewIndex) => (
              <li
                key={previewIndex}
                className={`splide__slide`}
                onClick={() => handlePreviewClick(previewIndex)}
                onContextMenu={(e) => e.preventDefault()} // Это предотвращает контекстное меню
              >
                <img
                  className="h-[100px] w-full object-cover rounded-2xl"
                  src={previewItem}
                  alt={`Preview ${previewIndex}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Featured;
