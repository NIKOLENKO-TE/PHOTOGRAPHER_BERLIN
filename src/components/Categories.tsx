import { forwardRef } from "react";
import "@splidejs/react-splide/css";
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

  let perPage = isXl ? 6 : isLg ? 5 : isMd ? 3 : isSd ? 2 : 7;

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
    <h3 className="flex justify-center ssm:px-1.5 ssm:pt-1.5">
      <span className="w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[12px] md:rounded-[15px]">
        <span className="text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[10px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 mx-4">
          {t("select_text")}
        </span>
      </span>
    </h3>
  );
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  const scrollToSmoothly = (pos: number, duration: number) => {
    const start = window.pageYOffset;
    const change = pos - start;
    const increment = 20;
    let currentTime = 0;
  
    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    animateScroll();
  };
  const categoriesPreview = (
    <div className="flex w-full ssm:p-1.5 md:p-2">
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
                  setTimeout(() => {
                    scrollToSmoothly(element.offsetTop - 5, 3000);
                    setTimeout(() => {
                      element.classList.remove('smooth-scroll-animation');
                    }, 1000);
                  }, 50);
                }
              }}
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
