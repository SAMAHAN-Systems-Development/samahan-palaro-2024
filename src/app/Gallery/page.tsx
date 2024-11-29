import GalleryComponent from '@/components/ui/GalleryComponent';
import type { Metadata } from 'next';
import data from '@/data/sportGalleryData.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery Page',
  description: '',
};

const getRandom = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];
export default function Gallery() {

  const borderColors = ['pink', 'white', 'green'] as const;
  type BorderColor = typeof borderColors[number]; 

  // Define the title colors associated with each border color
  type TitleColor = 'pinkWhite' | 'pinkGreen' | 'pinkBlue' | 'greenPink' | 'greenBlue' | 'whiteBlue' | 'whitePink';
  const titleColors: Record<BorderColor, TitleColor[]> = {
    pink: ['pinkWhite', 'pinkGreen', 'pinkBlue'],
    green: ['greenPink', 'greenBlue'],
    white: ['whiteBlue', 'whitePink'],
  };

  // Function to get random border and title color pair
  const getRandomColorPair = () => {
    const randomBorderColor = getRandom(borderColors);
    const matchingTitleColors = titleColors[randomBorderColor];
    const randomTitleColor = getRandom(matchingTitleColors);
    return { borderColor: randomBorderColor, titleColor: randomTitleColor };
  };

  // Define the positions for elements
  const positions = ['upperLeft', 'upperRight', 'lowerLeft', 'lowerRight'] as const;
  return (
    <main className="bg-blue pt-20">
      {/* Display the first item */}
      <div>
        <GalleryComponent
          image={data[0].image}
          sportName={data[0].title}
          layout="wide"
          borderColor="green"
        />
      </div>

      {/* Gallery header */}
      <div className="flex justify-center items-center pt-8 pb-24 px-10 text-center">
        <h1 className="font-jersey10 text-green pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-pink">PALARO</span> PHOTO GALLERY
        </h1>
        <Image
          src="/images/sports-picture/Vector.png"
          alt="Gallery Opening Image"
          width={50}
          height={50}
          className="object-contain w-8 sm:w-12 md:w-14 lg:w-18 xl:w-20"
        />
      </div>

      {/* Gallery Loop */}
      <div>
        {Array.from({ length: Math.ceil((data.length - 1) / 3) }, (_, i) => {
          const wideIndex = 1 + i * 3; // Start with data[1] and then every third item
          const squareIndex1 = 2 + i * 3; // Start with data[2] and then every third item after
          const squareIndex2 = 3 + i * 3; // Start with data[3] and then every third item after

          const { borderColor: borderColor1, titleColor: titleColor1 } =
            getRandomColorPair();
          const { borderColor: borderColor2, titleColor: titleColor2 } =
            getRandomColorPair();
          const { borderColor: borderColor3, titleColor: titleColor3 } =
            getRandomColorPair();

          return (
            <div key={i} className="flex flex-wrap">
              {/* Wide layout item */}
              {wideIndex < data.length && (
                <div className="w-full">
                  <GalleryComponent
                    image={data[wideIndex].image}
                    sportName={data[wideIndex].title}
                    layout="wide"
                    borderColor={borderColor1}
                    titleColor={titleColor1}
                    position={getRandom(positions)}
                  />
                  <p className="font-jersey10 text-2xl text-center text-white my-8 mx-14">
                    {data[wideIndex].quote}
                  </p>
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
              <p className="hidden sm:block w-full font-jersey10 text-2xl text-center text-white my-8 mx-14">
                {squareIndex1 < data.length && data[squareIndex1]?.quote}
              </p>

              {/* Render everything in wide layout for small screens */}
              <div className="block sm:hidden w-full">
                {squareIndex1 < data.length && (
                  <div className="w-full mb-4">
                    <GalleryComponent
                      image={data[squareIndex1].image}
                      sportName={data[squareIndex1].title}
                      layout="wide"
                      borderColor={borderColor2}
                      titleColor={titleColor2}
                      position={getRandom(positions)}
                    />
                    <p className="font-jersey10 text-2xl text-center text-white my-8 mx-14">
                      {data[squareIndex1].quote}
                    </p>
                  </div>
                )}
                {squareIndex2 < data.length && (
                  <div className="w-full mb-4">
                    <GalleryComponent
                      image={data[squareIndex2].image}
                      sportName={data[squareIndex2].title}
                      layout="wide"
                      borderColor={borderColor3}
                      titleColor={titleColor3}
                      position={getRandom(positions)}
                    />
                    <p className="font-jersey10 text-2xl text-center text-white my-8 mx-14">
                      {data[squareIndex2].quote}
                    </p>
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
