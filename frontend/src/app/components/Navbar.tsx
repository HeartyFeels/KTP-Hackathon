import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-b p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* "KTPledge" logo section */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* The 'T' shaped like a theta symbol */}
            <path
              fill="none"
              d="M12 2C8.13 2 5 5.13 5 9s3.13 7 7 7 7-3.13 7-7S15.87 2 12 2z"
            />
            <path
              fill="none"
              d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
            />
          </svg>
          <div className="text-3xl font-bold text-blue-600">KTPledge</div>
        </div>
        
        <ul className="flex space-x-6">
          <li><a href="/logo" className="text-gray-700 hover:text-blue-500">Logo</a></li>
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
