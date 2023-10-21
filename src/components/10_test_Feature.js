import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide } from "@splidejs/splide";

import featured_photo_0 from "./img/Featured/0.jpg";
import featured_photo_1 from "./img/Featured/1.jpg";
import featured_photo_2 from "./img/Featured/2.jpg";
import featured_photo_3 from "./img/Featured/3.jpg";
import featured_photo_4 from "./img/Featured/4.jpg";
import featured_photo_5 from "./img/Featured/5.jpg";
import featured_photo_6 from "./img/Featured/6.jpg";
import featured_photo_7 from "./img/Featured/7.jpg";
import featured_photo_8 from "./img/Featured/8.jpg";
import featured_photo_9 from "./img/Featured/9.jpg";

const Featured = () => {
  const sliders = [
    featured_photo_0,
    featured_photo_1,
    featured_photo_2,
    featured_photo_3,
    featured_photo_4,
    featured_photo_5,
    featured_photo_6,
    featured_photo_7,
    featured_photo_8,
    featured_photo_9
  ];

  const previewImages = [
    featured_photo_0,
    featured_photo_1,
    featured_photo_2,
    featured_photo_3,
    featured_photo_4,
    featured_photo_5,
    featured_photo_6,
    featured_photo_7,
    featured_photo_8,
    featured_photo_9
  ];

  const splideRef = useRef(null);
  const previewSplideRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const splideInstanceRef = useRef(null);

  useEffect(() => {
    const splideInstance = new Splide(splideRef.current, {
      type: "slide",
      perPage: 1,
      perMove: 1,
      gap: 10,
      rewind: true,
      pagination: {
        el: ".splide__pagination",
        perPage: 1,
        gap: 10,
        focus: "center",
        trimSpace: true,
      },
      arrows: true,
    });

    splideInstance.on("mounted", () => {
      splideInstanceRef.current = splideInstance;
      splideInstance.go(0); // Устанавливаем начальный слайд
    });

    splideInstance.mount();
  }, []);

  useEffect(() => {
    const previewSplide = new Splide(previewSplideRef.current, {
      type: "slide",
      perPage: 6,
      gap: 10,
      pagination: false,
      focus: "center",
    });

    previewSplide.on("click", (index) => {
      console.log('click')
      setSelectedSlide(index);
      splideInstanceRef.current.go(index); // Переключаем основной слайд
    });

    previewSplide.mount();
  }, []);

  return (
    <div className="p-2">
      <section id="thumbnail-carousel" ref={splideRef} className="splide pb-2">
        <div className="splide__track rounded-2xl">
          <ul className="splide__list">
            {sliders.map((sliderItem, slideIndex) => (
              <li key={slideIndex} className="splide__slide">
                <img
                  className="h-[700px] w-full object-cover duration-300 ease-out"
                  src={sliderItem}
                  alt={`Slide ${slideIndex}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="thumbnail-preview"
        ref={previewSplideRef}
        className="splide"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {previewImages.map((previewItem, previewIndex) => (
              <li
                key={previewIndex}
                className={`splide__slide ${
                  previewIndex === selectedSlide ? "selected" : ""
                }`}
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
