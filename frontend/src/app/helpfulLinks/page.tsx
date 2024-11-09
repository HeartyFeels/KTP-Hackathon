import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const HelpfulLinks: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Helpful Links</h2>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:underline">Link 1</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Link 2</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Link 3</a></li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HelpfulLinks;
