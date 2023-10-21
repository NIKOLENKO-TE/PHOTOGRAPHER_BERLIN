import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdDragIndicator, MdMarkAsUnread } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import DE from "./img/DE.svg";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520] min-w-[300px] mx-auto flex justify-between items-center p-2 ">
      <div className="flex items-center ">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <MdDragIndicator size={50} />
        </div>
        <div className="bg-gray-200 rounded-full p-1 text-xl md:w-[255px] w-[100px]">
          <div className="justify-left hidden ssm:flex h-[38px] ">
            <h1 className=" text-center justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-full p-1 pl-1 w-[100px]">
              TYMOFII
            </h1>
            <h1 className="hidden md:flex p-1 ml-[-2px]">PHOTOGRAPHER</h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 h-[45px] rounded-[15px] hidden sm:flex justify-center items-center px-2 w-full ml-2">
        <BsSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none text-2xl mb-1.5"
          type="text"
          placeholder="search photo services"
        />
      </div>
      <div className="hidden ssm:flex items-center ml-2">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 shadow-lg shadow-blue-500/50 text-xl hidden iphone:flex py-2 rounded-[15px] px-3 mr-2">
          <MdMarkAsUnread size={30} />
          nikolenkote@gmail.com
        </button>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 shadow-lg shadow-blue-500/50 text-xl hidden ssm:flex py-2 rounded-[15px] px-3 mr-2 ">
          <img
            src={DE}
            alt="DE Flag"
            width={42}
            className="rounded-[8px] shadow-md "
          />
          <div className="ssm:w-[150px] sm:w-[170px]">160-5945-127</div>
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
            : "fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Tymofii
          <span className="text-orange-700 font-bold"> NIKOLENKO</span>
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
