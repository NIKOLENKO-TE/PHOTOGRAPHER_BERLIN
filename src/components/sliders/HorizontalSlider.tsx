//HorizontalSlider.tsx
import { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";

interface SliderProps {
  photos: string[];
  selectedSlide: number;
  setSplideInstance: (splide: Splide | null) => void;
  autoplay?: boolean;
}

export const getPerHorizontalPageValue = () => {
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

const HorizontalSlider = ({ photos, selectedSlide, setSplideInstance, autoplay = true }: SliderProps) => {
  const splideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = new Splide(splideRef.current, {
        type: "slide",
        perPage: 1,
        perMove: 1,
        rewind: true,
        arrows: true,
        focus: "center",
        pagination: true,
        autoplay,
        interval: 4000,
      });
  
      setSplideInstance(splideInstance);
  
      splideInstance.on("mounted", () => {
        splideInstance.go(selectedSlide);
      });
  
      splideInstance.mount();
  
      return () => {
        splideInstance.destroy();
      };
    }
  }, [selectedSlide, setSplideInstance, autoplay]);

  return (
    <section id="horizontal_thumbnail_carousel" ref={splideRef} className="splide pb-2 pt-0.5">
      <div className="splide__track rounded-2xl">
        <ul className="splide__list">
          {photos.map((photo, slideIndex) => (
            <li key={slideIndex} className={`splide__slide`} onContextMenu={(e) => e.preventDefault()}>
              <img className="ssm:h-[440px] lg:h-[600px] xl:h-[700px] w-full object-cover duration-300 ease-out" src={photo} alt={`Slide ${slideIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HorizontalSlider;