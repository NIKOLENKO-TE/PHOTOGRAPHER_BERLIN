import React from "react";
import NIKOLENKOTE_avatar from "./img/NIKOLENKOTE.jpg";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const NikolenkoTEBlock = () => {
    return (
        <div className="w-[340px] flex sm:items-center px-4 py-2 space-x-6 bg-white rounded-xl">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                src={NIKOLENKOTE_avatar}
                alt="My Face"
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        NIKOLENKO Tymofii
                    </p>
                    <p className="text-slate-500 font-medium">Photographer</p>
                </div>
                <button className="px-4 py-1 text-sm bg-gradient-to-l from-cyan-500 to-blue-500  font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600 ">
                    Whrite a massage
                </button>
            </div>
        </div>
    );
}
const SocialMedia = () => {
    return (
        <div className="w-full m-auto px-4 py-2 bg-[#686868] ">
            <div className="w-full py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-yellow-100">
                <div>
                    <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis.
                    </p>
                    <div className="flex justify-between md:w-[100%] my-1">
                        <FaFacebookSquare size={30} className="cursor-pointer" />
                        <FaInstagramSquare size={30} className="cursor-pointer" />
                        <FaTwitterSquare size={30} className="cursor-pointer" />
                        <FaGithubSquare size={30} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
}
const MailToMe = () => {
    return (
        <div className="flex justify-center   pr-2 my-2 bg-yellow-600 sm:w-[460px]">
            <div className="mx-1 bg-yellow-400 ">
                <div className="flex flex-col sm:flex-row items-center ">
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="p3 h-[30px] flex sm:w-[300px] ml-2 rounded-md text-black text-center"
                    />
                    <button className="bg-[#00df9a] h-[30px] text-white rounded-md font-medium w-[140px] ml-2 mr-2 my-5 border-none">
                        Notify me
                    </button>
                </div>
                <div className="text-centr">
                    <p>
                        Read {""}
                        <span className="text-[#00df9a]">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
const Footer = () => {
    return (
        <div className="w-full m-auto text-white bg-[#24262b]">
            <div className=" grid lg:grid-cols-2  bg-red-400">
                <NikolenkoTEBlock />
                <SocialMedia />
                <MailToMe />
            </div>
        </div>
    );
};

export default Footer;
