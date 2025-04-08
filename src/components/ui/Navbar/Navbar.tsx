'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './public/palaro-logo.png';
import { usePathname } from 'next/navigation';

const Navbar: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/Gallery', label: 'GALLERY' },
    { href: '/TWG', label: 'TWG' },
  ];
  const pathname = usePathname();

  return (
    <div className="relative z-50">
      <nav className="font-vt323 bg-blue shadow-lg border-b-8 border-green">
        <div className=" sticky w-full mx-auto flex justify-between p-4">
          <div className="flex items-center ml-10">
            <div className="block lg:hidden mr-4">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="block lg:hidden  font-bold text-green font-vt323 cursor-pointer mr-4"
              >
                {isMenuOpen ? 'X' : '☰'}
              </button>
            </div>

            <Link href="/">
              <Image
                id="palaro-logo"
                src={logo.src}
                width={125}
                height={125}
                alt="Palaro Logo"
                className="h-10 w-52"
              />
            </Link>
          </div>

          <ul
            className={`flex flex-col mr-6 lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0 py-4 font-vt323 ${
              isMenuOpen
                ? 'absolute top-[100px] left-0 w-full bg-blue shadow-lg'
                : 'hidden lg:flex lg:justify-end'
            }`}
          >
            {menuItems.map(({ href, label }) => {
              const isCurrent = pathname === href;
              return (
                <li
                  key={href}
                  className=" transition-colors duration-300 text-[48px] "
                >
                  <Link
                    href={href}
                    className={`${isCurrent ? 'text-green' : 'text-white'} hover:text-pink`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
