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
  // Add more projects here
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center w-full px-6 py-10 space-y-6 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">Projects</h1>
      <div className="w-full max-w-4xl space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg bg-gray-800">
            <button
              className="w-full text-left p-4 text-xl font-semibold bg-gray-700 hover:bg-gray-600"
              onClick={() => toggleProject(project.id)}
            >
              {project.title}
            </button>
            {activeProject === project.id && (
              <div className="p-4 space-y-4">
                <p className="text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
                <div className="space-y-4">
                  {project.steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={step.image}
                        alt={step.text}
                        className="h-32 w-32 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedImage(step.image)}
                      />
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-h-full max-w-full object-contain cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
