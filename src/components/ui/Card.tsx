import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="w-[14.125rem] h-[20.125rem] rounded-[0.9375rem] relative overflow-hidden hover:scale-105 transition-all duration-300">
      <Image
        draggable={false}
        fill
        src={imageUrl}
        className="rounded-card object-cover object-center"
        alt="/"
      />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-7 z-10 font-poppins text-[#ffffff] text-center">
        <span className="text-2xl font-semibold block">{name}</span>
        <h1 className="text-sm font-medium mt-1">{position}</h1>
      </div>
    </div>
  );
};

export default Card;
