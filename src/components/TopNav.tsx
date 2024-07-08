//TopNav.tsx
import { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import NikolenkoTEBlockModal from "./Modal";
import SetLanguage from "./SetLanguage/SetLanguage";

const buttonStyle =
  "rounded-[12px] ssm:text-[16px] md:text-[18px] xl:text-[20px] text-center justify-center text-white whitespace-nowrap place-content-stretch bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 ";
const buttonStyleName =
  "rounded-[12px] ssm:text-[17px] md:text-[19px] xl:text-[21px] text-center justify-center text-white whitespace-nowrap place-content-stretch bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 ";
const buttonStyleSearch =
  "p-2.5 ssm:h-[38px] md:h-[40px] xl:h-[42px]  rounded-r-[15px] rounded-l-[15px]  whitespace-nowrap place-content-stretch bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 ";
const searchFieldTopNav =
  "relative  bg-white bg-opacity-20 backdrop-blur-[5px] text-white ssm:h-[38px] md:h-[40px] xl:h-[42px] rounded-[15px] px-2 w-full";
const searchInputStyle =
  "mt-[-5px] md:mt-[-8px] xl:mt-[-12px] bg-transparent p-2 w-full focus:outline-none ssm:text-[20px] md:text-[25px] xl:text-[30px] text-white pr-[40px]";
const phoneIcon =
  "ssm:h-[26px] md:h-[28px] xl:h-[30px] ssm:w-[26px] md:w-[28px] xl:w-[30px] sm:ml-[-15px] mt-[2px]";
const TopNavStyle =
  "flex justify-between items-center ssm:px-1.5 md:px-2 ssm:py-1 md:py-1.5 gap-1.5";
const piPhoneCallFill =
  "mr-[-12px]  ssm:hidden sm:flex ssm:mt-[2px] md:mt-[2px]";
const emailIcon =
  "ssm:h-[26px] md:h-[28px] xl:h-[30px] ssm:w-[26px] md:w-[28px] xl:w-[30px] mt-[1px] ml-[-2px]";
const emailIconStyle = "ml-1 ssm:mt-[4px] sm:mt-[0px] md:mt-[0px] xl:mt-[-1px]";
const photographButtonStyle =
  "z-50 bg-white bg-opacity-20 backdrop-blur-[10px] rounded-[14px] p-[2px] flex items-center";

const TopNameButton: React.FC<{ onClick: () => void }> = (
  props
): JSX.Element => {
  const { t } = useTranslation("TopNameButton");

  return (
    <div className={photographButtonStyle}>
      <button
        id="name_button"
        className={`px-1 ${buttonStyleName}`}
        onClick={props.onClick}
        data-testid="name-button"
      >
        {t("my_name")}
      </button>
      <div>
        <span className="hidden m-[2px] md:flex text-white text-xl">
          {t("my_profession")}
        </span>
      </div>
    </div>
  );
};

const TopSearch: React.FC = (): JSX.Element => {
  const { t } = useTranslation("TopSearch");

  return (
    <div className={searchFieldTopNav}>
      <div className="flex-grow">
        <input
          className={searchInputStyle}
          type="text"
          id="searchField"
          placeholder={t("placeholder_search")}
          style={{
            WebkitTextFillColor: "white",
            opacity: 0.8,
            textAlign: "center",
          }}
          data-testid="search-input"
        />
        <div className="absolute top-[0px] right-0 ">
          <button type="submit" className={` ${buttonStyleSearch}`} data-testid="search-button">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
const TopMailButton: React.FC<{ onClick: () => void }> = (
  props
): JSX.Element => {
  return (
    <button
      className={`px-2 hidden sm:flex ${buttonStyle}`}
      data-testid="MdMarkEmailButton"
      onClick={props.onClick}
    >
      <MdMarkEmailUnread className={emailIcon} />
      <span className={emailIconStyle}>email@gmail.com</span>
    </button>
  );
};

const TopPhoneButton = () => {
  const phoneNumber = "+1234567890";
  const handlePhoneClick = () => {
    if (window.location && window.location.href) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <button
      className={`hidden ssm:flex ${buttonStyle}`}
      onClick={handlePhoneClick}
    >
      <PiPhoneCallFill className={phoneIcon} />
      <span className={piPhoneCallFill}>160-1111-222</span>
    </button>
  );
};

const TopNav: React.FC = (): JSX.Element => {
  const [, setSelectedLanguage] = useState("en");
  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };
  const [showModal, setShowModal] = useState(false);
  const handleNameButtonClick = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div id="topNav" className={TopNavStyle} data-testid="top-nav">
      <TopNameButton onClick={handleNameButtonClick} />
      <TopSearch />
      <SetLanguage onSelectLanguage={handleSelectLanguage} />
      <TopMailButton onClick={handleNameButtonClick} />
      <TopPhoneButton />
      <NikolenkoTEBlockModal
        key={showModal ? "modal-open" : "modal-closed"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default TopNav;
