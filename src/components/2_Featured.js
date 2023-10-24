import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide } from "@splidejs/splide";
import { featuredPhotos } from "../data/data";

const Featured = () => {
  const sliders = featuredPhotos.map((photo) => photo.img);
  const previewImages = featuredPhotos.map((photo) => photo.img);
  const splideRef = useRef(null);
  const previewSplideRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const splideInstanceRef = useRef(null);


  const FeaturedPhoto = () => {
    useEffect(() => {
      const splideInstance = new Splide(splideRef.current, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        gap: 10,
        rewind: true,
        arrows: true,
      });
      splideInstance.on("mounted", () => {
        splideInstanceRef.current = splideInstance;
        splideInstance.go(selectedSlide);
      });
      splideInstance.on("move", (newIndex) => {
        setSelectedSlide(newIndex);
      });
      splideInstance.mount();
      return () => {
        splideInstance.destroy();
      };
    }, []);
    return (
      <section id="thumbnail-carousel" ref={splideRef} className="splide pb-2">
        <div className="splide__track rounded-2xl">
          <ul className="splide__list">
            {sliders.map((sliderItem, slideIndex) => {
              return (
                <li key={slideIndex} className={`splide__slide`}>
                  <img
                    className="ssm:h-[440px] xl:h-[700px] w-full object-cover duration-300 ease-out"
                    src={sliderItem}
                    alt={`Slide ${slideIndex}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  };

  const FeaturedPhotoThumbnailPreview = () => {
    const getPerPageValue = () => {
      if (window.innerWidth < 640) {
        return 3;
      } else if (window.innerWidth < 768) {
        return 4;
      } else if (window.innerWidth < 1024) {
        return 5;
      } else if (window.innerWidth < 1280) {
        return 6;
      } else if (window.innerWidth < 1280) {
        return 7;
      } else {
        return 8;
      }
    };
    useEffect(() => {
      const previewSplide = new Splide(previewSplideRef.current, {
        type: "slide",
        perPage: getPerPageValue(),
        gap: 10,
        pagination: false,
        focus: "center",
      });
      previewSplide.on("mounted", () => {
        const slides =
          previewSplideRef.current.querySelectorAll(".splide__slide");
        slides.forEach((slide, index) => {
          slide.addEventListener("click", () => {
            setSelectedSlide(index);
            splideInstanceRef.current.go(index); // Переключаем основной слайд
          });
        });
      });
      previewSplide.mount();
      const handleResize = () => {
        previewSplide.options.perPage = getPerPageValue();
        previewSplide.refresh();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        previewSplide.destroy();
      };
    }, []);
    return (
      <section id="thumbnail-preview" ref={previewSplideRef} className="splide">
        <div className="splide__track ">
          <ul className="splide__list ">
            {previewImages.map((previewItem, previewIndex) => (
              <li
                key={previewIndex}
                className={`splide__slide ${previewIndex === selectedSlide ? "selected" : ""
                  }`}
              >
                <img
                  className="h-[100px] w-full object-cover rounded-2xl "
                  src={previewItem}
                  alt={`Preview ${previewIndex}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

  
  return (
    <div className="px-2">
      <FeaturedPhoto />
      <FeaturedPhotoThumbnailPreview />
    </div>
  );
};

export default Featured;
