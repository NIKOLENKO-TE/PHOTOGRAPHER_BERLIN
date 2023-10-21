import React, { useEffect, useState } from "react";

const BottomBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // когда блок должен появиться на экране
      const triggerPosition = windowHeight * 0.1;

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`z-50 w-full pb-1 ${isVisible ? "" : "hidden"}`}>
      {<div className="z-50 w-full pb-1 block sm:hidden">
      <div className="grid max-w-[315px] grid-cols-3 gap-1 p-1 mx-auto bg-white bg-opacity-0 backdrop-filter backdrop-blur-[5px] pb-1 rounded-lg">
        <button
          type="button"
          className="px-5 h-[30px] w-[100px] text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-lg flex items-center justify-center"
        >
          <span className="mt-[-2px]">News</span>
        </button>
        <button
          type="button"
          className="px-5 h-[30px] w-[100px] text-xl font-medium text-white bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-lg flex items-center justify-center"
        >
          <span className="mt-[-2px]">E-mail</span>
        </button>
        <button
          type="button"
          className="px-5 h-[30px] w-[100px] text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-lg flex items-center justify-center"
        >
          <span className="mt-[-2px]">Call</span>
        </button>
      </div>
    </div>}
    </div>
  );
};

export default BottomBanner;