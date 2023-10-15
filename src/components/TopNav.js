import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdDragIndicator, MdMarkAsUnread } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { FaTelegram, FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";


const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <MdDragIndicator size={50} />
        </div>
        <div className="bg-gray-200 rounded-full p-1 text-xl ssm:w-[218px] sm:w-[380px]">
          <div className="justify-left hidden ssm:flex h-[42px] ssm:w-[380px]">
            <h1 className="text-center bg-orange-700 text-white rounded-full p-1.5">
               TYMOFII NIKOLENKO </h1>
            <h1 className="hidden sm:flex p-1.5 ml-[-2px]">PHOTOGRAPHER</h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 h-[45px] rounded-full hidden md:flex justify-center items-center px-2 w-full ml-2 ">
        <BsSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none text-2xl"
          type="text"
          placeholder="search photo services"
        />
      </div>
      <div className="hidden ssm:flex items-center ml-2">
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white text-xl hidden iphone:flex py-2 rounded-full px-3 mr-2">
          <MdMarkAsUnread size={25} />
          nikolenkote@gmail.com
        </button>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white hidden ssm:flex text-xl py-2 rounded-full">
          <FaTelegram size={30} />
          <div className="w-[170px]">
            +49-160-5945-127
          </div>
        </button>
      </div>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Yum<span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Favorite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default TopNav;
