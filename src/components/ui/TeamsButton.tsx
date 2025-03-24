import React from 'react';
import Image from 'next/image';
import imageMap from '@/utils/imageMapper';

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
      return imageMap[eventData[placement] as keyof typeof imageMap] || null;
    }
    return imageMap[categoryData[placement] as keyof typeof imageMap] || null;
  }
  return null;
};

const EventRow: React.FC<EventRowProps> = ({
  sportCategory,
  eventName,
  teamData,
}) => (
  <div className="border-4 sm:border-8 border-blue mb-2 overflow-hidden">
    {' '}
    {/* Reduced margin */}
    <div>
      {/* Event Name */}
      <div className="font-vt323 text-3xl sm:text-4xl md:text-5xl px-4 pt-2 bg-white text-blue flex items-center justify-center font-bold">
        {eventName.toUpperCase()}
      </div>

      {/* Medal Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 relative mt-8">
        {' '}
        {/* Reduced gap and margin-top */}
        {['Silver', 'Gold', 'Bronze'].map((medal) => (
          <div
            key={medal}
            className={`flex flex-col items-center
              ${medal === 'Gold' ? 'sm:-mt-4 relative z-20' : ''} 
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
                width={medal === 'Gold' ? 180 : 130}
                height={medal === 'Gold' ? 180 : 130}
                className={`${medal === 'Gold' ? 'scale-105' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export { EventRow };
