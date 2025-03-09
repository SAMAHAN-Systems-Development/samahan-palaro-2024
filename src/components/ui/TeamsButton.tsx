import React from 'react';
import Image from 'next/image';
import imageMap from '@/utils/imageMapper';

type EventRowProps = {
  sportCategory: string;
  eventName: string;
  teamData: Record<string, any>;
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
  placement: 'Gold' | 'Silver' | 'Bronze',
  teamData: Record<string, any>
) => {
  const categoryData = teamData[sportCategory];
  if (categoryData) {
    const eventData = categoryData[eventName];
    if (eventData && typeof eventData === 'object' && eventData[placement]) {
      return imageMap[eventData[placement]] || null;
    }
    return imageMap[categoryData[placement]] || null;
  }
  return null;
};

const EventRow: React.FC<EventRowProps> = ({
  sportCategory,
  eventName,
  teamData,
}) => (
  <div className="border-4 sm:border-8 border-blue mb-4 overflow-hidden">
    <div>
      {/* Event Name */}
      <div className="font-vt323 text-3xl sm:text-4xl md:text-5xl px-4 pt-4 bg-white text-blue flex items-center justify-center font-bold">
        {eventName.toUpperCase()}
      </div>

      {/* Medal Labels */}
      <div className="flex text-xs sm:text-sm md:text-base font-bold pt-4">
        {['Gold', 'Silver', 'Bronze'].map((medal) => (
          <div
            key={medal}
            className="font-vt323 text-lg sm:text-2xl md:text-4xl py-2 px-2 sm:px-4 flex-1 text-center relative"
          >
            <span
              className={`inline-block  py-1 rounded bg-blue-900 ${medalColors[medal]}`}
            >
              {medalDisplayName[medal]}
            </span>
          </div>
        ))}
      </div>

      {/* Medal Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {['Gold', 'Silver', 'Bronze'].map((medal) => {
          const teamImage = getMedalImage(
            sportCategory,
            eventName,
            medal as 'Gold' | 'Silver' | 'Bronze',
            teamData
          );
          return (
            <div key={medal} className="flex justify-center items-center">
              <div className="flex justify-center items-center min-w-[80px]">
                <Image
                  src={teamImage}
                  alt={`${eventName} ${medal}`}
                  width={150}
                  height={150}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export { EventRow };
