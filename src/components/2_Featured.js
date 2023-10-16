import React, { useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { RxDotFilled } from 'react-icons/rx'
import featured_photo_0 from './img/Featured/0.jpg'
import featured_photo_1 from './img/Featured/1.jpg'
import featured_photo_2 from './img/Featured/2.jpg'
import featured_photo_3 from './img/Featured/3.jpg'
import featured_photo_4 from './img/Featured/4.jpg'
import featured_photo_5 from './img/Featured/5.jpg'
import featured_photo_6 from './img/Featured/6.jpg'
import featured_photo_7 from './img/Featured/7.jpg'
import featured_photo_8 from './img/Featured/8.jpg'
import featured_photo_9 from './img/Featured/9.jpg'

const Featured = () => {
    const sliders = [
        {
            url: featured_photo_0
        },
        {
            url: featured_photo_1
        },
        {
            url: featured_photo_2
        },
        {
            url: featured_photo_3
        },
        {
            url: featured_photo_4
        },
        {
            url: featured_photo_5
        },
        {
            url: featured_photo_6
        },
        {
            url: featured_photo_7
        },
        {
            url: featured_photo_8
        },
        {
            url: featured_photo_9
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
        <div className='ssm:h-[500px] md:h-[700px] w-full py-1 px-2 relative group '>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            ></div>
            <div className='hidden group-hover:block absolute ssm:top-[20%] md:top-[30%] -translate-x-0 translate-y-[100%] left-5 text-2xl rounded-full p-2 py-10 bg-[#f779368c] text-white cursor-pointer'>
                <TiArrowLeftThick size={20} onClick={prevSlider} />
            </div>
            <div className='hidden group-hover:block absolute ssm:top-[20%] md:top-[30%] -translate-x-0 translate-y-[100%] right-5 text-2xl rounded-full p-2 py-10 bg-[#f779368c] text-white cursor-pointer'>
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