import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Calendar: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Calendar</h2>
        <div className="h-80 bg-gray-100 rounded-lg shadow-md">
          {/* Placeholder for calendar content */}
        </div>
      </main>
    </>
  );
};

export default Calendar;