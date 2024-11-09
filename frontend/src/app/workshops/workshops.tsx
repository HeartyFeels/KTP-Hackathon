import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Workshops: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Workshops</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Workshop placeholders */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">Workshop 1</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">Workshop 2</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">Workshop 3</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">Workshop 4</div>
        </div>
      </main>
    </>
  );
};

export default Workshops;
