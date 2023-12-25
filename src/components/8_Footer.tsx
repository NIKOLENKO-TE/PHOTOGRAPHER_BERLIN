//8_Footer.tsx
import { useState } from "react";
import NikolenkoTEBlockModal from "./8_Footer_Modal";
import NIKOLENKOTE_avatar from "./img/NIKOLENKOTE.jpg";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const NikolenkoTEBlock = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-white bg-opacity-30 h-[150px] ssm:mr-2 sm:mr-0 ssm:ms-2 md:ms-2 flex flex-row justify-center items-center px-4 py-2 space-x-2 rounded-xl bg-blur-sm">
      <img
        className="block mx-auto h-24 rounded-full ssm:mx-0 ssm:shrink-0"
        src={NIKOLENKOTE_avatar}
        alt="My Face"
      />
      <div className="text-center space-y-2 sm:text-center ">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold whitespace-nowrap">
            NIKOLENKO Tymofii
          </p>
          <p className="text-slate-500 font-medium whitespace-nowrap">
            Photographer
          </p>
        </div>
        <button
          className="shadow-lg px-4 py-1 whitespace-nowrap text-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600"
          onClick={handleButtonClick}
        >
          Write a message
        </button>
        <NikolenkoTEBlockModal
          key={showModal ? "modal-open" : "modal-closed"}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div
      id="social_media_container"
      className="text-white bg-white bg-opacity-30 backdrop-blur-[10px] h-[150px] px-4 py-2 rounded-xl mx-2 flex flex-col justify-center items-center "
    >
      <div
        id="social_media_field"
        className=" px-4 text-center justify-center place-content-stretch gap-2 p-2"
      >
        <h1
          id="social_media_title"
          className="shadow-lg px-5 pb-1 inline-block text-2xl bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl flex-nowrap mb-2"
        >
          Social media
        </h1>
        <p id="social_media_text">
          You can follow my news on social networks. Subscribe now?
        </p>
        <div
          id="social_media_icons"
          className="flex justify-between md:w-[100%] my-1 "
        >
          <FaFacebookSquare size={30} className="cursor-pointer" />
          <FaInstagramSquare size={30} className="cursor-pointer" />
          <FaTwitterSquare size={30} className="cursor-pointer" />
          <FaGithubSquare size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const MailToMe = () => {
  return (
    <div className="row ms-2 ssm:me-2 lg:ml-0 ">
      <div className="text-white bg-white bg-opacity-30 backdrop-blur-[10px] h-[150px] px-4 py-2  rounded-xl flex flex-col lg:flex-row justify-center items-center flex-wrap">
        <div className="flex flex-col items-center ">
          <div
            id="follow_me_title"
            className="shadow-lg px-5 pb-1 flex xl:mt-4 text-2xl whitespace-nowrap bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl flex-nowrap"
          >
            <h1>Follow my news</h1>
          </div>
          <div
            id="follow_me_input_plus_button"
            className="flex flex-row px-2 mt-5 xl:mb-4 gap-2 w-full ssm:w-[110%] lg:w-[110%] xl:w-[120%]"
          >
            <input
              id="follow_me_input"
              type="email"
              placeholder="email@example.com"
              className="w-full ssm:w-[140%] lg:w-[140%] xl:w-[180%] h-[30px] flex rounded-md text-center text-black"
            />
            <button
              id="follow_me_notify_button"
              className="h-[30px] whitespace-nowrap  rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold border border-purple-200 hover:bg-purple-600"
            >
              <p className="mt-[-3px]">Notify me</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around my-2 ">
      <div className="flex-shrink-0 w-full mt-2 sm:w-[48%] md:w-[40%] lg:w-[30%]">
        <NikolenkoTEBlock />
      </div>
      <div className="flex-shrink-0 w-full mt-2 sm:w-[52%] md:w-[60%] lg:w-[40%]">
        <SocialMedia />
      </div>
      <div className="flex-shrink-0 w-full mt-2 mb-[20px] sm:w-[80%] md:w-[80%] lg:w-[30%]">
        <MailToMe />
      </div>
    </div>
  );
};

export default Footer;
