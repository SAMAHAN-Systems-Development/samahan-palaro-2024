import GalleryComponent from '@/components/ui/GalleryComponent';
import type { Metadata } from 'next';
import data from '@/data/sportGalleryData.json'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery Page',
  description: '',
};

export default function Gallery() {
  return <main className='bg-blue pt-20'>
    <div>
        <GalleryComponent
          image={data[0].image}
          sportName={data[0].title}
          layout='wide'
          borderColor='green'
        />
    </div>
    <div className='flex justify-center items-center pt-8 pb-24'>
  <h1 className="font-jersey10 text-green pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
    <span className="text-pink">PALARO</span> PHOTO GALLERY
  </h1>
  <Image
    src='/images/sports-picture/Vector.png'
    alt='Gallery Opening Image'
    width={50}
    height={50}
    className="object-contain w-8 sm:w-12 md:w-14 lg:w-18 xl:w-20"
  />
</div>

  </main>;
}