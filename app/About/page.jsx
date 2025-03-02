"use client";
import React, { useEffect, useState, useRef } from "react";
import WorkExperience from '../Work/Work';
import Link from "next/link"; 

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);
  const [animatedValues, setAnimatedValues] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = entry.target.getAttribute("data-index");
            setVisibleSections((prev) => ({
              ...prev,
              [sectionIndex]: true,
            }));
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (Object.keys(visibleSections).length > 0) {
      const interval = setInterval(() => {
        setAnimatedValues((prev) => {
          const newValues = { ...prev };
          Object.entries(visibleSections).forEach(([sectionIndex, isVisible]) => {
            if (isVisible) {
              sections[sectionIndex].items.forEach((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                if (!newValues[key] || newValues[key] < item.progress) {
                  newValues[key] = (newValues[key] || 0) + 1;
                }
              });
            }
          });
          return newValues;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [visibleSections]);

  const sections = [
    {
      title: "Programming Language",
      items: [
        { skill: "Javascript", progress: 90, img: "/javascript.png" },
        { skill: "Python", progress: 70, img: "/python.png" },
        { skill: "Java", progress: 60, img: "/java.png" }
      ],
    },
    {
      title: "Backend",
      items: [
        { skill: "Node.js", progress: 80, img: "/node.svg" },
        { skill: "Express", progress: 80, img: "/express.png" },
        { skill: "GraphQL", progress: 70, img: "/graphql.png" },
        { skill: "MongoDB", progress: 60, img: "/mongodb.png" },
        { skill: "Sql", progress: 75, img: "/sql.png" },
        { skill: "WebRTC", progress: 70, img: "/webrtc.png" },
        { skill: "Socket", progress: 80, img: "/socket.png" },
        { skill: "Redis", progress: 30, img: "/redis.png" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { skill: "React", progress: 70, img: "/react.svg" },
        { skill: "Angular", progress: 70, img: "/angular.svg" },
        { skill: "Redux", progress: 65, img: "/redux.png" },
        { skill: "HTML", progress: 60, img: "/html.png" },
        { skill: "CSS", progress: 50, img: "/css.png" },
        { skill: "Material UI", progress: 70, img: "/mui.svg" },
        { skill: "Tailwind CSS", progress: 55, img: "/tailwind.svg" },
      ],
    },
    {
      title: "Version Control",
      items: [
        { skill: "Git", progress: 90, img: "/git.png" },
        { skill: "GitHub", progress: 90, img: "/github.png" },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-auto p-4 sm:px-8">
      {/* About Section */}
      <div className="flex flex-col items-center flex-grow mt-4">
        {/* About Me Title */}
        <div className="font-extrabold text-3xl sm:text-5xl md:text-6xl text-center">
          ABOUT ME
        </div>

        {/* About Me Description */}
        <div className="text-center mt-4 leading-7 text-sm sm:text-lg md:text-xl max-w-4xl lg:max-w-5xl mx-auto">
          I am a highly skilled Full-Stack Developer with two years of hands-on experience in designing and developing dynamic, responsive web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and possess advanced proficiency in Javascript. My expertise extends to both relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB), complemented by extensive experience in version control systems such as Git. On the frontend, I leverage modern frameworks like React and Next.js, along with CSS frameworks such as Tailwind CSS and Material-UI, to create seamless, user-centric interfaces. My technical acumen is driven by a passion for delivering high-quality solutions and optimizing performance in every project I undertake.
        </div>

        {/* Skills Section */}
        <div className="font-extrabold mt-12 text-3xl sm:text-5xl md:text-6xl text-center">
          SKILLS
        </div>

        {sections.map((section, sectionIndex) => (
  <div
    key={sectionIndex}
    className="w-full mt-8"
    data-index={sectionIndex}
    ref={(el) => (sectionRefs.current[sectionIndex] = el)}
  >
    <div className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-left pl-4 sm:pl-8">
      {section.title}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {section.items.map(({ skill, img }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-2 sm:p-3 bg-gray-600 bg-opacity-20 rounded-lg group hover:bg-gray-500 hover:bg-opacity-50 transition-all"
        >
          <img src={img} alt={skill} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
          <div className="mt-2 text-center text-sm sm:text-base font-medium group-hover:text-white">
            {skill}
          </div>
        </div>
      ))}
    </div>
  </div>
))}

        {/* Work Experience Section */}
        <div className="font-extrabold mt-20 text-center text-3xl sm:text-5xl md:text-6xl">
          WORK EXPERIENCE
        </div>
        <WorkExperience />

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
      </div>
    </div>
  );
}
