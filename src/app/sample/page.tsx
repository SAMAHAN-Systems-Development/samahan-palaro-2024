/*
 TODO: adjust category type and day's position

 */

import React from 'react';
import SportEvent from '@/components/ui/SportEvent';
import scoreBoardData from '@/data/scoreBoardData.json';
import { StaticImageData } from 'next/image';
import sonImage from '../../../public/images/cluster-animals/SON.png';
import ssImage from '../../../public/images/cluster-animals/SS.png';
import bmImage from '../../../public/images/cluster-animals/bm.png';
import csImage from '../../../public/images/cluster-animals/cs.png';
import eaImage from '../../../public/images/cluster-animals/ea.png';
import humletImage from '../../../public/images/cluster-animals/humlet.png';
import nsmImage from '../../../public/images/cluster-animals/nsm.png';
import soeImage from '../../../public/images/cluster-animals/soe.png';

//keeps JSON stays lightweight with just filenames and Images are properly optimized by Next.js
const imageMap: { [key: string]: StaticImageData } = {
  'SON.png': sonImage,
  'ss.png': ssImage,
  'bm.png': bmImage,
  'cs.png': csImage,
  'ea.png': eaImage,
  'humlet.png': humletImage,
  'nsm.png': nsmImage,
  'soe.png': soeImage,
};

const page = () => {
  return (
    <div className="p-4">
      {scoreBoardData.map((category) => (
        <div key={category.categoryType} className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{category.categoryType}</h1>
          {category.days.map((day) => (
            <div key={day.day} className="mb-6">
              <h2 className="text-xl font-semibold mb-3">{day.day}</h2>
              <div className="flex flex-wrap gap-4">
                {day.sportEvents.map((sport) =>
                  sport.games.map((game, index) => (
                    <SportEvent
                      key={`${sport.sportEvent}-${index}`}
                      sportEvent={sport.sportEvent}
                      teams={game.teams.map((team) => ({
                        ...team,
                        image: imageMap[team.image],
                      }))}
                    />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;
