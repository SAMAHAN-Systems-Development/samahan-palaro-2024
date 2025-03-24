'use client';

import React from 'react';
import { EventRow } from '@/components/ui/TeamsButton';
import scoreBoardData from '@/data/scoreBoardData.json';
import Image from 'next/image';
import Arrow from '../../../public/images/Arrow.svg';

const ScoreboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue w-full text-white">
      <div className="flex-1 p-4 h-screen">
        {Object.entries(scoreBoardData).map(([category, sports]) => (
          <div key={category} className="w-full max-w-5xl mx-auto">
            <div className="flex flex-row items-center gap-4">
              <h2 className="text-7xl mb-4 text-green font-jersey10">
                {category}
              </h2>
              <Image
                className="mb-4"
                src={Arrow}
                alt="Arrow icon"
                width={65}
                height={65}
              />
            </div>
            <div className="bg-white p-6 rounded-lg w-full mb-12">
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(sports).map(([sport]) => (
                  <div key={sport} className="mb-8">
                    <div className="grid grid-cols-1 gap-2">
                      <EventRow
                        sportCategory={category}
                        eventName={sport}
                        teamData={scoreBoardData}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreboardPage;
