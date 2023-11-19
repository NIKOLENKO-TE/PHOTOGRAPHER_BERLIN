import React, { useEffect, useState } from "react";

const BottomBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Установите значение, когда блок должен появиться на экране
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

  const bannerStyle = {
    zIndex: 50,
    paddingBottom: "1rem",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    transition: "opacity 0.5s ease-in-out, transform 0.3s ease-in-out",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "0.25rem",
    padding: "0.25rem",
    margin: "0 auto",
    borderRadius: "0.3rem",
    backdropFilter: "blur(5px)",
  };

  return (
      <div className="z-50 w-full pb-1 block md:hidden">
        <div style={bannerStyle} className="grid max-w-[315px] grid-cols-3 gap-1 p-1 mx-auto bg-white bg-opacity-0 backdrop-filter backdrop-blur-[5px] pb-1 rounded-lg">
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
  onClick={() => window.location.href = 'tel:+491605945127'} 
>
  <span className="mt-[-2px]">Call</span>
</button>
        </div>
      </div>
  );
};

export default BottomBanner;
