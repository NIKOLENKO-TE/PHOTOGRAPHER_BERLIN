import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import featured_photo_0 from './img/Featured/0.jpg';
import featured_photo_1 from './img/Featured/1.jpg';
import featured_photo_2 from './img/Featured/2.jpg';
import featured_photo_3 from './img/Featured/3.jpg';
import featured_photo_4 from './img/Featured/4.jpg';
import featured_photo_5 from './img/Featured/5.jpg';
import featured_photo_6 from './img/Featured/6.jpg';
import featured_photo_7 from './img/Featured/7.jpg';
import featured_photo_8 from './img/Featured/8.jpg';
import featured_photo_9 from './img/Featured/9.jpg';

const Featured = () => {
    const sliders = [
        featured_photo_1,
        featured_photo_0,
        featured_photo_2,
        featured_photo_3,
        featured_photo_4,
        featured_photo_5,
        featured_photo_6,
        featured_photo_7,
        featured_photo_8,
        featured_photo_9,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='ssm:h-[500px] md:h-[700px] w-full py-1 px-2 relative group'>
            <Carousel
                showStatus={false}
                showThumbs={false}
                selectedItem={currentIndex}
                onChange={setCurrentIndex}
                emulateTouch={true}
                infiniteLoop={true}
                interval={5000} // Устанавливаем интервал в 5000 миллисекунд (5 секунд)
            >
                {sliders.map((sliderItem, slideIndex) => (
                    <div key={slideIndex} className='text-2xl cursor-pointer'>
                        <img
                            className='h-[500px] md:h-[700px] w-full object-cover rounded-2xl cursor-pointer hover:scale-105 ease-out duration-300'
                            src={sliderItem}
                            alt={`Slide ${slideIndex}`}
                        />
                    </div>
                ))}
            </Carousel>
            <div className='flex top-4 justify-center py-2'>
                {sliders.map((sliderItem, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => moveToNextSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
