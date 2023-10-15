import React, { useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: '../img/Featured/0.jpg'
        },
        {
            url: '../img/Featured/1.jpg'
        },
        {
            url: '../img/Featured/2.jpg'
        },
        {
            url: '../img/Featured/3.jpg'
        },
        {
            url: '../img/Featured/4.jpg'
        },
        {
            url: '../img/Featured/5.jpg'
        },
        {
            url: '../img/Featured/6.jpg'
        },
        {
            url: '../img/Featured/7.jpg'
        },
        {
            url: '../img/Featured/8.jpg'
        },
        {
            url: '../img/Featured/9.jpg'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
        <div className='h-[700px] w-full py-1 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            ></div>
            <div className='hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[100%] left-5 text-2xl rounded-full p-2 py-10 bg-[#f779368c] text-white cursor-pointer'>
                <TiArrowLeftThick size={20} onClick={prevSlider} />
            </div>
            <div className='hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[100%] right-5 text-2xl rounded-full p-2 py-10 bg-[#f779368c] text-white cursor-pointer'>
                <TiArrowRightThick size={20} onClick={nextSlider} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, slideIndex) => (
                        <div 
                        key={slideIndex}
                        onClick={() => moveToNextSlide(slideIndex)}
                        className='text-2xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured