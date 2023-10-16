import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';


import '@splidejs/react-splide/css';


const TopPicks = () => {
    const isXl = useMediaQuery({ minWidth: 1240 });
    const isLg = useMediaQuery({ minWidth: 1024 });
    const isMd = useMediaQuery({ minWidth: 768 });
    const isSd = useMediaQuery({ maxWidth: 767 });

    let perPage = 5;
    if (isXl) { perPage = 5; }
    else if (isLg) { perPage = 4; }
    else if (isMd) {
        perPage = 3;
    } else if (isSd) {
        perPage = 2;
    }

    return (
        <>
            <div >
                <h3 className="flex justify-center py-1">
                    <span className=" bg-indigo-700 relative rounded-full h-9 shadow-md w-content">
                        <span className='relative text-white font-bold text-2xl '> Select photo category </span>
                    </span>
                </h3>
                <div className='xl:flex lg:flex md:flex sd:flex w-full m-auto py-2 px-2'>
                    <Splide options={{ perPage: perPage, gap: '0.5rem', drag: 'free', arrows: true }}>
                        {topPicks.map((item) => (
                            <SplideSlide key={item.id}>
                                <div key={item.id} className='rounded-3xl relative'>
                                    <div className='absolute w-full h-full bg-black/25 rounded-3xl text-white'>
                                        <p className='px-2 pt-4 font-bold text-2xl'>{item.title}</p>
                                        <p className='px-2'>{item.price}</p>
                                        <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add to cart</button>
                                    </div>
                                    <img className='h-[300px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title} />
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    );
};

export default TopPicks;