import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Added optional hover animation, please comment in PR if to be removed
    <div className="relative flex justify-between items-center w-full">
      {/* Left side - Logo with shadow */}
      <div className="relative w-fit ml-[10%] lg:ml-[15%]">
        {/* Shadow Image - Bottom Layer */}
        <div
          className="w-full 
          max-w-[400px]
          sm:max-w-[600px] 
          md:max-w-[562px] 
          lg:max-w-[562px] 
          xl:max-w-[878px]
          h-[300px]
          sm:h-[400px]
          md:h-[500px]
          lg:h-[562px]"
        >
          {/* Hero Logo - Top Layer */}
          <Image
            priority={true}
            src="/images/hero-pictures/Hero_Logo.svg"
            alt=""
            width={878}
            height={562}
            className="w-full h-full object-contain
         
              hover:transition-all 
              duration-200 
              hover:ease-in-out"
          />
        </div>
      </div>

      {/* Right side image */}
      <div className="relative flex-shrink-0 w-[25%] hidden lg:block">
        <Image
          src="/images/hero-pictures/Right-Image.png"
          width={529}
          height={773}
          alt=""
          className="w-full 
            !min-w-[200px]
            sm:max-w-[400px] 
            md:max-w-[450px] 
            lg:max-w-[529px]
            xl:max-w-[529px]
            2xl:max-w-[529px]
            h-auto
            min-h-[300px]
            sm:max-h-[490px]
            md:max-h-[550px]
            lg:max-h-[773px]
            object-contain
            ml-auto"
          priority={true}
        />
      </div>
    </div>
  );
};

export default HeroSection;
