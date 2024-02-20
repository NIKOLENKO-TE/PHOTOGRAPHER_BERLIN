// Flowers.tsx
import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { Splide } from "@splidejs/splide";
import { useTranslation } from "react-i18next";
import { flowersPhotos } from "../data/data";
import HorizontalSlider, {
  getPerHorizontalPageValue,
} from "./sliders/HorizontalSlider";
import Title from "./sliders/Title";
import SiteContainerBackground from "./sliders/SiteContainerBackground";
import HorizontalSliderPreview from "./sliders/HorizontalSliderPreview";

const Flowers = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation("Flowers");
  const [selectedSlide] = useState(0);
  const splideInstanceRef = useRef<Splide | null>(null);
  const sliders = useMemo(
    () =>
      flowersPhotos
        .map((photo) => photo?.img)
        .filter((img): img is string => img !== undefined),
    []
  );

  const handlePreviewClick = useCallback((index: number) => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go(index);
    }
  }, []);

  return (
    <div ref={ref}>
      <SiteContainerBackground id={`category${1}`} data-testid="flowers-wrapper">
        <Title text={t("flowers_title")} />
        <HorizontalSlider
          photos={sliders}
          selectedSlide={selectedSlide}
          setSplideInstance={(splide) => (splideInstanceRef.current = splide)}
          autoplay={false}
        />
        <HorizontalSliderPreview
          photos={sliders}
          selectedSlide={selectedSlide}
          onPreviewClick={handlePreviewClick}
          getPerPageValue={getPerHorizontalPageValue}
        />
      </SiteContainerBackground>
    </div>
  );
});

export default Flowers;
