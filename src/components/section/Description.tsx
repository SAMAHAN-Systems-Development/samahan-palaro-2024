'use client';
import React, { useState } from 'react';
import data from '@/data/descriptionText.json';

const Description = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div
        className="bg-blue font-jersey10 text-white font-normal align-middle justify-center text-center 
                px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 
                pt-7 sm:pt-11 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28 
                pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 2xl:pb-16 
                sm:text-2xl md:text-3xl lg:text-4xl"
      >
        <h1 className="mb-5 sm:mb-7 md:mb-10 lg:mb-12 xl:mb-12">
          {data[0].first}
        </h1>

        <div className={`${showMore ? 'block' : 'hidden md:block'}`}>
          <h1 className="mb-5 sm:mb-7 md:mb-10 lg:mb-12 xl:mb-12">
            {data[0].second}
          </h1>
          <h1 className="mb-5 sm:mb-7 md:mb-10 lg:mb-12 xl:mb-12">
            {data[0].third}
          </h1>
          <h1 className="mb-5 sm:mb-7 md:mb-10 lg:mb-12 xl:mb-12">
            {data[0].fourth}
          </h1>
        </div>

        <button
          onClick={toggleShowMore}
          className="bg-white text-blue px-4 py-2 rounded mt-4 md:hidden hover:bg-pink"
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </>
  );
};

export default Description;
