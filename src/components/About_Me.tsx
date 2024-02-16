//About_Me.tsx
import React from "react";
import { useState } from "react";
import NikolenkoTEBlockModal from "./Modal";
import iphone_photo_1 from "./img/iphones/FC_two_phones_1.png";
import nikolenkote from "./img/NIKOLENKOTE_PHOTO_BW.png";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

const AboutMe: React.FC = (): JSX.Element => {
  const { t } = useTranslation("AboutMe");
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const AboutMeTitle = (
    <h1 className="flex justify-center ssm:pb-1 md:pb-2 ssm:-mt-1 md:mt-0 uppercase" data-testId="about-me-title">
      <span className="w-full justify-center ssm:py-2 sm:py-[0px] ssm:h-[29px] sm:h-[31px] md:h-[38px] flex text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-500/50 ssm:rounded-[13px] md:rounded-[15px]">
        <span className="text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:-mt-[10px] sm:-mt-0.5 md:-mt-0.5 lg:-mt-0.5 xl:-mt-1.5 mx-4">
          {t("order_services")}
        </span>
      </span>
    </h1>
  );
  const AboutMeIphone = (
    <div className="justify-items-center select-none m-2" data-testId="about-me-iphone">
      <img src={iphone_photo_1} alt="iphone_photo" />
    </div>
  );
  const aboutMeAvatarBW = (
    <img
      className="mx-1  h-[160px] float-left "
      src={nikolenkote}
      alt="My avatar"
      data-testId="about-me-avatar"
    />
  );
  const AboutMeTextTitle = (
    <h1 className="text-center ssm:text-2xl md:text-4xl font-bold ml-2 mr-2 select-none pb-2" data-testId="about-me-text-title">
      {t("opportunity_text")}
    </h1>
  );
  const aboutMeOrderButton = (
    <div className="flex items-center justify-center" data-testId="about-me-order-button">
      <button
        onClick={handleButtonClick}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  border-blue-600 shadow-lg shadow-blue-500/50 text-xl py-2 rounded-[15px]  mr-2"
        data-testId="about-me-order-button"
      >
        {t("order_button_text")}
      </button>
    </div>
  );
  return (
    <div className="w-full ssm:px-2 md:px-2 py-2" id={`category${7}`} data-testId="about-me-wrapper">
      <Element name={`category${7}`}></Element>
      {AboutMeTitle}
      <div className="bg-white bg-opacity-30 backdrop-blur-[10px] w-flex h-flex justify-items-center max-w-[1000px] mx-auto grid items-center ssm:grid-cols-1 md:grid-cols-2  rounded-2xl shadow-xl ">
        {AboutMeIphone}
        <div className="flex-col grid m-2">
          {AboutMeTextTitle}
          <p className="pr-3 ssm:text-xl sm:text-2xl text-justify select-none" data-testId="about-me-text">
            {aboutMeAvatarBW}
            {t("about_me_text")}
          </p>
          {aboutMeOrderButton}
        </div>
      </div>
      <NikolenkoTEBlockModal
        key={showModal ? "modal-open" : "modal-closed"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default AboutMe;
