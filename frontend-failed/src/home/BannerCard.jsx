import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

import './BannerCard.css';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        loop={false} // Enable looping
        autoplay={{
          delay: 2000, // Auto-scroll every 2 seconds
          disableOnInteraction: false // Keeps autoplay active after user interaction
        }}
        modules={[EffectCards, Autoplay]} // Add autoplay module
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard
