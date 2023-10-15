import React from "react";
import iphone_photo from "./img/FC_two_phones_1.png";

const Delivery = () => {
  return (
    <div className="w-full dg-white py-7 px-4 ">
      <h3 className="flex justify-center">
        <span className=" bg-indigo-500 relative  rounded-full h-9 shadow-md">
          <span className="relative text-white font-bold text-2xl px-3 ">
            Example of my works
          </span>
        </span>
      </h3>
      <div className="w-flex h-flex max-w-[1000px] mx-auto grid md:grid-cols-2 bg-orange-300">
        <img className="mx-1" src={iphone_photo} alt="iphone_photo" />
        <div className="flex-col grid bg-orange-500 m-1">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-center font-bold py-2 m-auto bg-orange-200 ">
            Don't miss the opportunity to place your order today
          </h1>
          <p className="px-3 text-2xl text-justify">
            For several years I provided photography services in Ukraine. And
            now don’t miss the opportunity to order my services in Berlin. I
            provide the services of a reportage and artistic
            photography is also available. You only need to choose a studio. I
            also have extensive experience in photo restoration. I can restore
            your photographs that are damaged, scratched, or discolored, even
            after washing in the washing machine. You can view my work and order my services below.
          </p>
          <div className="flex items-center justify-center bg-green-600">
            <button className="bg-black  text-[#00df9a] h-[50px] w-[200px] rounded-xl font-medium ">
              ORDER TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
