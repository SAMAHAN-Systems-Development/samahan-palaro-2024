'use client';

import React from 'react';
import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';
import closingCeremonyData from '../../data/closingCeremonyData.json';
import Link from 'next/link';

const ClosingCeremony = () => {
  return (
    <div className="mx-auto w-full max-w-full mt-12">
      {closingCeremonyData.map(({ imageUrl, title, link }, index) => (
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
              <div className="font-jersey10 text-[60px] text-white text-right flex-1 mb-4 md:mb-0">
                {title}
              </div>

              <div className="flex justify-center md:ml-8">
                <Link href={link} passHref>
                  <ReadMoreButton bgColor="green" textColor="pink" size="big" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClosingCeremony;
