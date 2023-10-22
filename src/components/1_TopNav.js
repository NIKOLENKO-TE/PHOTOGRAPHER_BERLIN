import { BsSearch } from "react-icons/bs";
import { MdMarkAsUnread } from "react-icons/md";
import DE from "./img/flags/DE.svg"

const TopNav = () => {
  return (
    <div className="mx-auto flex justify-between items-center p-2 ">
      <div className="flex items-center ">
        <div className="bg-white/20 text-white backdrop-blur-[5px] rounded-2xl p-1 text-xl md:w-[255px] w-[94px]">
          <div className="hidden ssm:flex h-[38px] ">
            <h1 className="rounded-xl p-1 pl-1 ssm:w-[100px] text-center justify-center text-white bg-gradient-to-r from-blue-500  via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 border-blue-600 ">
              TYMOFII
            </h1>
            <h1 className="hidden md:flex p-1 ml-[-3px] ">
              <span className=""> PHOTOGRAPHER</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white/10 text-white backdrop-blur-[5px] h-[45px] rounded-[15px] hidden ssm:flex justify-center items-center px-2 w-full ml-2 ">
        <BsSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none text-2xl mb-1.5 text-white"
          type="text"
          id="searchField"
          placeholder="search photo services on site"
          style={{ WebkitTextFillColor: 'white', opacity: 0.8, textAlign: "center" }}
        />
      </div>
      <div className="hidden ssm:flex items-center ml-2">
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 border-blue-600 shadow-lg shadow-blue-500/50  text-xl hidden lg:flex py-2 rounded-[15px] px-3 mr-2"
        >
          <MdMarkAsUnread size={28} />
          nikolenkote@gmail.com
        </button>
        <button className="w-[192px] max-h-[46px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 border-blue-600 shadow-lg shadow-blue-500/50 text-xl hidden ssm:flex py-2 rounded-[15px] px-3 mr-2" style={{ transition: 'background-color 5s', whiteSpace: 'nowrap' }}>
          <img
            src={DE}
            alt="DE Flag"
            width={42}
            className="rounded-[8px] shadow-md blur-[.2px]"
          />
          <div>
            <span>160-5945-127</span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default TopNav;
