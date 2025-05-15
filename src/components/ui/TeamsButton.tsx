import React from 'react';
import Image from 'next/image';
// import imageMap from '@/utils/imageMapper';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type MedalPlacement = 'Gold' | 'Silver' | 'Bronze';

type EventData = {
  [eventName: string]: {
    [key in MedalPlacement]?: string;
  } & Record<string, string>;
};

type TeamData = {
  [sportCategory: string]: {
    [key in MedalPlacement]?: string;
  } & EventData;
};

type EventRowProps = {
  sportCategory: string;
  eventName: string;
  teamData: TeamData;
};

const medalDisplayName = {
  Gold: 'CHAMPION',
  Silver: 'SILVER',
  Bronze: 'BRONZE',
};

const medalColors = {
  Gold: 'text-yellow-500',
  Silver: 'text-gray-400',
  Bronze: 'text-amber-700',
};

const getMedalImage = (
  sportCategory: string,
  eventName: string,
  placement: MedalPlacement,
  teamData: TeamData
) => {
  const categoryData = teamData[sportCategory];
  if (categoryData) {
    const eventData = categoryData[eventName];
    if (eventData && typeof eventData === 'object' && eventData[placement]) {
      // return imageMap[eventData[placement] as keyof typeof imageMap] || null;
      return `${basePath}/images/cluster-animals/${eventData[placement]}`;
    }
    // return imageMap[categoryData[placement] as keyof typeof imageMap] || null;
    return `${basePath}/images/cluster-animals/${categoryData[placement]}`;
  }
  return null;
};

const imageSizes = {
  Gold: {
    width: 250,
    height: 250,
  },
  Silver: {
    width: 130,
    height: 130,
  },
  Bronze: {
    width: 130,
    height: 130,
  },
};

const EventRow: React.FC<EventRowProps> = ({
  sportCategory,
  eventName,
  teamData,
}) => (
  <div className="border-4 sm:border-8 border-blue mb-2 overflow-hidden">
    {/* Reduced margin */}
    <div>
      {/* Event Name */}
      <div className="font-vt323 text-3xl sm:text-4xl md:text-5xl px-4 pt-2 bg-white text-blue flex items-center justify-center font-bold">
        {eventName.toUpperCase()}
      </div>

      {/* Medal Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 relative mt-8">
        {/* Reduced gap and margin-top */}
        {['Gold', 'Silver', 'Bronze'].map((medal) => (
          <div
            key={medal}
            className={`flex flex-col items-center
              ${medal === 'Gold' ? 'sm:order-2' : ''}
              ${medal === 'Silver' ? 'sm:order-1' : ''}
              ${medal === 'Bronze' ? 'sm:order-3' : ''}
              ${medal === 'Gold' ? 'sm:-mt-8 relative z-20' : ''} 
            `}
          >
            <div className="font-vt323 text-lg sm:text-2xl md:text-4xl py-1 px-2 sm:px-4 text-center">
              <span
                className={`inline-block py-1 rounded bg-blue-900 ${medalColors[medal as keyof typeof medalColors]}`}
              >
                {medalDisplayName[medal as keyof typeof medalDisplayName]}
              </span>
            </div>
            <div className="flex justify-center items-center min-w-[80px]">
              {/* if (getMedalImage === ) */}
              <Image
                src={
                  getMedalImage(
                    sportCategory,
                    eventName,
                    medal as MedalPlacement,
                    teamData
                  ) || '/placeholder.png'
                }
                alt={`${eventName} ${medal}`}
                width={imageSizes[medal as keyof typeof imageSizes].width}
                height={imageSizes[medal as keyof typeof imageSizes].height}
                className={`mb-4
                  object-contain
                  ${medal === 'Gold' ? 'w-[245px] h-[245px] md:scale-105' : 'w-[130px] h-[130px]'}
                `}
                priority={medal === 'Gold'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export { EventRow };
