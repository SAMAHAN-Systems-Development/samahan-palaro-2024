import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // Added optional hover animation, please comment in PR if to be removed
    <div className="relative flex justify-between items-center w-full">
      {/* Left side - Logo with shadow */}
      <div className="relative w-fit ml-[10%] lg:ml-[15%]">
        {/* Shadow Image - Bottom Layer */}
        <Image
          src="/images/hero-pictures/shadow.svg"
          alt=""
          width={878}
          height={562}
          className="w-full 
               max-w-[400px]
              sm:max-w-[600px] 
              md:max-w-[562px] 
              lg:max-w-[562px] 
                          xl:max-w-[878px]

            mr-auto
            h-auto
            max-h-[300px]
            sm:max-h-[400px]
            md:max-h-[500px]
            lg:max-h-[562px]
            z-0
            opacity-30"
        />

        {/* Hero Logo - Top Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pictures/Hero_Logo.svg"
            alt=""
            width={878}
            height={562}
            className="w-full 
              max-w-[400px]
              sm:max-w-[600px] 
              md:max-w-[562px] 
              lg:max-w-[562px] 
                          xl:max-w-[878px]

              mr-auto
              h-auto
              max-h-[300px]
              sm:max-h-[400px]
              md:max-h-[500px]
              lg:max-h-[562px]
              xl:max-h-[562px]

              object-cover
              z-10
              hover:transform 
              hover:translate-x-2 
              hover:drop-shadow-xl 
              hover:transition-all 
              duration-200 
              hover:ease-in-out"
          />
        </div>
      </div>

      {/* Right side image */}
      <div className="relative flex-shrink-0 w-[25%] hidden md:block">
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
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
