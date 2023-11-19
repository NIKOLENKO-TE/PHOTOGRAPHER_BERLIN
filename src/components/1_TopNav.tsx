//1_TopNav.tsx
import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import SetLanguage from "./SetLanguage/SetLanguage";
import { useTranslation } from "react-i18next";

  const buttonStyle =
    "rounded-[12px] ssm:text-[16px] md:text-[18px] xl:text-[20px] text-center justify-center text-white whitespace-nowrap place-content-stretch bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 ";
  const buttonStyleName =
    "rounded-[12px] ssm:text-[17px] md:text-[19px] xl:text-[21px] text-center justify-center text-white whitespace-nowrap place-content-stretch bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 ";

  const TopNameButton: React.FC = (): JSX.Element => {
    const { t } = useTranslation('TopNameButton');
    return (
      <div className="bg-white/20 backdrop-blur-[5px] rounded-[14px] p-[2px] flex items-center ">
        <button className={`px-1 ${buttonStyleName} `}>{t('my_name')}</button>
        <div>
          <span className="hidden m-[2px] md:flex text-white text-xl">
          {t('my_profession')}
          </span>
        </div>
      </div>
    );
  };

  const TopSearch : React.FC = (): JSX.Element => {
    const { t } = useTranslation('TopSearch');
    return (
      <div className="bg-white/10 text-white backdrop-blur-[5px] ssm:h-[38px] md:h-[40px] xl:h-[42px] rounded-[15px] hidden ssm:flex justify-center items-center px-2 w-full">
        <IoSearchCircle className="w-[40px] h-[40px] ml-[-5px] opacity-50" />
        <input
          className="bg-transparent ssm:hidden sm:flex p-2 w-full focus:outline-none ssm:text-[20px] md:text-[25px] xl:text-[30px] mb-1.5 text-white"
          type="text"
          id="searchField"
          placeholder={t('placeholder_search')}
          style={{
            WebkitTextFillColor: "white",
            opacity: 0.8,
            textAlign: "center",
          }}
        />
      </div>
    );
  };

  const TopMailButton = () => {
    return (
      <button className={`px-2 hidden sm:flex ${buttonStyle}`}>
        <MdMarkEmailUnread className="ssm:h-[26px] md:h-[28px] xl:h-[30px] ssm:w-[26px] md:w-[28px] xl:w-[30px] mt-[1px] ml-[-2px]" />
        <span className="ml-1 ssm:mt-[4px] sm:mt-[0px] md:mt-[0px] xl:mt-[-1px]">
          nikolenkote@gmail.com
        </span>
      </button>
    );
  };

  const TopPhoneButton = () => {
    const phoneNumber = "+491605945127";
  
    const handlePhoneClick = () => {
      window.location.href = `tel:${phoneNumber}`;
    };
  
    return (
      <button className={`hidden ssm:flex ${buttonStyle}`} onClick={handlePhoneClick}>
        <PiPhoneCallFill className="ssm:h-[26px] md:h-[28px] xl:h-[30px] ssm:w-[26px] md:w-[28px] xl:w-[30px] sm:ml-[-15px] mt-[2px]" />
        <span className="mr-[-12px]  ssm:hidden sm:flex ssm:mt-[2px] md:mt-[2px]">
          160-5945-127
        </span>
      </button>
    );
  };

  const TopNav = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("ua");
    const handleSelectLanguage = (language: string) => {
      setSelectedLanguage(language);
    };
  
    return (
      <div className="flex justify-between items-center ssm:px-1.5 md:px-2 ssm:py-1 md:py-1.5 gap-1.5">
        <TopNameButton />
        <TopSearch /> 
        <SetLanguage onSelectLanguage={handleSelectLanguage} />
        <TopMailButton />
        <TopPhoneButton />     
      </div>
    );
  };

export default TopNav;
