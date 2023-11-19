import React from "react";
import iphone_photo_1 from "./img/iphones/FC_two_phones_1.png";
import nikolenkote from "./img/NIKOLENKOTE_PHOTO_BW.png";

const Delivery = () => {
  return (
    <div className="w-full pt-2 ssm:px-2 md:px-4 pb-2 ">
      <h3 className="flex justify-center">
        <span className="text-white h-[40px] pt-[2px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border-blue-600 shadow-lg shadow-blue-500/50  text-xl flex py-2 rounded-[15px]"
        > <span className="relative text-white ssm:text-[22px] md:text-[26px] xl:text-[30px] ssm:mt-0.5 px-3 select-none">
            Order my services below
          </span>
        </span>
      </h3>
      <div className="w-flex h-flex max-w-[1000px] mx-auto grid items-center ssm:grid-cols-1 md:grid-cols-2 mt-2 bg-white/50 rounded-2xl shadow-xl ">
        <div className="justify-items-center select-none m-2">
          <img  src={iphone_photo_1} alt="iphone_photo" />
        </div>
        <div className="flex-col grid m-2">
          <h1 className="text-center ssm:text-2xl md:text-4xl font-bold ml-2 mr-2 select-none pb-2">
            Don't miss the opportunity to place your order today
          </h1>
          <p className="pr-3 ssm:text-xl sm:text-2xl text-justify select-none">
            <img
              className="mx-1  h-[160px] float-left "
              src={nikolenkote}
              alt="My avatar"
            />
            For several years I provided photography services in Ukraine. And
            now don’t miss the opportunity to order my services in Berlin. I
            provide the services of a reportage and artistic photography is also
            available. You only need to choose a studio. I also have extensive
            experience in photo restoration. I can restore your photographs, negatives photos that
            are damaged, scratched, or discolored, even after washing in the
            washing machine. You can view my work and order my services below.
          </p>
          <div className="flex items-center justify-center">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  border-blue-600 shadow-lg shadow-blue-500/50  text-xl py-2  rounded-[15px]  mr-2"
        > ORDER TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
