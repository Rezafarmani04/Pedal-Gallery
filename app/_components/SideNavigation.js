'use client';

import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import { FaCar } from 'react-icons/fa';
import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'صفحه اصلی',
    href: '/account',
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'فروش خودرو',
    href: '/account/sells',
    icon: <FaCar className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'حساب شما',
    href: '/account/profile',
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav
      className="border-l border-primary-900 
               w-72 sm:w-24      
               sm:mb-5
               md:w-full xl:w-auto           
               lg:w-full xl:w-auto "
    >
      <ul
        className="flex flex-col gap-1 h-full text-sm px-1 w-full max-w-[200px] mx-auto
              md:text-base md:gap-1.5 md:px-2 md:max-w-none
              lg:gap-2 lg:text-lg lg:px-5 lg:py-3"
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? 'bg-primary-900' : ''
              } sm:py-2 sm:px-3 sm:gap-2 md:py-3 md:px-5 md:gap-4 sm:font-normal sm:text-xs lg:text-lg`}
              href={link.href}
            >
              {link.icon}
              <span className="sm:hidden md:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto sm:mt-0 sm:ml-auto md:mt-auto md:ml-0">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
