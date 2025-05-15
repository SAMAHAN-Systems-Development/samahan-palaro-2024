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
        galleryImages?: string[]; // Array of additional images
    };
}

const ClusterModal: React.FC<ClusterModalProps> = ({ isOpen, onClose, sportData }) => {
    if (!isOpen) return null;

    // Default image to use if galleryImages aren't provided
    const defaultImage = "/images/palaro-card.png";

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
                <div className="bg-green p-2 md:p-4 flex items-center justify-center md:row-span-1">
                    <div className="relative w-full h-full aspect-square">
                        <Image
                            fill
                            sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                            className="object-contain"
                            src={`/images/cluster-animals/${sportData.image}`}
                            alt={`${sportData.game_title} team logo`}
                            priority
                        />
                    </div>
                </div>
                <div className="bg-green p-4 md:col-span-2 md:row-span-1 row-span-2 flex flex-col">
                    <div className="flex flex-col h-full">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl mb-2">{sportData.game_title}</h1>
                        <div className="overflow-y-auto flex-grow pr-2 custom-scrollbar">
                            <p className="text-xl lg:text-lg xl:text-large">{sportData.description}</p>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="hidden md:block bg-pink p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={sportData.galleryImages && sportData.galleryImages[0]
                            ? `/images/sports-picture/${sportData.galleryImages[0]}`
                            : defaultImage}
                        alt={`${sportData.game_title} gallery image 1`}
                    />
                </div>
                <div className="hidden md:block bg-green p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={sportData.galleryImages && sportData.galleryImages[1]
                            ? `/images/sports-picture/${sportData.galleryImages[1]}`
                            : defaultImage}
                        alt={`${sportData.game_title} gallery image 2`}
                    />
                </div>
                <div className="hidden md:block bg-pink p-4">
                    <Image
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        src={sportData.galleryImages && sportData.galleryImages[2]
                            ? `/images/sports-picture/${sportData.galleryImages[2]}`
                            : defaultImage}
                        alt={`${sportData.game_title} gallery image 3`}
                    />
                </div>
            </div>
        </div>
    )
}

export default ClusterModal