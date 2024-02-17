//PreviewSliderVertical.tsx
import { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";

interface PreviewSliderVerticalProps {
  photos: string[];
  selectedSlide: number;
  onPreviewClick: (index: number) => void;
  getPerPageValue: () => number;
}

const VerticalSliderPreview = ({ photos, selectedSlide, onPreviewClick, getPerPageValue }: PreviewSliderVerticalProps) => {
  const previewSplideRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section id="vertical_thumbnail_carousel_preview" ref={previewSplideRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {photos.map((photo, previewIndex) => (
            <li key={previewIndex} className={`splide__slide`} onClick={() => onPreviewClick(previewIndex)} onContextMenu={(e) => e.preventDefault()}>
              <img className="ssm:h-[200px] sm:h-[160px] md:h-[155px] lg:h-[200px] w-full object-cover rounded-2xl" src={photo} alt={`Preview ${previewIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VerticalSliderPreview;