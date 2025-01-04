"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CodeCollabPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close the modal on pressing the ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center w-full px-6 py-10 space-y-10 bg-gray-900">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Project: Code Collab</h1>
        <p className="mt-4 text-xl text-gray-300">
          A real-time collaborative coding platform with a chat feature and
          voice call. Bring people together to code, chat, and create
          seamlessly.
        </p>
        <a
          href="https://interview-room-frontend.vercel.app/"
          className="mt-4 inline-block text-blue-400 font-semibold text-lg hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Code Collab
        </a>
      </div>

      {/* Flowchart Section */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
        <img
          src="/0.png"
          alt="Flowchart of Code Collab"
          className="h-80 w-full max-w-6xl object-contain rounded-lg bg-gray-800 cursor-pointer transform transition-transform duration-300 hover:scale-110"
          onClick={() => handleImageClick("/0.png")}
        />
      </div>

      {/* Steps */}
      <div className="w-full space-y-10">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/1.png"
            alt="Enter Name and Create Room"
            className="h-80 w-full md:w-1/2 object-contain rounded-lg bg-gray-700 cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleImageClick("/1.png")}
          />
          <p className="text-xl text-gray-300">
            <span className="font-semibold text-white">Step 1:</span> Enter your
            name and click "Create Room" to start a collaborative session.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/2.png"
            alt="Copy Room ID"
            className="h-80 w-full md:w-1/2 object-contain rounded-lg bg-gray-700 cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleImageClick("/2.png")}
          />
          <p className="text-xl text-gray-300">
            <span className="font-semibold text-white">Step 2:</span> Copy the
            Room ID and share it with your friends to invite them.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/3.png"
            alt="Join Room"
            className="h-80 w-full md:w-1/2 object-contain rounded-lg bg-gray-700 cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleImageClick("/3.png")}
          />
          <p className="text-xl text-gray-300">
            <span className="font-semibold text-white">Step 3:</span> Your
            friend enters the Room ID and clicks "Join Room" to connect.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/4.png"
            alt="Chat Feature"
            className="h-80 w-full md:w-1/2 object-contain rounded-lg bg-gray-700 cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleImageClick("/4.png")}
          />
          <p className="text-xl text-gray-300">
            <span className="font-semibold text-white">Step 4:</span> Use the
            chat feature to communicate with your team in real-time.
          </p>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/5.png"
            alt="Collaborate and Code"
            className="h-80 w-full md:w-1/2 object-contain rounded-lg bg-gray-700 cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleImageClick("/5.png")}
          />
          <p className="text-xl text-gray-300">
            <span className="font-semibold text-white">Step 5:</span>{" "}
            Collaborate and code together in real-time using the shared editor.
          </p>
        </div>

        {/* Step 6 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/6.png"
            alt="Voice Call"
            className="h-80 w-full md:w-1/2 object-contain rounded-lg bg-gray-700 cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleImageClick("/6.png")}
          />
          <p className="text-xl text-gray-300">
            <span className="font-semibold text-white">Step 6:</span> Join a
            voice call to discuss and collaborate effectively.
          </p>
        </div>
      </div>

      <div className="mt-10 mb-12 text-center">
        <Link href={"/ContactMe"}>
          <button
            className="px-4 py-2 rounded bg-[#e11d48] text-white hover:bg-[#be163d]"
            style={{
              boxShadow: "0 5px 10px #e11d48",
            }}
          >
            Contact Me
          </button>
        </Link>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full-screen view"
            className="max-h-full max-w-full object-contain cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
