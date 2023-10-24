import { BsSearch } from "react-icons/bs";
import { MdMarkAsUnread } from "react-icons/md";
import DE from "./img/flags/DE.svg";

const buttonStyle = "rounded-[12px] text-xl text-center justify-center text-white whitespace-nowrap place-content-stretch bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br border-blue-600 shadow-lg shadow-blue-500/50 ";

const TopNameButton = () => {
  return (
    <div className="flex h-[42px]">
      <div className="bg-white/20 backdrop-blur-[5px] rounded-[14px] p-[2px] flex items-center">
        <button className={`px-1 ${buttonStyle}`}>
          TYMOFII
        </button>
        <div>
          <span className="hidden m-[2px] md:flex text-white text-xl">
            PHOTOGRAPHER
          </span>
        </div>
      </div>
    </div>
  );
};


const TopSearch = () => {
  return (
    <div className="bg-white/10 text-white backdrop-blur-[5px] h-[42px] rounded-[15px] hidden ssm:flex justify-center items-center px-2 w-full">
      <BsSearch size={25} />
      <input
        className="bg-transparent p-2 w-full focus:outline-none text-2xl mb-1.5 text-white"
        type="text"
        id="searchField"
        placeholder="search photo services on site"
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
      <button className={`h-[42px] px-2 hidden lg:flex ${buttonStyle}`}>
        <MdMarkAsUnread size={28} />
        <span className="ml-1 ">nikolenkote@gmail.com</span>
      </button>
  );
};

const TopPhoneButton = () => {
  return (
      <button className={`h-[42px] hidden ssm:flex ${buttonStyle} `}>
        <img
          src={DE}
          alt="DE Flag"
          className="w-[38px] m-[3px] ml-[8px] rounded-[8px] blur-[.2px]"
        />
        <span className="mr-2 ">160-5945-127</span>
      </button>
  );
};


const TopNav = () => {
  return (
    <div className="flex justify-between items-center p-2 gap-1.5">
      <TopNameButton />
      <TopSearch />
      <TopMailButton />
      <TopPhoneButton />
    </div>
  );
};

export default TopNav;
