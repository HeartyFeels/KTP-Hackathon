"use client"
import { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const HelpfulLinks: NextPage = () => {
  const [activeTab, setActiveTab] = useState('links');

  return (
    <>
      <div className="min-h-screen bg-[#082A69] text-[#E1E4E8] font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
        <Navbar />
        <main className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#A2D2FF]">Helpful Links</h2>

          {/* Tab navigation */}
          <div className="flex border-b border-[#1F5F99]">
            <button
              onClick={() => setActiveTab('links')}
              className={`px-4 py-2 font-semibold ${activeTab === 'links' ? 'border-b-2 border-[#1F5F99] text-[#A2D2FF]' : 'text-[#A2D2FF] hover:text-[#1F5F99]'}`}
            >
              Links
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 font-semibold ${activeTab === 'resources' ? 'border-b-2 border-[#1F5F99] text-[#A2D2FF]' : 'text-[#A2D2FF] hover:text-[#1F5F99]'}`}
            >
              Resources
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === 'links' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Helpful Link Card */}
                <div className="bg-[#0D3B67] p-6 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-[#A2D2FF] mb-2">MDN Web Docs</h3>
                  <p className="text-[#E1E4E8] mb-4">The best resource for learning web development from HTML to JavaScript.</p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F5F99] underline"
                  >
                    Visit MDN Web Docs
                  </a>
                </div>

                {/* Helpful Link Card */}
                <div className="bg-[#0D3B67] p-6 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-[#A2D2FF] mb-2">AWS Training</h3>
                  <p className="text-[#E1E4E8] mb-4">Get started with AWS and learn about cloud computing services and tools.</p>
                  <a
                    href="https://aws.amazon.com/training/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F5F99] underline"
                  >
                    Visit AWS Training
                  </a>
                </div>

                {/* Helpful Link Card */}
                <div className="bg-[#0D3B67] p-6 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-[#A2D2FF] mb-2">W3Schools</h3>
                  <p className="text-[#E1E4E8] mb-4">Learn web development, from HTML basics to advanced JavaScript techniques.</p>
                  <a
                    href="https://www.w3schools.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F5F99] underline"
                  >
                    Visit W3Schools
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-[#1C3D56] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#A2D2FF] mb-4">Additional Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-[#E1E4E8]">Understand cloud architecture with AWS Whitepapers and Documentation.</li>
                  <li className="text-[#E1E4E8]">Explore free coding courses on FreeCodeCamp.</li>
                  <li className="text-[#E1E4E8]">Keep track of tech trends with TechCrunch and Wired for industry news.</li>
                  <li className="text-[#E1E4E8]">Join the developer community at Stack Overflow and GitHub.</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#A2D2FF]">Example Resources:</h4>
                  <ul className="mt-2 space-y-1">
                    <li><a href="https://aws.amazon.com/whitepapers/" target="_blank" rel="noopener noreferrer" className="text-[#1F5F99]">AWS Whitepapers</a></li>
                    <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-[#1F5F99]">FreeCodeCamp</a></li>
                    <li><a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer" className="text-[#1F5F99]">TechCrunch</a></li>
                    <li><a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" className="text-[#1F5F99]">Stack Overflow</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default HelpfulLinks;
