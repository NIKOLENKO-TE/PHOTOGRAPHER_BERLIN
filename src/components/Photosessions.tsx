//Photosessions.tsx
import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { Splide } from "@splidejs/splide";
import { useTranslation } from "react-i18next";
import { photosessionsHorizontal, photosessionsVertical } from "../data/data";
import HorizontalSlider, { getPerHorizontalPageValue } from './sliders/HorizontalSlider';
import VerticalSlider, { getPerVerticalPageValue } from './sliders/VerticalSlider';
import Title from './sliders/Title';
import CarouselBackground from './sliders/CarouselBackground';
import HorizontalSliderPreview from './sliders/HorizontalSliderPreview';
import VerticalSliderPreview from './sliders/VerticalSliderPreview';

const Photosessions = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation("Photosessions");
  const [selectedHorizontalSlide] = useState(0);
  const [selectedVerticalSlide] = useState(0);
  const splideInstanceRefHorizontal = useRef<Splide | null>(null);
  const splideInstanceRefVertical = useRef<Splide | null>(null);
  const slidersHorizontal = useMemo(() => (
    photosessionsHorizontal
      .map((photo) => photo?.img)
      .filter((img): img is string => img !== undefined)
  ), []);
  const slidersVertical = useMemo(() => (
    photosessionsVertical
      .map((photo) => photo?.img)
      .filter((img): img is string => img !== undefined)
  ), []);

  const handleHorizontalPreviewClick = useCallback((index: number) => {
    if (splideInstanceRefHorizontal.current) {
      splideInstanceRefHorizontal.current.go(index);
    }
  }, []);

  const handleVerticalPreviewClick = useCallback((index: number) => {
    if (splideInstanceRefVertical.current) {
      splideInstanceRefVertical.current.go(index);
    }
  }, []);

  return (
    <div ref={ref}>
    <CarouselBackground id={`category${4}`} data-testid="photosessions-wrapper">
      <Title text={t("photosessions_title")} data-testid="photosessions_title"/>
      <div className="flex ssm:flex-wrap md:flex-nowrap ">
        <div id="Vertical" className="ssm:basis-1/1 sm:basis-1/3 md:basis-1/4 pr-2 ssm:pb-2 sm:pb-0 md:pb-0">
          <VerticalSlider photos={slidersVertical} selectedSlide={selectedVerticalSlide} setSplideInstance={splide => splideInstanceRefVertical.current = splide} autoplay={true} />
          <VerticalSliderPreview photos={slidersVertical} selectedSlide={selectedVerticalSlide} onPreviewClick={handleVerticalPreviewClick} getPerPageValue={getPerVerticalPageValue} />
        </div>
        <div id="Horizontal" className="ssm:basis-1/1 sm:basis-2/3 md:basis-3/4 lg:pt-0">
          <div>
          <HorizontalSlider photos={slidersHorizontal} selectedSlide={selectedHorizontalSlide} setSplideInstance={splide => splideInstanceRefHorizontal.current = splide} autoplay={true} />
          <HorizontalSliderPreview photos={slidersHorizontal} selectedSlide={selectedHorizontalSlide} onPreviewClick={handleHorizontalPreviewClick} getPerPageValue={getPerHorizontalPageValue} />
        </div></div>
      </div>
    </CarouselBackground>
    </div>
  );
});

export default Photosessions;