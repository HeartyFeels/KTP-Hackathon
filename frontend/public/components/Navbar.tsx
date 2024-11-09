import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-b p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">KTP Logo</div>
        <ul className="flex space-x-6">
          <li><Link href="/"><a className="text-gray-700 hover:text-blue-500">HomePage</a></Link></li>
          <li><Link href="/calendar"><a className="text-gray-700 hover:text-blue-500">Calendar</a></Link></li>
          <li><Link href="/workshops"><a className="text-gray-700 hover:text-blue-500">Workshops</a></Link></li>
          <li><Link href="/leaderboard"><a className="text-gray-700 hover:text-blue-500">Leaderboard</a></Link></li>
          <li><Link href="/helpful-links"><a className="text-gray-700 hover:text-blue-500">Helpful Links</a></Link></li>
          <li><Link href="/account"><a className="text-gray-700 hover:text-blue-500">Account</a></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;