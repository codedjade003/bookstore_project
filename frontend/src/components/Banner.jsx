import React from 'react';
import BannerCard from '../home/BannerCard';
import SearchBar from '../components/SearchBar';

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-yellow-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Books <span className="text-red-700">for the Best prices</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis, quidem officiis magnam unde molestias veniam beatae nemo illum non fugit quod perspiciatis totam quasi vero nulla laboriosam alias voluptas?
          </p>
          {/* Use the new SearchBar component */}
          <SearchBar />
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
