import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { restoredPhotos } from "../data/data";

const Restoration = () => {
    const ImageRestoration1 = () => {
        const [isDragging, setIsDragging] = useState(false);
        const [sliderX, setSliderX] = useState("50%");
      
        const handleMouseDown = () => {
          setIsDragging(true);
        };
      
        const handleMouseUp = () => {
          setIsDragging(false);
        };
      
        const handleMouseMove = (e) => {
          if (isDragging) {
            const container = e.currentTarget;
            const offsetX = e.clientX - container.getBoundingClientRect().left;
            setSliderX(`${(offsetX / container.offsetWidth) * 100}%`);
          }
        };
      
        return (
          <section>
            <div
              className="relative h-[620px] w-[800px] overflow-hidden object-cover rounded-2xl bg-slate-200"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <img
                src={restoredPhotos[0].img}
                className="absolute h-full object-cover"
                alt="1"
              />
              <div className="absolute h-full overflow-hidden">
                <img
                  src={restoredPhotos[1].img}
                  className="h-full object-cover"
                  alt="2"
                  style={{ clipPath: `inset(0 0 0 ${sliderX})` }}
                />
              </div>
              <div
                className="relative w-2 bg-white "
                style={{ left: sliderX, userSelect: "none" }}
                onMouseDown={handleMouseDown}
              >
                <div className="absolute -right-3 top-1 flex h-4 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
                </div>
                <div className="absolute -right-3 top-100 flex h-4 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
                </div>
              </div>
            </div>
          </section>
        );
      };
      
    
      return (
        <div className="px-2">
          <ImageRestoration1 />
    
        </div>
      );
    };
    
    export default Restoration;
