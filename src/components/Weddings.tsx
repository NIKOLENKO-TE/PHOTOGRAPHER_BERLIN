// Weddings.tsx
import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { Splide } from "@splidejs/splide";
import { useTranslation } from "react-i18next";
import { weddingPhotosVertical, weddingHorizontal } from "../data/data";
import HorizontalSlider, {
  getPerHorizontalPageValue,
} from "./sliders/HorizontalSlider";
import VerticalSlider, {
  getPerVerticalPageValue,
} from "./sliders/VerticalSlider";
import Title from "./sliders/Title";
import SiteContainerBackground from "./sliders/SiteContainerBackground";
import HorizontalSliderPreview from "./sliders/HorizontalSliderPreview";
import VerticalSliderPreview from "./sliders/VerticalSliderPreview";

const Weddings = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation("Weddings");
  const [selectedHorizontalSlide] = useState(0);
  const [selectedVerticalSlide] = useState(0);
  const splideInstanceRefHorizontal = useRef<Splide | null>(null);
  const splideInstanceRefVertical = useRef<Splide | null>(null);
  const slidersHorizontal = useMemo(
    () =>
      weddingHorizontal
        .map((photo) => photo?.img)
        .filter((img): img is string => img !== undefined),
    []
  );
  const slidersVertical = useMemo(
    () =>
      weddingPhotosVertical
        .map((photo) => photo?.img)
        .filter((img): img is string => img !== undefined),
    []
  );

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
      <SiteContainerBackground id={`category${0}`} data-testid="weddings-wrapper">
        <Title text={t("weddings")} data-testid="weddings_title" />
        <div className="flex ssm:flex-wrap md:flex-nowrap ">
          <div
            id="Vertical"
            className="ssm:basis-1/1 sm:basis-1/3 md:basis-1/4 pr-2 ssm:pb-2 sm:pb-0 md:pb-0"
          >
            <VerticalSlider
              photos={slidersVertical}
              selectedSlide={selectedVerticalSlide}
              setSplideInstance={(splide) =>
                (splideInstanceRefVertical.current = splide)
              }
              autoplay={false}
            />
            <VerticalSliderPreview
              photos={slidersVertical}
              selectedSlide={selectedVerticalSlide}
              onPreviewClick={handleVerticalPreviewClick}
              getPerPageValue={getPerVerticalPageValue}
            />
          </div>
          <div
            id="Horizontal"
            className="ssm:basis-1/1 sm:basis-2/3 md:basis-3/4 lg:pt-0"
          >
            <HorizontalSlider
              photos={slidersHorizontal}
              selectedSlide={selectedHorizontalSlide}
              setSplideInstance={(splide) =>
                (splideInstanceRefHorizontal.current = splide)
              }
              autoplay={false}
            />
            <HorizontalSliderPreview
              photos={slidersHorizontal}
              selectedSlide={selectedHorizontalSlide}
              onPreviewClick={handleHorizontalPreviewClick}
              getPerPageValue={getPerHorizontalPageValue}
            />
          </div>
        </div>
      </SiteContainerBackground>
    </div>
  );
});

export default Weddings;
