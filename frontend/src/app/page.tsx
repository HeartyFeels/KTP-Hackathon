"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import profile from "../app/images/profile_pic.png"
import content from "../app/images/content_pic.jpg"
import pfp from "../app/images/pledgepic.webp"

export default function Home() {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-screen bg-[#082A69] text-[#2A2A2A] font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]">
      <Navbar />

      <div className="container mx-auto grid grid-cols-12 gap-6 p-6">
        {/* Left Sidebar - Announcements */}
        <aside className="col-span-12 md:col-span-3 bg-[#A2D2FF] rounded-3xl p-6 h-fit shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-[#082A69]">Announcements</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 bg-white/90 p-3 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
              <span className="text-2xl">📢</span>
              <div>
                <p className="font-medium">Team Meeting</p>
                <p className="text-sm text-gray-500">Tomorrow at 2 PM</p>
              </div>
            </li>
            <li className="flex items-center gap-3 bg-white/90 p-3 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
              <span className="text-2xl">📢</span>
              <div>
                <p className="font-medium">Web Development Workshop</p>
                <p className="text-sm text-gray-500">Due in 3 days</p>
              </div>
            </li>
            <li className="flex items-center gap-3 bg-white/90 p-3 rounded-2xl shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
              <span className="text-2xl">📢</span>
              <div>
                <p className="font-medium">Halloween Trivia Social</p>
                <p className="text-sm text-gray-500">Friday evening</p>
              </div>
            </li>
          </ul>
        </aside>

        {/* Main Feed */}
        <main className="col-span-12 md:col-span-6 space-y-6">


          {/* Post Feed */}
          {[...Array(2)].map((_, index) => (
            <article key={index} className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={profile}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-[#A2D2FF] shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#082A69]">Sara Smith</h3>
                  <p className="text-sm text-gray-500">Alpha Pledge • 2h ago</p>
                </div>
              </div>

              <div className="relative aspect-square w-full mb-4 rounded-2xl overflow-hidden">
                <Image
                  src={content}
                  alt="Post content"
                  fill
                  className="object-cover transition-transform hover:scale-[1.02]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#082A69] transition-colors"
                  >
                    {liked ? '❤️' : '🤍'} {liked ? '1,234' : '1,233'}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#082A69] transition-colors">
                    💭 88 comments
                  </button>
                </div>

                {/* Comment Section */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="relative w-9 h-9">
                      <Image
                        src={pfp}
                        alt="Your profile"
                        width={35}
                        height={35}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="flex-1 bg-gray-50 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A2D2FF] placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>

        {/* Right Sidebar - Actions */}
        <aside className="col-span-12 md:col-span-3 space-y-4">
          <button
            onClick={() => window.location.href = '/add-pledge'}
            className="w-full bg-[#A2D2FF] text-[#082A69] hover:bg-[#8bc8ff] transition-all rounded-2xl p-4 text-center font-semibold block shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            ➕ Add Pledge
          </button>
          <button
            onClick={() => window.location.href = '/add-blog-post'}
            className="w-full bg-white text-[#082A69] hover:bg-gray-50 transition-all rounded-2xl p-4 text-center font-semibold block shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            ✍️ Add Blog Post
          </button>
          <br></br>
          {/* Notification Box */}
          <div className="bg-[#A2D2FF] p-4 rounded-xl shadow-lg mb-6">
            <h3 className="font-semibold text-[#082A69]">Notifications</h3>
            <ul className="space-y-4">
             
              <li className="bg-white p-3 rounded-xl shadow-sm">
                <p className="font-medium">Ryan has approved your 'Sunrise with Pledges' event</p>

              </li>

            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
