import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import MyCalendar from '@/app/myCalendar/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#082A69] p-6">
      <Head>
        <title>Next.js Calendar App</title>
        <meta name="description" content="A simple calendar app using React Big Calendar and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto space-y-8 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-[#2b6fed]'text-3xl font-semibold text-center text-[#082A69]">Calendar</h1>
       
        <MyCalendar />
      </main>
    </div>
  );
}