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
      arrows: true,
    });

    splideInstance.on("mounted", () => {
      splideInstanceRef.current = splideInstance;
      splideInstance.go(selectedSlide);
    });

    splideInstance.on('move', (newIndex) => {
      setSelectedSlide(newIndex);
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
      pagination: false,
      focus: "center",
    });

    previewSplide.on("mounted", () => {
      const slides = previewSplideRef.current.querySelectorAll('.splide__slide');
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

  return (
    <div className="px-2">
      <section id="thumbnail-carousel" ref={splideRef} className="splide pb-2">
        <div className="splide__track rounded-2xl">
          <ul className="splide__list">
            {sliders.map((sliderItem, slideIndex) => (
              <li key={slideIndex} className="splide__slide">
                <img
                  className="ssm:h-[500px] xl:h-[700px] w-full object-cover duration-300 ease-out"
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