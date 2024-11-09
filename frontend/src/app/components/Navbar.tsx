import { FC } from 'react';
import Image from 'next/image'; // Import Image from next/image
import logo from '../images/logo.png'; // This is fine as-is

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-b p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and KTPledge text close together */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="KTP Logo" className="h-12 w-12" />
          <div className="text-[#205eb3] font-bold text-xl">KTPledge</div> {/* Corrected color class */}
        </div>
        <ul className="flex space-x-7">
          <li><a href="/logo" className="text-gray-700 hover:text-blue-500"></a></li>
          <li><a href="/calendar" className="text-gray-700 hover:text-blue-500">Calendar</a></li>
          <li><a href="/workshops" className="text-gray-700 hover:text-blue-500">Workshops</a></li>
          <li><a href="/leaderboard" className="text-gray-700 hover:text-blue-500">Leaderboard</a></li>
          <li><a href="/helpful-links" className="text-gray-700 hover:text-blue-500">Helpful Links</a></li>
          <li><a href="/account" className="text-gray-700 hover:text-blue-500">Account</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
