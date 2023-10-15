import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  console.log(categories);
  return (
    <div className="w-full m-auto px-4 py-4 ">
      <h3 className="flex justify-center">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className='relative text-white font-bold text-2xl '>Trending Categories</span>
        </span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 flex justify-center items-center hover:scale-105 duration-300">
              <img
                className="object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl"
                src={item.image}
                alt={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;