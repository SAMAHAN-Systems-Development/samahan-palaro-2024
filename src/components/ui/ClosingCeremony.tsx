'use client';

import React from 'react';
import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';
import closingCeremonyData from '../../data/closingCeremonyData.json';

const ClosingCeremony = () => {
  return (
    <div className="mx-auto w-full max-w-full">
      {closingCeremonyData.map(({ imageUrl, title }, index) => (
        <div key={index} className="flex flex-col w-full bg-blue shadow-lg">
          <div className="relative w-full h-[358px] mt-24 border-24 border-8 border-pink">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full p-8 px-48">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="font-vt323 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white text-right flex-1 mb-4 md:mb-0">
                {title}
              </div>

              <div className="flex justify-center md:ml-8">
                <ReadMoreButton bgColor="green" textColor="pink" size="big" url={'https://atenews.ph/palarong-atenista-24-sea-tigers-claw-back-to-overall-champ-title-with-9-golds'} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClosingCeremony;



