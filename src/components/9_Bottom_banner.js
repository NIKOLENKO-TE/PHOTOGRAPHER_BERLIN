import React, { useEffect } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

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

const featured_photos = [
  featured_photo_0,
  featured_photo_1,
  featured_photo_2,
  featured_photo_3,
  featured_photo_4,
  featured_photo_5,
  featured_photo_6,
  featured_photo_7,
  featured_photo_8,
  featured_photo_9,
];

const BottomBanner = () => {
  useEffect(() => {
    new Splide('#thumbnail-carousel', {
      perPage: 3, // Отображать 3 фотографии в карусели
      height: '300px', // Высота карусели
      gap: 10, // Расстояние между фотографиями
      pagination: true, // Отключить пагинацию, если не нужна
    }).mount();
  }, []);

  return (
    <div className='rounded-2xl pb-5'>
      <div className="main-photo h-[300px]">
        <img src={featured_photos[0]} alt={`Featured 0`} />
      </div>
      <section id="thumbnail-carousel" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {featured_photos.map((photo, index) => (
              <li key={index} className="splide__slide">
                <img src={photo} alt={`Featured ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BottomBanner;
