import React from 'react';
import { EventRow } from '@/components/ui/TeamsButton';
import scoreBoardData from '@/data/scoreBoardData.json';

const ScoreboardPage = () => {
  return (
    <div className="container mx-auto p-4 bg-blue-900 text-white">
      <div className="bg-white p-6 rounded-lg">
        {Object.entries(scoreBoardData).map(([category, sports]) => (
          <div key={category} className="mb-10">
            {/* mao ning headers kerv same sa team sports racket etc */}
            <h2 className="text-2xl font-bold mb-4 text-black">{category}</h2>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(sports).map(([sport]) => {
                return (
                  <div key={sport} className="mb-8">
                    <div className="grid grid-cols-1 gap-2">
                      <EventRow
                        sportCategory={category}
                        eventName={sport}
                        teamData={scoreBoardData}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreboardPage;
