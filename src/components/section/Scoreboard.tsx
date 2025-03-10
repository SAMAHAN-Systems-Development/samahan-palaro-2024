import React from 'react';
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
// import ScoreHolder from '@/components/ui/ScoreHolder';

const ScoreHolder = () => {
  return (
    <div className="font-jersey10 flex flex-col items-center justify-center text-center w-full">
      <div className="bg-white   justify-center">
        <h1 className="mb-5 sm:mb-7 md:mb-10 lg:mb-12 xl:mb-12 text-6xl text-blue">
          Advanced Games
        </h1>
        <h1 className="mb-5 sm:mb-7 md:mb-10 lg:mb-12 xl:mb-12 text-6xl text-blue">
          Day 1
        </h1>
      </div>
      <div className="flex justify-center w-full">
        {/*tanang days sa semi fi games content tanang cluster bullshit */}
      </div>
      <div className="flex justify-center w-full">
        {/*tanang days sa finals games content tanang cluster bullshit */}
      </div>
    </div>
  );
};

export default ScoreHolder;
