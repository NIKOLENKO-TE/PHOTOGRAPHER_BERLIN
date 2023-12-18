import React from "react";
import NIKOLENKOTE_avatar from "./img/NIKOLENKOTE.jpg";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const NikolenkoTEBlock = () => {
  return (
    <div className="h-[150px] ssm:mr-2 sm:mr-0 ssm:ms-2 md:ms-2 flex flex-row justify-center items-center px-4 py-2 space-x-2 bg-white/20 rounded-xl bg-blur-sm">
      <img
        className="block mx-auto h-24 rounded-full ssm:mx-0 ssm:shrink-0"
        src={NIKOLENKOTE_avatar}
        alt="My Face"
      />
      <div className="text-center space-y-2 sm:text-center">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold whitespace-nowrap">NIKOLENKO Tymofii</p>
          <p className="text-slate-500 font-medium whitespace-nowrap">Photographer</p>
        </div>
        <button className="px-4 py-1 whitespace-nowrap text-md bg-gradient-to-l from-cyan-500 to-blue-500  font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600 ">
          Write a massage
        </button>
      </div>
    </div>
  );
};
const SocialMedia = () => {
  return (
    <div className="text-white bg-white/30 h-[150px] px-4 py-2 bg-blur-sm rounded-xl mx-2 flex flex-col justify-center items-center ">
      <div className="px-4 text-center justify-center place-content-stretch gap-2 p-2">
        <h1 className="px-5 pb-1 inline-block text-2xl bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl flex-nowrap mb-2">
          Social media
        </h1>
        <p>You can follow my news on social networks. Subscribe now?</p>
        <div className="flex justify-between md:w-[100%] my-1">
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
      <div className="row ssm:me-2 ms-2 lg:ml-0">
        <div className=" text-white bg-white/30 h-[150px] px-4 py-2 bg-blur-sm rounded-xl flex flex-col lg:flex-row justify-center items-center flex-wrap">
          <div
            id="follow_me_title"
            className="px-5 pb-1  flex xl:mt-4 text-2xl whitespace-nowrap bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl flex-nowrap "
          >
            <h1>Follow my news</h1>
          </div>
          <div className="flex flex-col xl:flex-row items-center mt-2 md:-mb-2 xl:mb-1 ">
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full ssm:w-[180%] lg:w-[140%] xl:w-[180%] p3 mr-2 h-[30px] flex rounded-md text-center text-black"
            />
            <button
              id="notify_button"
              className="h-[30px]  whitespace-nowrap md:mt-2 md:ml-0 mx-2 my-2 pb-2 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 font-semibold border border-purple-200  hover:bg-purple-600"
            >
              <p className="mt-[-3px]">Notify me</p>
            </button>
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
