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
    <div className="min-w-[340px] h-[150px] flex items-center px-4 py-2 space-x-6 bg-white/20 rounded-xl m-2 bg-blur-sm">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={NIKOLENKOTE_avatar}
        alt="My Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">NIKOLENKO Tymofii</p>
          <p className="text-slate-500 font-medium">Photographer</p>
        </div>
        <button className="px-4 py-1 text-md bg-gradient-to-l from-cyan-500 to-blue-500  font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600 ">
          Whrite a massage
        </button>
      </div>
    </div>
  );
};
const SocialMedia = () => {
  return (
    <div className="text-white bg-white/30 min-w-[300px] max-w-[500px] h-[150px] px-4 py-2 bg-blur-sm rounded-xl m-2 flex flex-col justify-center items-center ">
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
    <div className="text-white bg-white/30 min-w-[300px] max-w-[500px] h-[150px] px-4 py-2 bg-blur-sm rounded-xl m-2 flex md:flex-col justify-center items-center">
      <div className="px-5 pb-1 inline-block text-2xl bg-gradient-to-l from-cyan-500 to-blue-500 border border-purple-200 hover:bg-purple-600 rounded-2xl flex-nowrap mb-2">
        <h1 >
          Follow my news
        </h1>
      </div>
      <div className="flex flex-row items-center md:flex-wrap">
        <input
          type="email"
          placeholder="email@example.com"
          className="p3 h-[30px] flex  rounded-md text-center text-black "
        />
        <button
          id="notify_button"
          className=" w-auto  bg-gradient-to-l from-cyan-500 to-blue-500  font-semibold border border-purple-200  hover:bg-purple-600  h-[30px]  rounded-md  mx-2 md:my-2"
        >
          <p className="mt-[-3px]">Notify me</p>
        </button>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className=" gap-2">
      <div className="flex justify-around">
        <NikolenkoTEBlock />
        <SocialMedia />
        <MailToMe />
      </div>
    </div>
  );
};

export default Footer;
