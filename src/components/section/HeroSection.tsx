import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Added optional hover animation, please comment in PR if to be removed
    <div className="relative flex">
      <div className="w-8/12 relative flex justify-center items-center p-8 sm:p-10 md:p-10 ">
        {/* Shadow layer */}
        <div className="absolute inset-0 z-0 flex justify-center items-center p-8 sm:p-10 md:p-10 -translate-y-2">
          <Image
            src="/images/hero-pictures/Shadow.png"
            alt=""
            width={1300}
            height={1300}
            className="object-cover max-w-full max-h-full opacity-30"
            unoptimized
          />
        </div>

        {/* Top layer */}
        <div className="relative z-10 hover:transform hover:translate-x-2 hover:drop-shadow-xl hover:transition-all duration-200 hover:ease-in-out -translate-y-2">
          <Image
            src="/images/hero-pictures/Hero_Logo.png"
            alt=""
            width={1300}
            height={1300}
            className="object-cover max-w-full max-h-full"
            unoptimized
          />
        </div>
      </div>

      {/* Right side image */}
      <div className="relative flex-shrink-0 w-[25%] hidden md:block">
        <Image
          src="/images/hero-pictures/Right-Image.png"
          alt=""
          width={100}
          height={100}
          className="object-cover w-full h-full"
          unoptimized
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
