import { FC, useState } from 'react';
import Link from 'next/link';
import logo from '../public/palaro-logo.png';

const styles = {
  nav: 'bg-blue shadow-lg border-b-8 border-green',
  container: 'flex justify-between items-center p-4',
  button: 'text-[64px] font-bold text-green font-jersey10 mr-4',
  logo: 'h-10',
  menu: 'absolute top-[100px] left-0 w-full bg-blue shadow-lg',
  menuList: 'font-jersey10 flex flex-col items-center space-y-4 py-4',
  menuItem:
    'hover:text-pink text-white transition-colors duration-300 text-[48px]',
};

const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/twg', label: 'TWG' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className={styles.button}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <img src={logo.src} alt="Palaro Logo" className={styles.logo} />
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {menuItems.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavLink: FC<{ href: string; onClick: () => void }> = ({
  href,
  children,
  onClick,
}) => (
  <li>
    <Link href={href} onClick={onClick} className={styles.menuItem}>
      {children}
    </Link>
  </li>
);

export default MobileNavbar;
