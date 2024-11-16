'use client';

import React from 'react';
import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';
import closingCeremonyData from '../../data/closingCeremonyData.json';
import Link from 'next/link'; // Import Link from Next.js

const ClosingCeremony = () => {
  return (
    <div className="py-8">
      <div className="mx-auto w-full max-w-full px-4 mt-12 mb-24">
        {closingCeremonyData.map(
          ({ imageUrl, title, description, link }, index) => (
            <div key={index} className="flex flex-col w-full bg-blue shadow-lg">
              <div className="relative w-full h-[358px] mt-8 border-8 border-pink">
                <Image
                  src={imageUrl}
                  alt={title}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="w-full p-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                  <div className="font-jersey10 text-[60px] text-white text-right flex-1 mb-4 md:mb-0">
                    {title}
                    <div className="font-jersey10 text-[48px] text-white text-right flex-1 mb-4 md:mb-0">
                      {description}
                    </div>
                  </div>

                  {/* Wrap ReadMoreButton inside Link component */}
                  <div className="flex justify-center md:ml-8">
                    <Link href={link} passHref>
                      <ReadMoreButton
                        color="green1"
                        size="big"
                        className="text-white"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ClosingCeremony;
