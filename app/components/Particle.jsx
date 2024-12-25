"use client";
import React, { useEffect } from "react";
import "../../public/javascript.png"

const FloatingParticles = () => {
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle, index) => {
      // Randomly position each particle within the viewport
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;

      // Add twinkle effect to random particles
      // if (Math.random() < 0.5) {
      //   particle.classList.add("twinkle");
      // }

      // Add hover effect to move particles away from the cursor
      particle.addEventListener("mousemove", (e) => {
        const rect = particle.getBoundingClientRect();
        const particleCenterX = rect.left + rect.width / 2;
        const particleCenterY = rect.top + rect.height / 2;

        const distanceX = e.clientX - particleCenterX;
        const distanceY = e.clientY - particleCenterY;

        const moveX = distanceX > 0 ? -50 : 50;
        const moveY = distanceY > 0 ? -50 : 50;

        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Reset position after 500ms
        setTimeout(() => {
          particle.style.transform = "translate(0, 0)";
        }, 500);
      });
    });
  }, []);

  return (
    <div className="flex flex-row">
      {Array.from({ length: 100 }).map((_, i) => (
        <div className="particle" key={i}></div>
      ))}
    </div>
  );
};

export default FloatingParticles;
