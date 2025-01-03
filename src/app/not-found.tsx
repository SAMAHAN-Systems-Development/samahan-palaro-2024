import '@/styles/globals.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen p-10 font-vt323">
      <div className="text-center z-20">
        <h2 className="text-9xl sm:text-10xl md:text-11xl lg:text-12xl text-pink mb-4">
          404
        </h2>
        <h2 className="text-3xl font-bold text-red-500 mb-4">Not Found</h2>
        <p className="text-lg mb-4">There&apos;s nothing here at the moment.</p>
        <Link
          href="/"
          className="bg-blue text-white font-vt323 transition-all cursor-pointer flex items-center justify-center hover:scale-110 duration-200 ease-in-out px-6 py-2 sm:px-8 sm:py-3"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
