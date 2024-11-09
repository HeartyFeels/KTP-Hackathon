"use client";
import { useState } from 'react';
import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Workshop: NextPage = () => {
  const [activeTab, setActiveTab] = useState('workshops');
  const [showAWSDetailed, setShowAWSDetailed] = useState(false); // AWS detailed info state
  const [showWebDevDetailed, setShowWebDevDetailed] = useState(false); // Web Dev detailed info state

  return (
    <>
      <div className="min-h-screen bg-[#082A69] text-[#E1E4E8] font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
        <Navbar />
        <main className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#A2D2FF]">Workshop Toolbox</h2>

          {/* Tab navigation */}
          <div className="flex border-b border-[#1F5F99]">
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-4 py-2 font-semibold ${activeTab === 'workshops' ? 'border-b-2 border-[#1F5F99] text-[#A2D2FF]' : 'text-[#A2D2FF] hover:text-[#1F5F99]'}`}
            >
              Workshops
            </button>
            <button
              onClick={() => setActiveTab('professional-development')}
              className={`px-4 py-2 font-semibold ${activeTab === 'professional-development' ? 'border-b-2 border-[#1F5F99] text-[#A2D2FF]' : 'text-[#A2D2FF] hover:text-[#1F5F99]'}`}
            >
              Professional Development
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'workshops' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AWS Workshop Card */}
                <div className="bg-[#0D3B67] p-6 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-[#A2D2FF] mb-2">AWS Essentials</h3>
                  <p className="text-[#E1E4E8] mb-4">Learn the basics of AWS cloud services and build scalable web applications.</p>
                  <button
                    className="px-4 py-2 bg-[#1F5F99] text-white rounded-lg"
                    onClick={() => setShowAWSDetailed(!showAWSDetailed)}
                  >
                    {showAWSDetailed ? 'Show Less' : 'Learn More'}
                  </button>
                  {showAWSDetailed && (
                    <div className="mt-4 text-[#E1E4E8]">
                      <p>
                        AWS Essentials covers a range of key cloud services like EC2, S3, Lambda, and more. These services
                        enable developers to build scalable and reliable applications in the cloud.
                      </p>
                      <p className="mt-2">
                        Learn more at <a href="https://aws.amazon.com/training/learn-about/aws-essentials/" target="_blank" rel="noopener noreferrer" className="text-[#1F5F99]">AWS Training</a>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Web Development 101 Card */}
                <div className="bg-[#0D3B67] p-6 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-[#A2D2FF] mb-2">Web Development 101</h3>
                  <p className="text-[#E1E4E8] mb-4">Get hands-on experience with HTML, CSS, and JavaScript to create modern web pages.</p>
                  <button
                    className="px-4 py-2 bg-[#1F5F99] text-white rounded-lg"
                    onClick={() => setShowWebDevDetailed(!showWebDevDetailed)}
                  >
                    {showWebDevDetailed ? 'Show Less' : 'Learn More'}
                  </button>
                  {showWebDevDetailed && (
                    <div className="mt-4 text-[#E1E4E8]">
                      <p>
                        In Web Development 101, you will learn the foundational skills needed to build modern, responsive
                        websites. This includes mastering HTML, CSS, and JavaScript to create dynamic and interactive web pages.
                      </p>
                      <p className="mt-2">
                        Learn more at <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noopener noreferrer" className="text-[#1F5F99]">MDN Web Docs</a>.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-[#1C3D56] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#A2D2FF] mb-4">Professional Development: Email Signature</h3>
                <p className="text-[#E1E4E8] mb-4">Create a clean and professional email signature that reflects your personal brand.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-[#E1E4E8]">Use simple fonts and colors to maintain professionalism.</li>
                  <li className="text-[#E1E4E8]">Include your name, title, and contact information.</li>
                  <li className="text-[#E1E4E8]">Add social media links if relevant, but keep it minimal.</li>
                  <li className="text-[#E1E4E8]">Use separators like | or - for better readability.</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#A2D2FF]">Example:</h4>
                  <div className="mt-2">
                    <p className="font-medium text-[#A2D2FF]">John Doe | Software Developer</p>
                    <p className="text-[#A2D2FF]">john.doe@example.com</p>
                    <p className="text-[#A2D2FF]">+1 123-456-7890</p>
                    <p className="text-[#A2D2FF]">LinkedIn | GitHub</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Workshop;
