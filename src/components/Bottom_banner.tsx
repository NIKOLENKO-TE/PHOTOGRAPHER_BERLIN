//Bottom_banner.tsx
import { useEffect, useState } from "react";
import NikolenkoTEBlockModal from "./Modal";

const BottomBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

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
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(10px)",
    transition: "opacity 0.5s ease-in-out, transform 0.3s ease-in-out",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  };

  const bottomBannerStyle =
    "justify-self-center fixed bottom-0 left-0 right-0 w-full  block md:hidden grid max-w-[315px] grid-cols-3 gap-1 p-1  mb-1 mx-auto bg-white bg-opacity-0 backdrop-filter backdrop-blur-[5px] rounded-lg";

  const newsButton = (
    <button
      type="button"
      className="px-5 h-[30px] w-[100px] text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-lg flex items-center justify-center"
    >
      <span className="mt-[-2px]">News</span>
    </button>
  );

  const EmailButton = () => (
    <div>
      <button
        type="button"
        className="px-5 h-[30px] w-[100px] text-xl font-medium text-white bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-lg flex items-center justify-center"
        onClick={() => setShowModal(true)}
      >
        <span className="mt-[-2px]">E-mail</span>
      </button>
      <div className="w-full h-full"></div>
    </div>
  );

  const callButton = (
    <button
      type="button"
      className="px-5 h-[30px] w-[100px] text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 border-blue-600 rounded-lg flex items-center justify-center"
      onClick={() => (window.location.href = "tel:+491605945127")}
    >
      <span className="mt-[-2px]">Call</span>
    </button>
  );

  return (
    <div>
      <NikolenkoTEBlockModal
        key={showModal ? "modal-open" : "modal-closed"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div style={bannerStyle} className={bottomBannerStyle}>
        {newsButton}
        <EmailButton />
        {callButton}
      </div>
    </div>
  );
};

export default BottomBanner;