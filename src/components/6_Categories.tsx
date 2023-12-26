//6_Categories.tsx
import React from "react";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { categoryPhotos } from "../data/data";

const Categories: React.FC = (): JSX.Element => {
  const { t } = useTranslation("Categories");
  const isXl = useMediaQuery({ minWidth: 1240 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const isSd = useMediaQuery({ maxWidth: 767 });

  let perPage = 5;
  if (isXl) {
    perPage = 5;
  } else if (isLg) {
    perPage = 4;
  } else if (isMd) {
    perPage = 3;
  } else if (isSd) {
    perPage = 2;
  }
  const CategoriesBackgroundStyle =
    "mx-2 bg-white rounded-2xl shadow-lg bg-opacity-30 backdrop-blur-sm";
  const categoriesTitle = (
    <h3 className="flex justify-center pt-2">
      <span className="text-white h-[40px] pt-[1px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-lg shadow-blue-500/50  text-xl flex py-2 rounded-[15px]">
        <span className="relative text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:mt-0.5  select-none m-4">
          {t("select_text")}
        </span>
      </span>
    </h3>
  );
  const categoriesPreview = (
    <div className="flex w-full m-auto py-2 px-2">
      <Splide
        options={{
          perPage: perPage,
          gap: "0.5rem",
          drag: "free",
          arrows: true,
        }}
      >
        {categoryPhotos.map(
          (item: {
            id: React.Key | null | undefined;
            title: any;
            img: string | undefined;
          }) => (
            <SplideSlide key={item.id}>
              <div key={item.id} className="flex justify-center">
                <div className="absolute top-1">
                  <span className="text-white flex w-[fit-content] ssm:text-xl md:text-2xl backdrop-blur-[5px] bg-white/20 cursor-pointer whitespace-nowrap place-content-stretch rounded-[13px] px-2 shadow-md ssm:pb-0 md:pb-1">
                    <p>{t(item.title)}</p>
                  </span>
                </div>
                <img
                  className="w-full object-cover rounded-2xl cursor-pointer"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
  return (
    <div className={CategoriesBackgroundStyle}>
      {categoriesTitle}
      {categoriesPreview}
    </div>
  );
};

export default Categories;
