"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-[#082A69] text-white">
      <Navbar />
      
      <div className="container mx-auto grid grid-cols-12 gap-6 p-6">
        <aside className="col-span-12 md:col-span-3 bg-[#06245A] rounded-xl p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Announcements</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📢</span>
              Meeting next week
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-400">📢</span>
              Meeting next week
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">📢</span>
              Meeting next week
            </li>
          </ul>
        </aside>

        {/* Main Feed */}
        <main className="col-span-12 md:col-span-6 space-y-6">
          {/* Post Card */}
          <article className="bg-[#06245A] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/api/placeholder/48/48"
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full object-cover border-2 border-white/10"
                />
              </div>
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-300">Alpha Pledge</p>
              </div>
            </div>
            
            <div className="relative aspect-square w-full mb-4">
              <Image
                src="/api/placeholder/600/600"
                alt="Post content"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLiked(!liked)}
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                {liked ? '❤️' : '🤍'} {liked ? 'Liked' : 'Like'}
              </button>
              <span className="text-sm text-gray-300">Posted 2h ago</span>
            </div>
          </article>
        </main>

        {/* Right Sidebar - Actions */}
        <aside className="col-span-12 md:col-span-3 space-y-4">
          <button
            onClick={() => window.location.href = '/add-pledge'}
            className="w-full bg-[#06245A] hover:bg-[#041d4a] transition-colors rounded-xl p-4 text-center font-semibold block"
          >
            ➕ Add Pledge
          </button>
          <button
            onClick={() => window.location.href = '/add-blog-post'}
            className="w-full bg-[#06245A] hover:bg-[#041d4a] transition-colors rounded-xl p-4 text-center font-semibold block"
          >
            ✍️ Add Blog Post
          </button>
        </aside>
      </div>
    </div>
  );
}