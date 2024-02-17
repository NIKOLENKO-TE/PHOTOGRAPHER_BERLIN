import "@splidejs/react-splide/css";
import { forwardRef, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { categoryPhotos } from "../data/data";

const Categories = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation("Categories");
  const isXl = useMediaQuery({ minWidth: 1240 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 667 });
  const isSd = useMediaQuery({ maxWidth: 666 });
  const anotherRef = useRef(null); 
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

  const CategoriesBackgroundStyle =
    "mx-2 bg-white rounded-2xl shadow-lg bg-opacity-30 backdrop-blur-sm";

  const smoothScrollAnimationStyle = `
    @keyframes smoothScroll {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  const categoriesTitle = (
    <h3 className="flex justify-center ssm:px-1.5 ssm:pt-1.5 ">
      <span className="flex w-5/6 justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] bg-purple-500/30 shadow-lg  ssm:rounded-[12px] md:rounded-[15px]  " data-testid="categories-title">
        <span className="text-white flex  ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[10px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-[5px] uppercase whitespace-nowrap">
          {t("select_category_text")}
        </span>
      </span>
    </h3>
    
);

  const categoriesPreview = (
    <div className="flex w-full ssm:p-1.5 md:p-2" data-testid="categories-preview">
      <style>{smoothScrollAnimationStyle}</style>
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
              className="flex justify-center smooth-scroll-animation" 
              onClick={() => {
                const element = document.getElementById(`category${index}`);
                if (element) {
                  element.classList.add('smooth-scroll-animation'); 
                  window.scrollTo({
                    top: element.offsetTop - 5,
                    behavior: "smooth",
                  });
                  setTimeout(() => {
                    element.classList.remove('smooth-scroll-animation');
                  }, 500);
                }
              }}
              data-testid={`category-${index}`}
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
    <div className={CategoriesBackgroundStyle} ref={ref} data-testid="categories-wrapper">
      {categoriesTitle}
      <div ref={anotherRef}>
        {categoriesPreview}
      </div>
    </div>
  );
});

export default Categories;
