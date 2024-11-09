import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Account: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Account</h2>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          {/* Placeholder for user information */}
          <p className="text-gray-700">User details and account settings.</p>
        </div>
      </main>
    </>
  );
};

export default Account;
