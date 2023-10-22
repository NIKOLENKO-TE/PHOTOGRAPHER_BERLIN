import React from "react";
import iphone_photo_1 from "./img/iphones/FC_two_phones_1.png";
import nikolenkote from "./img/NIKOLENKOTE_PHOTO_BW.png";

const Delivery = () => {
  return (
    <div className="w-full dg-white pt-2 px-4 pb-5 ">
      <h3 className="flex justify-center">
        <span className=" bg-indigo-500 relative text-center rounded-full h-9 shadow-md w-content">
          <span className="relative text-white font-bold text-2xl px-3 ">
            Order my services below
          </span>
        </span>
      </h3>
      <div className="w-flex h-flex max-w-[1000px] mx-auto grid items-center ssm:grid-cols-1 md:grid-cols-2 mt-2 bg-white/50 rounded-2xl shadow-xl ">
        <div className="justify-items-center  m-2">
          <img  src={iphone_photo_1} alt="iphone_photo" />
        </div>
        <div className="flex-col grid  m-2">
          <h1 className="text-center ssm:text-2xl md:text-4xl font-bold ml-2 mr-2 ">
            Don't miss the opportunity to place your order today
          </h1>
          <p className="pr-3 ssm:text-xl sm:text-2xl text-justify tracking-tight leading-8">
            <img
              className="mx-1  h-[128px] float-left  clear-left "
              src={nikolenkote}
              alt=" avatar "
            />
            For several years I provided photography services in Ukraine. And
            now don’t miss the opportunity to order my services in Berlin. I
            provide the services of a reportage and artistic photography is also
            available. You only need to choose a studio. I also have extensive
            experience in photo restoration. I can restore your photographs, negatives photos that
            are damaged, scratched, or discolored, even after washing in the
            washing machine. You can view my work and order my services below.
          </p>
          <div className="flex items-center justify-center py-2">
            <button className="bg-black hover:bg-blue-800 border-transparent  hover:text-white text-[#00df9a] h-[50px] w-[200px] rounded-xl font-medium ">
              ORDER TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
