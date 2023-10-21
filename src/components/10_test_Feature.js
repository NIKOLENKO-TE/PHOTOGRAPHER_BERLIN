import React, { useState, useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { Splide } from '@splidejs/splide';

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
    featured_photo_9,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        gap: 10,
        rewind: true,
        pagination: {
            el: '.splide__pagination',
            perPage: 1, // Установите perPage в 10
            // Установите gap: 10, чтобы точки навигации были ближе друг к другу
            gap: 1,
            // Опция "focus" позволяет отображать точки навигации для видимых слайдов
            focus: 'center',
            // Опция "trimSpace" удаляет пустое пространство слева и справа от слайдов
            trimSpace: true,
        },
        arrows: true,
    });

    splide.mount();
}, []);




  return (
    <div className="py-1 px-2 relative group cursor-pointer rounded-xl">
      <section id="thumbnail-carousel" ref={splideRef} className="splide">
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
    </div>
  );
};

export default Featured;
