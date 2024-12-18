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
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="w-full p-8 text-center lg:px-48 lg:text-right">
            <div className="flex flex-col lg:flex-row justify-between lg:gap-20">
              <div className="font-jersey10 2xl:text-[60px] lg:text-40px] xsm:text-[30px] text-white">
                {title}
              </div>

              <div className="flex justify-center">
                <ReadMoreButton
                  bgColor="green"
                  textColor="pink"
                  size="big"
                  url={
                    'https://atenews.ph/palarong-atenista-24-sea-tigers-claw-back-to-overall-champ-title-with-9-golds'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClosingCeremony;
