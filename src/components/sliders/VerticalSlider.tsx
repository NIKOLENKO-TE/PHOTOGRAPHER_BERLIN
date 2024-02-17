// VerticalSlider.tsx
import { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";

interface SliderProps {
  photos: string[];
  selectedSlide: number;
  setSplideInstance: (splide: Splide | null) => void;
  autoplay?: boolean;
}

export const getPerVerticalPageValue = () => {
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

const VerticalSlider = ({ photos, selectedSlide, setSplideInstance, autoplay = true }: SliderProps) => {
  const splideRef = useRef<HTMLDivElement | null>(null);

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
        autoplay,
        interval: 3000,
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
    <section id="vertical_thumbnail_carousel" ref={splideRef} className="splide pb-2 pt-0.5 ssm:-mr-2 sm:mr-0">
      <div className="splide__track rounded-2xl">
        <ul className="splide__list">
          {photos.map((photo, slideIndex) => (
            <li key={slideIndex} className={`splide__slide`} onContextMenu={(e) => e.preventDefault()}>
              <img className="ssm:h-full sm:h-[380px] md:h-[385px] lg:h-[500px] xl:h-[600px] w-full object-cover duration-300 ease-out" src={photo} alt={`Slide ${slideIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VerticalSlider;