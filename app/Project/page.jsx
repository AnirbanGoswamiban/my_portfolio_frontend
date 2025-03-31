"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Code Collab",
    description:
      "A real-time collaborative coding platform with a chat feature and voice call.",
    link: "https://interview-room-frontend.vercel.app/",
    techStack: "React, Node.js, Express.js, WebSockets",
    steps: [
      { image: "/0.png", text: "Flowchart of Code Collab" },
      { image: "/1.png", text: "Step 1: Enter your name and create a room." },
      { image: "/2.png", text: "Step 2: Copy Room ID and invite friends." },
      { image: "/3.png", text: "Step 3: Friends join using the Room ID." },
      { image: "/4.png", text: "Step 4: Chat in real-time." },
      { image: "/5.png", text: "Step 5: Collaborate in a shared editor." },
      { image: "/6.png", text: "Step 6: Join a voice call for discussions." },
    ],
  },
  {
    id: 2,
    title: "yeetCode",
    description:
      "A web platform to practice coding problems with Google SSO authentication, problem search, and embedded code editor.",
    link: "https://yeetcode-roan.vercel.app/",
    techStack: "Angular, Node.js, Google SSO, Firebase",
    steps: [
      { image: "/yeetcode1.png", text: "Homepage with problem listings" },
      { image: "/yeetcode2.png", text: "Google SSO login implementation" },
      { image: "/yeetcode3.png", text: "Search problems by name and difficulty" },
      { image: "/yeetcode4.png", text: "Embedded code editor interface" },
      { image: "/yeetcode5.png", text: "Code commenting functionality" },
      { image: "/yeetcode6.png", text: "Problem submission and results view" },
    ],
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSteps, setSelectedSteps] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openModal = (steps) => {
    setSelectedSteps(steps);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center w-full px-6 py-10 space-y-6 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">Projects</h1>
      <div className="w-full max-w-4xl space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg border-gray-700">
            <div className="w-full text-left p-4 text-xl font-semibold">
              {project.title}
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-300">{project.description}</p>
              <p className="text-blue-400 font-mono text-sm">
                Tech Stack: {project.techStack}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => openModal(project.steps)}
                >
                  View Instructions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/ContactMe">
          <button className="px-4 py-2 bg-[#e11d48] rounded text-white hover:bg-[#be163d] shadow-lg">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Modal for Instructions */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-3xl relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <div className="space-y-8 overflow-y-auto max-h-[70vh]">
              {selectedSteps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <img
                    src={step.image}
                    alt={step.text}
                    className="w-full rounded-lg"
                  />
                  <p className="text-gray-300 text-center">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
