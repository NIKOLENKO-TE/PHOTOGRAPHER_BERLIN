//Footer.tsx
import { useState } from "react";
import NikolenkoTEBlockModal from "./Modal";
import NIKOLENKOTE_avatar from "./img/NIKOLENKOTE.jpg";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("Footer");
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const social_icons = (
    <div className="flex justify-between my-1" data-testid="social_icons">
      <a
        href="https://www.facebook.com/nikolenkote"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="facebook_link"
      >
        <FaFacebookSquare size={35} className="cursor-pointer" />
      </a>
      <a
        href="https://www.instagram.com/nikolenkote/"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="instagram_link"
      >
        <FaInstagramSquare size={35} className="cursor-pointer" />
      </a>
      <a
        href="https://twitter.com/speczpua"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="twitter_link"
      >
        <FaTwitterSquare size={35} className="cursor-pointer" />
      </a>
      <a
        href="https://github.com/NIKOLENKO-TE"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="github_link"
      >
        <FaGithubSquare size={35} className="cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/nikolenkote/"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="linkedin_link"
      >
        <FaLinkedin size={35} className="cursor-pointer" />
      </a>
    </div>
  );

  const nikolenkoteContainer = (
    <div className="order-1 w-full pb-2 sm:pr-2 md:pr-0 ssm:col-span-12 md:col-span-6 xl:col-span-3" data-testid="nikolenkoteContainer">
      <div className="bg-white bg-opacity-30 h-[150px] ssm:mr-2 sm:mr-0 ssm:ms-2 md:ms-2 flex flex-row justify-center items-center px-4 py-2 space-x-2 rounded-xl bg-blur-sm">
        <img
          className="block mx-auto h-24 rounded-full ssm:mx-0 ssm:shrink-0"
          src={NIKOLENKOTE_avatar}
          alt="My Face"
          data-testid="NIKOLENKOTE_avatar"
        />
        <div className="text-center space-y-2 text-center">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold whitespace-nowrap" data-testid="nikolenko_te_name">
              {t("nikolenko_te")}
            </p>
            <p className="text-white font-medium whitespace-nowrap" data-testid="photographer_text">
              {t("photographer")}
            </p>
          </div>
          <button
            data-te-toggle="modal"
            data-te-target="#exampleModal"
            className="shadow-lg px-4 py-1 pb-2 whitespace-nowrap text-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600"
            onClick={handleButtonClick}
            data-testid="message_me_button"
          >
            {t("message_button")}
          </button>
          <div className="w-full h-full">
            <NikolenkoTEBlockModal
              key={showModal ? "modal-open" : "modal-closed"}
              showModal={showModal}
              setShowModal={setShowModal}
              data-testid="NikolenkoTEBlockModal"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const followMeContainer = (
    <div className="ssm:order-2 xl:order-3 ssm:pr-2 ssm:pl-2 lg:pl-2 xl:pl-0 w-full ssm:col-span-12 md:col-span-6 xl:col-span-4" data-testid="followMeContainer">
      <div className="text-white bg-white bg-opacity-30 backdrop-blur-[10px] h-[150px] px-4 py-2 rounded-xl flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full flex flex-col text-center  items-center gap-4">
          <h1 className="w-full px-5 pb-1 inline-block text-2xl bg-pink-500/40 shadow-lg ssm:rounded-[12px] md:rounded-[15px] flex-nowrap mb-2" data-testid="follow_my_news_text">{t("follow_my_news")}</h1>
          <div className="w-full flex flex-row gap-2">
            <input
              id="follow_me_input"
              type="email"
              placeholder="email@example.com"
              className="w-full flex rounded-md text-center text-black"
              data-testid="follow_me_input"
            />
            <button
              id="follow_me_notify_button"
              data-testid="follow_me_notify_button"
              className="h-[30px] whitespace-nowrap px-2 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold border border-purple-200 hover:bg-purple-600"
            >
              <p className="mt-[-3px]" data-testid="notify_me_button_name">{t("notify_me_button")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const socialMediaContainer = (
    <div className="ssm:order-3 xl:order-2 ssm:pb-6 md:pb-2 w-full ssm:col-span-12 md:col-span-12 xl:col-span-5" data-testid="socialMediaContainer">
      <div className="text-white bg-white bg-opacity-30 backdrop-blur-[10px] h-[150px] px-4 py-2 rounded-xl mx-2 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col text-center">
          <h1 className="px-5 pb-1 inline-block text-2xl bg-pink-500/40 shadow-lg ssm:rounded-[12px] md:rounded-[15px] flex-nowrap mb-2" data-testid="social_media">
            {t("social_media")}
          </h1>
          <p id="social_media_text" data-testid="social_media_text">{t("follow_my_social")}</p>
          {social_icons}
        </div>
      </div>
    </div>
  );
  return (
    <div id="footer" data-testid="footer" className="grid grid-cols-12 ssm:grid-rows-2 xl:grid-rows-1 justify-around">
      {nikolenkoteContainer}
      {socialMediaContainer}
      {followMeContainer}
    </div>
  );
};

export default Footer;
