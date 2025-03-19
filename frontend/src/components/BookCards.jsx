import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { FaCartShopping } from 'react-icons/fa6'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BookCards = ({headline, books}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5 '>{headline}</h2>

      {/* cards */}
      <div className='mt-6'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true} // Enable looping
        autoplay={{
          delay: 2000, // Auto-scroll every 2 seconds
          disableOnInteraction: false // Keeps autoplay active after user interaction
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]} // Add autoplay module
        className="mySwiper w-full h-full"
      >
        {
          books.map(book => <SwiperSlide key={book._id}>
            <Link to="/">
              <div className='relative'>
                <img src={book.imageURL} alt="" />
                <div className='absolute top-3 right-3 bg-red-600 hover:bg-black p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              <div>
                <h3>{book.bookTitle}</h3>
                <p>{book.authorName}</p>
              </div>
            </Link>
          </SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  )
}

export default BookCards
