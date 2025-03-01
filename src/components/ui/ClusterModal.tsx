import React from 'react'
import clusterData from '../../data/clusterModalData.json'
import Image from 'next/image';
const ClusterModal = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-2 bg-blue p-3 m-3 w-1/2 font-jersey10 text-blue">
    {/* First Row */}
    <div className="bg-green p-4">
        <Image
            width={500}
            height={500}
            className="object-cover w-full h-full"
            src={`/images/cluster-animals/${clusterData[0].image}`}
            alt="image"
        />
    </div>
    <div className="bg-green p-4 col-span-2">
        <div>
            <h1 className="text-6xl">{clusterData[0].game_title}</h1>
            <p className="text-lg pt-4">{clusterData[0].description}</p>
        </div>
    </div>

    {/* Second Row */}
    <div className="bg-pink p-4">
        <Image
            width={500}
            height={500}
            className="object-cover w-full h-full"
            src={`/images/sports-picture/Billiards.JPG`}
            alt="image"
        />
    </div>
    <div className="bg-green p-4">
        <Image
            width={500}
            height={500}
            className="object-cover w-full h-full"
            src={`/images/sports-picture/Billiards.JPG`}
            alt="image"
        />
    </div>
    <div className="bg-pink p-4">
        <Image
            width={500}
            height={500}
            className="object-cover w-full h-full"
            src={`/images/sports-picture/Billiards.JPG`}
            alt="image"
        />
    </div>

</div>

  
  )
}

export default ClusterModal
