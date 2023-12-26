//3_About_Me.tsx
import React from "react";
import iphone_photo_1 from "./img/iphones/FC_two_phones_1.png";
import nikolenkote from "./img/NIKOLENKOTE_PHOTO_BW.png";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = (): JSX.Element => {
  const { t } = useTranslation("AboutMe");
  const AboutMeTitle = (
    <h1 className="flex justify-center">
      <span className="text-white h-[40px] pt-[2px] bg-gradient-to-r  from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-lg shadow-blue-500/50  text-xl flex py-2 rounded-[15px]">
        {" "}
        <span className="relative text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:mt-0.5 px-3 select-none">
          {t("order_services")}
        </span>
      </span>
    </h1>
  );
  const AboutMeIphone = (
    <div className="justify-items-center select-none m-2">
      <img src={iphone_photo_1} alt="iphone_photo" />
    </div>
  );
  const aboutMeAvatarBW = (
    <img
      className="mx-1  h-[160px] float-left "
      src={nikolenkote}
      alt="My avatar"
    />
  );
  const AboutMeTextTitle = (
    <h1 className="text-center ssm:text-2xl md:text-4xl font-bold ml-2 mr-2 select-none pb-2">
      {t("opportunity_text")}
    </h1>
  );
  const aboutMeOrderButton = (
    <div className="flex items-center justify-center">
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  border-blue-600 shadow-lg shadow-blue-500/50  text-xl py-2  rounded-[15px]  mr-2">
        {t("order_button_text")}
      </button>
    </div>
  );
  return (
    <div className="w-full ssm:px-2 md:px-4 py-2">
      {AboutMeTitle}
      <div className="bg-white bg-opacity-30 backdrop-blur-[10px] w-flex h-flex justify-items-center max-w-[1000px] mx-auto grid items-center ssm:grid-cols-1 md:grid-cols-2 mt-2  rounded-2xl shadow-xl ">
        {AboutMeIphone}
        <div className="flex-col grid m-2">
          {AboutMeTextTitle}
          <p className="pr-3 ssm:text-xl sm:text-2xl text-justify select-none">
            {aboutMeAvatarBW}
            {t("about_me_text")}
          </p>
          {aboutMeOrderButton}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
