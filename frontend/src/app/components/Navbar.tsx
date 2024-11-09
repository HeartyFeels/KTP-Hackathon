import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-b p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">KTP Logo</div>
        <ul className="flex space-x-6">
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
