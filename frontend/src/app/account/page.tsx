"use client";
import { useState } from 'react';
import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const Account: NextPage = () => {
  const [checkedTasks, setCheckedTasks] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (taskId: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  // Doughnut chart data
  const chartData = {
    labels: ["Informal Events", "Formal Events"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="flex bg-[#082A69]">
        {/* Left-hand Content Container */}
        <div className="w-1/3 min-h-[750px] p-8 bg-white shadow-md rounded-lg mx-4 mt-20 relative z-10 flex flex-col items-center">
          <div className="flex justify-center mt-8 relative">
            {/* Profile Picture */}
            <div className="w-48 h-48 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center w-full h-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Profile"
              />
            </div>
          </div>

          {/* Account Details */}
          <div className="text-center mt-4">
            <h1 className="font-semibold text-xl text-blue-900">Sara Smith</h1>
          </div>

          {/* User Info Stats */}
          <div className="py-4 mt-4 text-gray-700 flex items-center justify-around w-full">
            <div className="flex flex-col items-center">
              <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <div>Alpha Class</div>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <div>Pledge</div>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <div>60 points</div>
            </div>
          </div>

          {/* User Info Details */}
          <div className="text-center">
            <div className="font-bold text-[#082A69] text-lg">Email:</div>
            <div className="text-[#082A69]">sarasmith@uga.edu</div>
          </div>
          <div className="text-center mt-2">
            <div className="font-bold text-[#082A69] text-lg">Major:</div>
            <div className="text-[#082A69]">Computer Science</div>
          </div>
          <div className="text-center mt-2">
            <div className="font-bold text-[#082A69] text-lg">Year:</div>
            <div className="text-[#082A69]">2nd Year</div>
          </div>
          <div className="text-center mt-2">
            <div className="font-bold text-[#082A69] text-lg">Linkedin:</div>
            <div className="text-[#082A69]">not attached</div>
          </div>
          <div className="text-center mt-2 mb-4">
            <div className="font-bold text-[#082A69] text-lg">Socials:</div>
            <div className="text-[#082A69]">Instagram: @ssmith</div>
          </div>

          {/* Doughnut Chart Panel */}
          <div className="w-full mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-center font-semibold text-blue-900 mb-4">Event Points Distribution</h3>
            <Doughnut data={chartData} />
          </div>
        </div>

        {/* Right-hand Checklist Section */}
        <div className="flex-1 p-8 bg-white shadow-md rounded-lg mx-4 mt-20">
          <h2 className="text-[45px] font-semibold text-[#082A69]">PLEDGE TASKS:</h2>
          <div className="mt-4">
            <ul className="space-y-4">
              {[
                { id: "task1", text: "Watching the sunrise with 10 other pledges: 10 points" },
                { id: "task2", text: "Organizing a picnic: 5 points" },
                { id: "task3", text: "Making cookies/hanging out: 5 points" },
                { id: "task4", text: "White Lie short KTParty: 5 points" },
                { id: "task5", text: "Coffee Dates(with Pledges or Brothers): 5 points" },
                { id: "task6", text: "New Weekly Dare: 10 points" },
                { id: "task7", text: "Make a PledgeTok with a brother: 5 points" },
                { id: "task8", text: "Networking call with an industry professional: 5 points" },
              ].map((task) => (
                <li key={task.id} className="flex items-center bg-[#A2D2FF] rounded-lg p-4">
                  <input
                    type="checkbox"
                    className="mr-4 w-6 h-6"
                    onChange={() => handleCheckboxChange(task.id)}
                    checked={checkedTasks[task.id] || false}
                  />
                  <span className="text-[25px] text-[#3c4659]">{task.text}</span>
                  {checkedTasks[task.id] && (
                    <div className="mt-4 p-4 bg-[#f1f1f1] rounded-lg">
                      <label htmlFor={`file-upload-${task.id}`} className="block text-[#082A69] font-semibold mb-2">Upload Image Proof:</label>
                      <input
                        type="file"
                        id={`file-upload-${task.id}`}
                        className="block mb-4 border border-gray-300 rounded-md"
                      />
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
                        Submit
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
