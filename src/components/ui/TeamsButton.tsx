import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

type TeamButtonProps = {
  image: StaticImageData;
  teamName: string;
  teamScore: string;
  isWinner?: boolean;
};

const TeamsButton: React.FC<TeamButtonProps> = ({
  image,
  teamName,
  teamScore,
  isWinner,
}) => {
  return (
    <div className="w-[200px] grid grid-cols-3 gap-0">
      <Image src={image} alt={teamName} />
      <div className="font-jersey10 text-6xl">{teamName}</div>
      <div
        className={`font-jersey10 text-4xl mt-8 ml-[15px] ${isWinner ? 'text-green' : ''}`}
      >
        {teamScore}
      </div>
    </div>
  );
};

export default TeamsButton;
