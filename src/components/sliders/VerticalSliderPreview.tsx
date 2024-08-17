// PreviewSliderVertical.tsx
import { useEffect, useRef, useState } from "react";
import { Splide } from "@splidejs/splide";
import SkeletonLoader from './SkeletonLoader'; // Import SkeletonLoader

interface PreviewSliderVerticalProps {
  photos: string[];
  selectedSlide: number;
  onPreviewClick: (index: number) => void;
  getPerPageValue: () => number;
}

const VerticalSliderPreview = ({ photos, selectedSlide, onPreviewClick, getPerPageValue }: PreviewSliderVerticalProps) => {
  const previewSplideRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean[]>(Array(photos.length).fill(true));

  useEffect(() => {
    if (previewSplideRef.current) {
      const previewSplide = new Splide(previewSplideRef.current, {
        type: "slide",
        perPage: getPerPageValue(),
        gap: 5,
        rewind: true,
        pagination: false,
        focus: "center",
      });

      previewSplide.on("mounted", () => {
        const slides = previewSplideRef.current!.querySelectorAll(".splide__slide");
        slides.forEach((slide, index) => {
          slide.addEventListener("click", () => {
            onPreviewClick(index);
          });
        });
      });

      previewSplide.mount();

      const handleResize = () => {
        const newPerPage = getPerPageValue();
        previewSplide.go(selectedSlide);
        previewSplide.options.perPage = newPerPage;
        previewSplide.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        previewSplide.destroy();
      };
    }
  }, [selectedSlide, getPerPageValue, onPreviewClick]);

  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };
  const commonImageStyles = "ssm:h-[200px] sm:h-[160px] md:h-[155px] lg:h-[200px] w-full object-cover rounded-2xl";
  return (
      <section id="vertical_thumbnail_carousel_preview" ref={previewSplideRef} className="splide ssm:-mr-2 sm:mr-0">
        <div className="splide__track">
          <ul className="splide__list">
            {photos.map((photo, previewIndex) => (
                <li key={previewIndex} className="splide__slide" onClick={() => onPreviewClick(previewIndex)} onContextMenu={(e) => e.preventDefault()}>
                  {loading[previewIndex] && (
                      <SkeletonLoader className={commonImageStyles} />
                  )}
                  <img
                      className={`duration-300 ease-out ${commonImageStyles} ${loading[previewIndex] ? 'hidden' : ''}`}
                      src={photo}
                      alt={`Preview ${previewIndex}`}
                      onLoad={() => handleImageLoad(previewIndex)}
                  />
                </li>
            ))}
          </ul>
        </div>
      </section>
  );
};

export default VerticalSliderPreview;
