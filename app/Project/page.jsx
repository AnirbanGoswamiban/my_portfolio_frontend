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
  const [showModal, setShowModal] = useState(false);
  const [selectedSteps, setSelectedSteps] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event
