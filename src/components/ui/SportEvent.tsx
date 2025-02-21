/*
 TODO: revise scoreboardData 
 TODO: paste modal here
 */

'use client';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import TeamsButton from './TeamsButton';

type SportEventProps = {
  sportEvent: string;
  teams: {
    id: number;
    image: StaticImageData;
    teamName: string;
    teamScore: string;
  }[];
};

const SportEvent: React.FC<SportEventProps> = ({ sportEvent, teams }) => {
  // Split teams into pairs (first and second team)
  const [firstTeam, secondTeam] = teams;

  // Compare scores to determine winner
  const firstScore = parseInt(firstTeam.teamScore) || 0;
  const secondScore = parseInt(secondTeam?.teamScore) || 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div onClick={() => setIsModalOpen(true)} className="inline-block mx-6">
      <div className="flex flex-col space-y-0">
        {/* First Team */}
        <TeamsButton
          key={firstTeam.id}
          image={firstTeam.image}
          teamName={firstTeam.teamName}
          teamScore={firstTeam.teamScore}
          isWinner={firstScore > secondScore}
        />
        {/* Second Team */}
        {secondTeam && (
          <TeamsButton
            key={secondTeam.id}
            image={secondTeam.image}
            teamName={secondTeam.teamName}
            teamScore={secondTeam.teamScore}
            isWinner={secondScore > firstScore}
          />
        )}
        {/* Sport Event Title */}
        <div className="text-4xl text-center font-jersey10 text-pink">
          {sportEvent}
        </div>
      </div>
    </div>

    // {isModalOpen &&(
    // modal component here
    // )}
  );
};

export default SportEvent;
