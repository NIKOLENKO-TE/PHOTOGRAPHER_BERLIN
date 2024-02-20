// Hospital.tsx
import { forwardRef, useRef, useState, useMemo, useCallback } from "react";
import { toast } from 'react-hot-toast';
import { Splide } from "@splidejs/splide";
import { useTranslation } from "react-i18next";
import { hospitalPhotos } from "../data/data";
import HorizontalSlider, { getPerHorizontalPageValue } from './sliders/HorizontalSlider';
import Title from './sliders/Title';
import SiteContainerBackground from './sliders/SiteContainerBackground';
import HorizontalSliderPreview from './sliders/HorizontalSliderPreview';

const Hospital = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation("Hospital");
  const [selectedSlide] = useState(0);
  const splideInstanceRef = useRef<Splide | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const sliders = useMemo(() => (
    hospitalPhotos
      .map((photo) => photo?.img)
      .filter((img): img is string => img !== undefined)
  ), []);

  const handlePreviewClick = useCallback((index: number) => {
    if (splideInstanceRef.current) {
      splideInstanceRef.current.go(index);
    }
  }, []);

  const handleConfirm = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFadeOut(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setFadeOut(false);
      toast.success(t("hospital.age.success"));
    }, 300);
  };

  const handleContainerClick = () => {
    if (showConfirmation) {
      toast.error(t("hospital.age.error"));
    }
  };

  const buttonAge = (
    <div className={`absolute cursor-not-allowed bottom-2 left-2 px-5 w-[calc(100%-1rem)] ssm:h-[calc(100%-3.2rem)] sm:h-[calc(100%-3.3rem)] md:h-[calc(100%-3.7rem)] z-50 inline-flex items-center justify-center backdrop-blur-sm bg-gradient-to-b from-blue-600/60 to-amber-400/90 drop-shadow-lg rounded-2xl transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <button className="flex flex-wrap justify-center items-center ssm:py-2 sm:py-[0px] ssm:h-auto sm:h-[40px] md:h-[55px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]" onClick={handleConfirm}>
        <span className="text-white ssm:text-[22px] md:text-[26px]  xl:text-[30px] ssm:-mt-1  sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 uppercase">{t("age18")}</span>
      </button>
    </div>
  );

  return (
    <div ref={ref} onClick={handleContainerClick}>
      <SiteContainerBackground id={`category${6}`} data-testid="war_medicine-wrapper">
        <Title text={t("war_medicine")} data-testid="hospital_title" />
        {showConfirmation && (
          buttonAge
        )}
        <HorizontalSlider photos={sliders} selectedSlide={selectedSlide} setSplideInstance={splide => splideInstanceRef.current = splide} autoplay={false} />
        <HorizontalSliderPreview photos={sliders} selectedSlide={selectedSlide} onPreviewClick={handlePreviewClick} getPerPageValue={getPerHorizontalPageValue} />
      </SiteContainerBackground>
    </div>
  );
});

export default Hospital;
