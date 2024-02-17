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
  const nikolenkoteContainer = (
    <div className="w-full mt-2 sm:w-[48%] md:w-[40%] lg:w-[30%]">
      <div className="bg-white bg-opacity-30 h-[150px] ssm:mr-2 sm:mr-0 ssm:ms-2 md:ms-2 flex flex-row justify-center items-center px-4 py-2 space-x-2 rounded-xl bg-blur-sm">
        <img
          className="block mx-auto h-24 rounded-full ssm:mx-0 ssm:shrink-0"
          src={NIKOLENKOTE_avatar}
          alt="My Face"
        />
        <div className="text-center space-y-2 sm:text-center">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold whitespace-nowrap">
              {t("nikolenko_te")}
            </p>
            <p className="text-white font-medium whitespace-nowrap">
              {t("photographer")}
            </p>
          </div>
          <button
            data-te-toggle="modal"
            data-te-target="#exampleModal"
            className="shadow-lg px-4 py-1 whitespace-nowrap text-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600"
            onClick={handleButtonClick}
          >
            {t("message_button")}
          </button>
          <div className="w-full h-full">
            <NikolenkoTEBlockModal
              key={showModal ? "modal-open" : "modal-closed"}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const social_icons = (
    <div className="flex justify-between md:w-[100%] my-1">
      <a
        href="https://www.facebook.com/nikolenkote"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare size={35} className="cursor-pointer" />
      </a>
      <a
        href="https://www.instagram.com/nikolenkote/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare size={35} className="cursor-pointer" />
      </a>
      <FaTwitterSquare size={35} className="cursor-pointer" />
      <a
        href="https://github.com/NIKOLENKO-TE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare size={35} className="cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/nikolenkote/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={35} className="cursor-pointer" />
      </a>
    </div>
  );
  const follow_my_social_text = (
    <p id="social_media_text">{t("follow_my_social")}</p>
  );
  const social_media_label = <h1 className="shadow-lg px-5 pb-1 inline-block text-2xl bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl flex-nowrap mb-2">
    {t("social_media")}
  </h1>;
  const socialMediaContainer = (
    <div className="w-full mt-2 sm:w-[52%] md:w-[60%] lg:w-[40%]">
      <div className="text-white bg-white bg-opacity-30 backdrop-blur-[10px] h-[150px] px-4 py-2 rounded-xl mx-2 flex flex-col justify-center items-center">
        <div className=" text-center justify-center place-content-stretch">
          {social_media_label}
          {follow_my_social_text}
          {social_icons}
        </div>
      </div>
    </div>
  );
  const followMeContainer = (
    <div className="mt-2 mb-[20px] lg:pr-2 ssm:pr-2 md:pr-0 ssm:pl-2 md:pl-0 ssm:w-[100%] md:w-[98%] lg:w-[30%]">
      <div className="text-white bg-white bg-opacity-30 backdrop-blur-[10px] h-[150px] px-4 py-2 rounded-xl flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="shadow-lg px-5 pb-1 flex xl:mt-4 text-2xl whitespace-nowrap bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl">
            <h1>{t("follow_my_news")}</h1>
          </div>
          <div className="flex flex-row px-2 mt-5 xl:mb-4 gap-2 w-full ssm:w-[110%] lg:w-[110%] xl:w-[120%]">
            <input
              id="follow_me_input"
              type="email"
              placeholder="email@example.com"
              className="w-full ssm:w-[140%] lg:w-[140%] xl:w-[180%] h-[30px] flex rounded-md text-center text-black"
            />
            <button
              id="follow_me_notify_button"
              className="h-[30px] whitespace-nowrap px-2 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold border border-purple-200 hover:bg-purple-600"
            >
              <p className="mt-[-3px]">{t("notify_me_button")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div id="footer" className="flex flex-wrap justify-around my-2">
      {nikolenkoteContainer}
      {socialMediaContainer}
      {followMeContainer}
    </div>
  );
};

export default Footer;
