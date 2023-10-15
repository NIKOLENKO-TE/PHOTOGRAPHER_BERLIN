import React from "react";
import iphone_photo from "./img/FC_two_phones_1.png";

const Delivery = () => {
    return (
        <div className="w-full dg-white py-7 px-4 ">
            <h3 className="flex justify-center">
                <span className=" bg-indigo-500 relative  rounded-full h-9 shadow-md">
                    <span className='relative text-white font-bold text-2xl px-3 '>Example of my works</span>
                </span>
            </h3>
            <div className="w-flex h-flex max-w-[1000px] mx-auto grid md:grid-cols-2">
                <img
                    className="mx-1"
                    src= {iphone_photo}
                    alt='iphone_photo'
                />
                <div className="flex-col ">
                    <p className="text-[#00df9a] font-bold flex justify-center">
                        Get the App
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
                        Limitless Convenience on-demand
                    </h1>
                    <p className="px-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
                        voluptate reprehenderit dolore autem cum ullam sed odit
                        perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <div className="flex justify-center ">
                        <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-5 py-3">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
