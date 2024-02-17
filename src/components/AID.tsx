//AID.tsx
import { useRef, useState, useMemo, useCallback } from "react";
import { Splide } from "@splidejs/splide";
import { useTranslation } from "react-i18next";
import { aidPhotos } from "../data/data";
import HorizontalSlider, { getPerHorizontalPageValue } from './sliders/HorizontalSlider';
import Title from './sliders/Title';
import CarouselBackground from './sliders/CarouselBackground';
import HorizontalSliderPreview from './sliders/HorizontalSliderPreview';

const AID = () => {
  const { t } = useTranslation("AID");
  const [selectedSlide] = useState(0);
  const splideInstanceRef = useRef<Splide | null>(null);
  const sliders = useMemo(() => (
    aidPhotos
      .map((photo) => photo?.img)
      .filter((img): img is string => img !== undefined)
  ), []);

  const handlePreviewClick = useCallback((index: number) => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go(index);
    }
  }, []);
  return (
    <CarouselBackground  id={`category${5}`} data-testId="aid-wrapper" >
      <Title text={t("aid_title")} data-testId="aid_title"/>
      <HorizontalSlider photos={sliders} selectedSlide={selectedSlide} setSplideInstance={splide => splideInstanceRef.current = splide} />
      <HorizontalSliderPreview photos={sliders} selectedSlide={selectedSlide} onPreviewClick={handlePreviewClick} getPerPageValue={getPerHorizontalPageValue} />
    </CarouselBackground>
  );
};

export default AID;
