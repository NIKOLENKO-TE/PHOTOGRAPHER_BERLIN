// 6_Categories.tsx

import React, {
  useEffect,
  useRef,
  useCallback,
  forwardRef,
} from "react";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { categoryPhotos } from "../data/data";

const Categories = forwardRef<HTMLDivElement, { scrollToBlock: (index: number) => void }>(({ scrollToBlock }, ref) => {

  const { t } = useTranslation("Categories");
  const isXl = useMediaQuery({ minWidth: 1240 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 667 });
  const isSd = useMediaQuery({ maxWidth: 666 });

  let perPage = 7;
  if (isXl) {
    perPage = 6;
  } else if (isLg) {
    perPage = 5;
  } else if (isMd) {
    perPage = 3;
  } else if (isSd) {
    perPage = 2;
  }

  const categoryRefs = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: categoryPhotos.length }, () => null)
  );

  const clickHandler = useCallback(
    (index: number) => {
      console.log(`Category chosen: ${index}`);
      scrollToBlock(index + 1);
    },
    [scrollToBlock]
  );
  useEffect(() => {
    const attachEventListeners = () => {
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.addEventListener("click", () => clickHandler(index));
        }
      });
    };

    const detachEventListeners = () => {
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.removeEventListener("click", () => clickHandler(index));
        }
      });
    };

    attachEventListeners();

    return () => {
      detachEventListeners();
    };
  }, [clickHandler]);


  const CategoriesBackgroundStyle =
    "mx-2 bg-white rounded-2xl shadow-lg bg-opacity-30 backdrop-blur-sm";

  const categoriesTitle = (
    <h3 className="flex justify-center ssm:px-1.5 ssm:pt-1.5  ">
      <span className="w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]">
        <span className="text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[10px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 mx-4">
          {t("select_text")}
        </span>
      </span>
    </h3>
  );

  const categoriesPreview = (
    <div className="flex w-full ssm:p-1.5 md:p-2">
      <Splide
        options={{
          perPage: perPage,
          gap: "0.5rem",
          drag: "free",
          arrows: true,
        }}
      >
        {categoryPhotos.map((item, index) => (
          <SplideSlide key={item.id}>
            <div
              className="flex justify-center"
              ref={(element) => (categoryRefs.current[index] = element)}
            >
              <div className="absolute top-1">
                <span className="px-2 items-center ssm:text-[22px] md:text-[24px] xl:text-[28px] text-white flex bg-white bg-opacity-20 backdrop-blur-[5px] cursor-pointer whitespace-nowrap ssm:rounded-[10px] md:rounded-[13px] shadow-md">
                  <p className="-mt-1">
                    {window.innerWidth >= 1500
                      ? t(item.title)
                      : t(item.shortTitle ?? item.title)}
                  </p>
                </span>
              </div>
              <img
                className="w-full object-cover rounded-2xl cursor-pointer"
                src={item.img}
                alt={item.title}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );

  return (
    <div className={CategoriesBackgroundStyle} ref={ref}>
      {categoriesTitle}
      {categoriesPreview}
    </div>
  );
});

export default Categories;