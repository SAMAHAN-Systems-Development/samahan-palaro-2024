import GalleryComponent from '@/components/ui/GalleryComponent';
import TitleBox from '@/components/ui/TitleBox';
import type { Metadata } from 'next';
import data from '@/data/sportGalleryData.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery Page',
  description: '',
};

const getRandom = <T,>(arr: readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
export default function Gallery() {
  const borderColors = ['pink', 'white', 'green'] as const;
  type BorderColor = (typeof borderColors)[number];

  const bgColors = ['pink', 'green', 'blue'] as const;
  type BgColor = (typeof bgColors)[number];

  // Define the title colors associated with each border color
  type TitleColor =
    | 'pinkWhite'
    | 'pinkGreen'
    | 'pinkBlue'
    | 'greenPink'
    | 'greenBlue'
    | 'whiteBlue'
    | 'whitePink';
  const titleColors: Record<BorderColor, TitleColor[]> = {
    pink: ['pinkWhite', 'pinkGreen', 'pinkBlue'],
    green: ['greenPink', 'greenBlue'],
    white: ['whiteBlue', 'whitePink'],
  };

  const getValidBgColor = (borderColor: BorderColor): BgColor => {
    // Filter out green if borderColor is white (to avoid contrast issues)
    const availableBgColors = bgColors.filter((color) => {
      if (color === 'green' && borderColor === 'white') return false; // green bg + white border is bad contrast
      if (color === borderColor) return false;
      return true;
    });

    return getRandom(availableBgColors);
  };

  const getRandomColorPair = () => {
    const randomBorderColor = getRandom(borderColors);
    const matchingTitleColors = titleColors[randomBorderColor];
    const randomTitleColor = getRandom(matchingTitleColors);
    const randomBgColor = getValidBgColor(randomBorderColor);

    return {
      borderColor: randomBorderColor,
      titleColor: randomTitleColor,
      bgColor: randomBgColor,
    };
  };

  const positions = [
    'upperLeft',
    'upperRight',
    'lowerLeft',
    'lowerRight',
  ] as const;

  return (
    <main className="bg-blue min-h-screen">
      {/* Gallery header */}
      <div className="py-10 sm:py-16 md:py-20">
        <div className="flex flex-row items-center justify-center w-full">
          {/* Left arrows container */}
          <div className="flex flex-row items-center justify-end space-x-2 flex-1">
            <Image
              src="/images/sports-picture/Vector.png"
              alt="Left arrow"
              width={50}
              height={50}
              className="rotate-180 object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
            <Image
              src="/images/sports-picture/Vector.png"
              alt="Left arrow"
              width={50}
              height={50}
              priority
              className="rotate-180 object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
          </div>

          {/* Center text */}
          <h1 className="font-vt323 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold whitespace-nowrap px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <span className="text-pink">BEHIND</span>{' '}
            <span className="text-green">THE SCENES</span>
          </h1>

          {/* Right arrows container */}
          <div className="flex flex-row items-center justify-start space-x-2 flex-1">
            <Image
              src="/images/sports-picture/Vector2.png"
              alt="Right arrow"
              width={50}
              height={50}
              priority
              className="object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
            <Image
              src="/images/sports-picture/Vector2.png"
              alt="Right arrow"
              width={50}
              height={50}
              className="object-contain w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16"
            />
          </div>
        </div>
      </div>

      {/* Gallery Loop */}
      <div>
        {Array.from({ length: Math.ceil((data.length - 1) / 4) }, (_, i) => {
          const smallWideIndex = 1 + i * 4;
          const wideIndex = 2 + i * 4; // Start with data[1] and then every
          const squareIndex1 = 3 + i * 4; // Start with data[2] and then every third item after
          const squareIndex2 = 4 + i * 4; // Start with data[3] and then every third item after

          const { borderColor: boxColor, bgColor: boxBgColor } =
            getRandomColorPair();
          const { borderColor: borderColor1, titleColor: titleColor1 } =
            getRandomColorPair();
          const { borderColor: borderColor2, titleColor: titleColor2 } =
            getRandomColorPair();
          const { borderColor: borderColor3, titleColor: titleColor3 } =
            getRandomColorPair();
          const { borderColor: borderColor4, titleColor: titleColor4 } =
            getRandomColorPair();

          return (
            <div key={i} className="flex flex-wrap">
              {/* Titlebox and small wide layout item */}
              <div className="hidden sm:flex w-full justify-between ">
                <TitleBox
                  sportName={data[smallWideIndex].title}
                  layout="normal"
                  borderColor={boxColor}
                  titleColor={boxColor}
                  bgColor={boxBgColor}
                />
                {smallWideIndex < data.length && (
                  <GalleryComponent
                    image={data[smallWideIndex].image}
                    sportName={data[smallWideIndex].title}
                    layout="s_wide"
                    borderColor={borderColor4}
                    titleColor={titleColor4}
                    position={getRandom(positions)}
                  />
                )}
              </div>

              {/* Wide layout item */}
              {wideIndex < data.length && (
                <div className="hidden sm:flex w-full">
                  <GalleryComponent
                    image={data[wideIndex].image}
                    sportName={data[wideIndex].title}
                    layout="wide"
                    borderColor={borderColor1}
                    titleColor={titleColor1}
                    position={getRandom(positions)}
                  />
                </div>
              )}

              {/* Hide square layout on small screens */}
              <div className="hidden sm:flex w-full">
                {squareIndex1 < data.length && (
                  <GalleryComponent
                    image={data[squareIndex1].image}
                    sportName={data[squareIndex1].title}
                    layout="square"
                    borderColor={borderColor2}
                    titleColor={titleColor2}
                    position={getRandom(positions)}
                  />
                )}

                {squareIndex2 < data.length && (
                  <GalleryComponent
                    image={data[squareIndex2].image}
                    sportName={data[squareIndex2].title}
                    layout="square"
                    borderColor={borderColor3}
                    titleColor={titleColor3}
                    position={getRandom(positions)}
                  />
                )}
              </div>

              {/* Render everything in wide layout for small screens */}
              <div className="block sm:hidden w-full">
                <TitleBox
                  sportName={data[smallWideIndex].title}
                  layout="wide"
                  borderColor={boxColor}
                  titleColor={boxColor}
                  bgColor={boxBgColor}
                />
                {smallWideIndex < data.length && (
                  <div className="w-full ">
                    <GalleryComponent
                      image={data[smallWideIndex].image}
                      sportName={data[smallWideIndex].title}
                      layout="wide"
                      borderColor={borderColor4}
                      titleColor={titleColor4}
                      position={getRandom(positions)}
                    />
                  </div>
                )}
                {wideIndex < data.length && (
                  <div className="w-full ">
                    <GalleryComponent
                      image={data[wideIndex].image}
                      sportName={data[wideIndex].title}
                      layout="wide"
                      borderColor={borderColor1}
                      titleColor={titleColor1}
                      position={getRandom(positions)}
                    />
                  </div>
                )}
                {squareIndex1 < data.length && (
                  <div className="w-full ">
                    <GalleryComponent
                      image={data[squareIndex1].image}
                      sportName={data[squareIndex1].title}
                      layout="wide"
                      borderColor={borderColor2}
                      titleColor={titleColor2}
                      position={getRandom(positions)}
                    />
                  </div>
                )}
                {squareIndex2 < data.length && (
                  <div className="w-full ">
                    <GalleryComponent
                      image={data[squareIndex2].image}
                      sportName={data[squareIndex2].title}
                      layout="wide"
                      borderColor={borderColor3}
                      titleColor={titleColor3}
                      position={getRandom(positions)}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
