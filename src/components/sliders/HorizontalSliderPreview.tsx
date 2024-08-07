//PreviewSliderHorizontal.tsx
import { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";

interface PreviewSliderHorizontalProps {
  photos: string[];
  selectedSlide: number;
  onPreviewClick: (index: number) => void;
  getPerPageValue: () => number;
}

const HorizontalSliderPreview = ({ photos, selectedSlide, onPreviewClick, getPerPageValue }: PreviewSliderHorizontalProps) => {
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
    <section id="thumbnail_carousel_preview" ref={previewSplideRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {photos.map((photo, previewIndex) => (
            <li key={previewIndex} className={`splide__slide`} onClick={() => onPreviewClick(previewIndex)} onContextMenu={(e) => e.preventDefault()}>
              <img className="h-[100px] w-full object-cover rounded-2xl" src={photo} alt={`Preview ${previewIndex}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HorizontalSliderPreview;