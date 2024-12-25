"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; 

export default function Homepage() {
  const [profilePic, setProfilePic] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfilePic((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
  useEffect(() => {
    activate();
  }, []); 

  return (
    <div className="flex flex-col h-screen p-4">
      {/* Photo Section */}
      <div className="flex justify-center items-center mt-8">
        <img
          src={profilePic ? "/dp.jpg" : "/hackerman.png"}
          alt="Profile Picture"
          className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover"
        />
      </div>

      {/* Hi Section */}
      <div
        className="font-extrabold flex flex-row items-center justify-center mt-4 text-2xl sm:text-3xl md:text-4xl"
      >
        Hi, I’m Anirban <span className="wave ml-2">👋</span>
      </div>

      {/* Full-Stack and Web Developer Section */}
      <div className="flex flex-col items-center flex-grow mt-4 text-center">
        <div
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight"
        >
          <span className="text-red-500">FULL-STACK</span>
          <br />
          WEB-DEVELOPER.
        </div>
        <div
          className="mt-4 text-sm sm:text-base md:text-lg text-center max-w-md"
        >
          A passionate Full-Stack Web Developer / UI/UX enthusiast specialized
          in building stunning pixel-perfect interactive and responsive
          websites/applications.
        </div>
        <Link href="/About">
        <button
            className="px-4 py-2 rounded bg-[#e11d48] text-white hover:bg-[#be163d] mt-5"
            style={{
              boxShadow: "0 5px 10px #e11d48",
            }}
          >
            About Me
          </button>
          </Link>
      </div>
    </div>
  );
}

async function activate() {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_URL}test`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
}