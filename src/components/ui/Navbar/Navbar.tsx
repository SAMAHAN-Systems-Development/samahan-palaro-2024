'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import logo from './public/palaro-logo.png';
import Image from 'next/image';

const Navbar: FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { href: '/', label: 'HOME' },
        { href: '/gallery', label: 'GALLERY' },
        { href: '/twg', label: 'TWG' },
    ];

    return (
        <div className="relative">
            <nav className="jersey10 bg-blue shadow-lg border-b-8 border-green">
                <div className="w-full mx-auto flex justify-between p-4">
                    <div className="flex items-center">
                        <div className="block lg:hidden mr-4">
                            <button
                                onClick={() => setMenuOpen(!isMenuOpen)}
                                className="block lg:hidden text-[64px] font-bold text-green font-jersey10 cursor-pointer mr-4"
                            >
                                {isMenuOpen ? 'X' : '☰'}
                            </button>

                        </div>

                        <Link href="/">
                            <Image src={logo.src} width={125} height={125} alt="Palaro Logo" className="h-8 mr-500" />
                        </Link>
                    </div>

                    <ul
                        className={`flex flex-col lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0 py-4 font-jersey10 ${isMenuOpen ? 'absolute top-[100px] left-0 w-full bg-blue shadow-lg' : 'hidden lg:flex lg:justify-end'
                            }`}
                    >
                        {menuItems.map(({ href, label }) => (
                            <li key={href} className="hover:text-pink text-white transition-colors duration-300 text-[48px]">
                                <Link href={href} onClick={() => setMenuOpen(false)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;