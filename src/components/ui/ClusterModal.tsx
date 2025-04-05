import React from 'react'
import Image from 'next/image';

interface ClusterModalProps {
    isOpen: boolean;
    onClose: () => void;
    sportData: {
        id?: number;
        game_title: string;
        description: string;
        image: string;
    };
}

const ClusterModal: React.FC<ClusterModalProps> = ({ isOpen, onClose, sportData }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 bg-blue p-3 m-3 w-3/4 h-2/3 md:w-2/3 lg:w-1/2 font-vt323 text-blue relative">


                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 bg-red-500 text-white w-8 h-8 rounded-full"
                >
                    X
                </button>

                {/* First Row */}
                <div className="bg-green p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={`/images/cluster-animals/${sportData.image}`}
                        alt="image"
                    />
                </div>
                <div className="bg-green p-4 md:col-span-2">
                    <div>
                        <h1 className="text-6xl">{sportData.game_title}</h1>
                        <p className="text-lg pt-4">{sportData.description}</p>
                    </div>
                </div>
                {/* Second Row */}
                <div className=" hidden md:block bg-pink p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={`/images/sports-picture/Billiards.JPG`}
                        alt="image"
                    />
                </div>
                <div className="hidden md:block bg-green p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={`/images/sports-picture/Billiards.JPG`}
                        alt="image"
                    />
                </div>
                <div className="hidden md:block bg-pink p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={`/images/sports-picture/Billiards.JPG`}
                        alt="image"
                    />
                </div>
            </div>
        </div>
    )
}

export default ClusterModal