import React from "react";

const NewsLetter = () => {
    return (
        <div className="w-full text-white bg-[#24262b]">
            <div className=" grid lg:grid-cols-2  bg-red-400">
                <div className=" bg-green-500 flex pl-2 md:w-[340px]">
                    <div className="col-span-2 my-2 ml-1 border-rounded-lg">
                        <div className="py-2 px-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <img
                                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                                src="../NIKOLENKOTE.jpg"
                                alt="My Face"
                            />
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                        {" "}
                                        NIKOLENKO Tymofii
                                    </p>
                                    <p className="text-slate-500 font-medium">Photographer</p>
                                </div>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                    Whrite a massage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center   pr-2 my-2 bg-yellow-600 w-[460px]" >
                    <div className="mx-1 bg-yellow-400 w-[450px]">
                        <div className="flex flex-col sm:flex-row items-center ">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="p3 h-[30px] flex w-[300px] ml-2 rounded-md text-black"
                            />
                            <button className="bg-[#00df9a] h-[30px] text-white rounded-md font-medium w-[140px] ml-2 mr-2 my-5 border-none">
                                Notify me
                            </button>
                        </div>
                        <p>
                            I am concern about security of your data/ Read {""}
                            <span className="text-[#00df9a] ">Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>
            <hr className="w-full" />
        </div>
    );
};

export default NewsLetter;
