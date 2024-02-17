//About_Me.tsx
import React, { forwardRef } from "react";
import { useState } from "react";
import NikolenkoTEBlockModal from "./Modal";
import iphone_photo_1 from "./img/iphones/FC_two_phones_1.png";
import nikolenkote from "./img/NIKOLENKOTE_PHOTO_BW.png";
import { useTranslation } from "react-i18next";
import Title from './sliders/Title';
import CarouselBackground from './sliders/CarouselBackground';

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation("AboutMe");
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const AboutMeIphone = (
    <div className="justify-items-center select-none m-2" data-testid="about-me-iphone">
      <img src={iphone_photo_1} alt="iphone_photo" />
    </div>
  );
  const aboutMeAvatarBW = (
    <img
      className="mx-1  h-[160px] float-left "
      src={nikolenkote}
      alt="My avatar"
      data-testid="about-me-avatar"
    />
  );
  const AboutMeTextTitle = (
    <h1 className="text-center ssm:text-2xl md:text-4xl font-bold select-none pb-2" data-testid="about-me-text-title">
      {t("opportunity_text")}
    </h1>
  );
  const aboutMeOrderButton = (
    <div className="flex items-center justify-center ssm:pt-2 lg:pt-5" data-testid="about-me-order-button">
      <button
        onClick={handleButtonClick}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  border-blue-600 shadow-lg shadow-blue-500/50 text-xl py-2 rounded-[15px]  mr-2"
        data-testid="about-me-order-button"
      >
        {t("order_button_text")}
      </button>
    </div>
  );
  return (
    <div ref={ref}>
      <CarouselBackground id={`category${7}`} data-testid="about-me-wrapper">
        <Title text={t("order_services")} data-testid="hospital_title" />
        <div className="w-flex h-flex justify-items-center max-w-[1500px] mx-auto grid items-center ssm:grid-cols-1 md:grid-cols-2 rounded-2xl">
          {AboutMeIphone}
          <div className="flex-col grid m-2">
            {AboutMeTextTitle}
            <p className="pr-3 ssm:text-xl sm:text-2xl text-justify select-none" data-testid="about-me-text">
              {aboutMeAvatarBW}
              {t("about_me_text")}
            </p>
            {aboutMeOrderButton}
          </div>
        </div>
      </CarouselBackground>
      <NikolenkoTEBlockModal
        key={showModal ? "modal-open" : "modal-closed"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
});

export default AboutMe;
