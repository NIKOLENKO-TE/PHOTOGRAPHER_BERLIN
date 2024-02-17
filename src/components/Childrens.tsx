//Childrens.tsx
import { useRef, useState, useMemo, useCallback } from "react";
import { Splide } from "@splidejs/splide";
import { useTranslation } from "react-i18next";
import { childrensPhotos } from "../data/data";
import HorizontalSlider, { getPerHorizontalPageValue } from './sliders/HorizontalSlider';
import Title from './sliders/Title';
import CarouselBackground from './sliders/CarouselBackground';
import HorizontalSliderPreview from './sliders/HorizontalSliderPreview';

const Childrens = () => {
  const { t } = useTranslation("Childrens");
  const [selectedSlide] = useState(0);
  const splideInstanceRef = useRef<Splide | null>(null);
  const sliders = useMemo(() => (
    childrensPhotos
      .map((photo) => photo?.img)
      .filter((img): img is string => img !== undefined)
  ), []);

  const handlePreviewClick = useCallback((index: number) => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go(index);
    }
  }, []);

  return (
    <CarouselBackground id={`category${2}`} data-testId="childrens-wrapper">
      <Title text={t("childrens_title")}  data-testId="childrens_title"/>
      <HorizontalSlider photos={sliders} selectedSlide={selectedSlide} setSplideInstance={splide => splideInstanceRef.current = splide} autoplay={false} />
      <HorizontalSliderPreview photos={sliders} selectedSlide={selectedSlide} onPreviewClick={handlePreviewClick} getPerPageValue={getPerHorizontalPageValue} />
    </CarouselBackground>
  );
};

export default Childrens;