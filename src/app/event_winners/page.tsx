'use client';

import React, { useState } from 'react';
import { EventRow } from '@/components/ui/TeamsButton';
import scoreBoardData from '@/data/scoreBoardData.json';
import clusterData from '@/data/clusterModalData.json';
import Image from 'next/image';
import Arrow from '../../../public/images/Arrow.svg';
import ClusterModal from '@/components/ui/ClusterModal';

interface SportData {
  game_title: string;
  description: string;
  image: string;
}

const ScoreboardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState<SportData | null>(null);

  const handleEventClick = (sport: string) => {
    // Find matching sport in cluster data
    const matchingSport = clusterData.find(
      (item) => item.game_title.includes(sport)
    );

    // Use matching sport if found, or create a default object
    const sportData = matchingSport || {
      game_title: sport,
      description: "No description available", // More neutral default
      image: "cs.png" // default image
    };

    setSelectedSport(sportData);
    setModalOpen(true);
  };

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
                  <div
                    key={sport}
                    className="mb-8 cursor-pointer"
                    onClick={() => handleEventClick(sport)}
                  >
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

      {/* Modal */}
      {selectedSport && (
        <ClusterModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          sportData={selectedSport}
        />
      )}
    </div>
  );
};

export default ScoreboardPage;