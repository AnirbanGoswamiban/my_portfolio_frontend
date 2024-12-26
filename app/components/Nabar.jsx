"use client";

import { useState } from "react";
import Link from "next/link";  // Import the Link component from next/link

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async () => {
    // let downloadLink = `${process.env.NEXT_PUBLIC_URL}download-resume`;
    let downloadLink="https://my-portfolio-backend-wb2z.onrender.com/download-resume"
    window.open(downloadLink, '_self');
  };

  return (
    <div className="bg-[#070a13]">
      {/* Desktop and Mobile Header */}
      <div className="flex items-center justify-end sm:justify-end p-4">
        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <div className="text-white font-bold cursor-pointer hover:text-red-500">
            <Link href="/Home">Home</Link>
          </div>
          <div className="text-white font-bold cursor-pointer hover:text-red-500">
            <Link href="/About">About Me</Link>
          </div>
          <div className="text-white font-bold cursor-pointer hover:text-red-500">
            <Link href="/ContactMe">Contact</Link>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-400"></div>

          {/* Resume Button */}
          <button
            className="px-4 py-2 rounded bg-[#e11d48] text-white hover:bg-[#be163d]"
            style={{
              boxShadow: "0 5px 10px #e11d48",
            }}
            onClick={handleSubmit}
          >
            Resume
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 bg-[#070a13] py-4">
          <div className="text-white font-bold cursor-pointer hover:text-red-500">
            <Link href="/Home">Home</Link>
          </div>
          <div className="text-white font-bold cursor-pointer hover:text-red-500">
            <Link href="/About">About</Link>
          </div>
          <div className="text-white font-bold cursor-pointer hover:text-red-500">
            <Link href="/ContactMe">Contact</Link>
          </div>

          {/* Resume Button */}
          <button
            className="px-4 py-2 rounded bg-[#e11d48] text-white hover:bg-[#be163d]"
            style={{
              boxShadow: "0 5px 10px #e11d48",
            }}
            onClick={handleSubmit}
          >
            Resume
          </button>
        </div>
      )}
    </div>
  );
}
