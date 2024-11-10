"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import profile from "../app/images/profile_pic.png";
import pfp from "../app/images/pledgepic.webp";
import post1 from "../app/images/post1.jpg"; // Add your placeholder image here

export default function Home() {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [postContent, setPostContent] = useState(""); // To hold the content of the new post
  const [image, setImage] = useState<File | null>(null); // State for the uploaded image
  const [posts, setPosts] = useState<{ content: string; image: string | null }[]>([
    { content: "Plotting world domination... one brainstorming session at a time. 💡🌍 #KTPleadges", image: post1 } // Default post
  ]); // Initialize with a default post

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Handle creating a new post
  const handlePostSubmit = () => {
    if (postContent || image) {
      const newPost = {
        content: postContent,
        image: image ? URL.createObjectURL(image) : null, // If there's an image, create an object URL
      };
      setPosts([newPost, ...posts]); // Add the new post to the list of posts
      setPostContent(""); // Clear the text area after posting
      setImage(null); // Clear the image after posting
    }
  };

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
          {/* Add Your Thoughts Post */}
          <article className="bg-white rounded-3xl p-6 shadow-lg">
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
                <h3 className="font-semibold text-[#082A69]">Sara's Thoughts</h3>
                <p className="text-sm text-gray-500">Got thoughts? Let’s hear them!!</p>
              </div>
            </div>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Write your post..."
              className="w-full bg-gray-50 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A2D2FF] placeholder:text-gray-400 mb-4"
            />
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full mb-4 text-sm"
            />
            <button
              onClick={handlePostSubmit}
              className="w-full bg-[#082A69] text-white rounded-2xl p-3 font-semibold hover:bg-[#A2D2FF] transition-all"
            >
              Post
            </button>
          </article>

          {/* Dynamic Post Feed */}
          {posts.map((post, index) => (
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

              {/* Display Image if available */}
              {post.image && (
                <div className="relative aspect-square w-full mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt="Post content"
                    fill
                    className="object-cover transition-transform hover:scale-[1.02]"
                  />
                </div>
              )}

              <p>{post.content}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#082A69] transition-colors"
                  >
                    {liked ? '❤️' : '🤍'} {liked ? '1,234' : '1,233'}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#082A69] transition-colors">
                    💭 12 comments
                  </button>
                </div>

                {/* Comment Section */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="relative w-9 h-9">
                      <Image
                        src={profile}
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
        <aside className="col-span-12 md:col-span-3 space-y-2">
          {/* Notification Box */}
          <div className="bg-[#A2D2FF] p-4 rounded-xl shadow-lg mb-6">
            <h3 className="font-semibold text-[#082A69]">Notifications</h3>
            <ul className="space-y-4">
              <li className="bg-white p-3 rounded-xl shadow-sm">
                <p className="font-medium">Exec has approved your 'Sunrise with Pledges' event</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
