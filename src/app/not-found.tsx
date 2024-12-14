import '@/styles/globals.css';
import { actay, chakrapetch, jersey10 } from '@/styles/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen p-10 font-jersey10">
      <div className="absolute top-0 left-0 w-[40%] transform translate-x-4 translate-y-4 z-0">
        <Image
          src="/images/hero-pictures/Hero_Logo.svg"
          alt="Hero Image"
          width={1200}
          height={800}
          className="w-full 
            max-w-[500px]     {/* Adjusted max width for mobile */}
            sm:max-w-[700px]  
            md:max-w-[900px]
            lg:max-w-[1000px]  {/* Larger max width for larger screens */}
            xl:max-w-[1200px]
            mr-auto
            h-auto
            max-h-[300px]     {/* Adjusted max height for mobile */}
            sm:max-h-[400px]
            md:max-h-[500px]
            lg:max-h-[600px]
            xl:max-h-[800px]
            object-cover
            z-10
            hover:transform 
            hover:translate-x-2 
            hover:drop-shadow-xl 
            hover:transition-all 
            duration-200 
            hover:ease-in-out"
        />
      </div>

      <div className="text-center z-20">
        <h2 className="text-9xl sm:text-10xl md:text-11xl lg:text-12xl text-pink mb-4">
          404
        </h2>
        <h2 className="text-3xl font-bold text-red-500 mb-4">Not Found</h2>
        <p className="text-lg mb-4">There's nothing here at the moment.</p>
        <Link href="/" className="text-blue-500 underline">
          Return Home
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 w-[25%] transform translate-y-4 z-10">
        <Image
          src="/images/hero-pictures/Right-Image.png"
          width={529}
          height={773}
          alt="404 Image"
          className="w-full 
            !min-w-[200px]
            sm:max-w-[320px]
            md:max-w-[450px]
            lg:max-w-[529px]
            xl:max-w-[529px]
            2xl:max-w-[529px]
            h-auto
            min-h-[300px]
            sm:max-h-[490px]
            md:max-h-[550px]
            lg:max-h-[773px]
            object-contain"
          priority
        />
      </div>
    </div>
  );
}
