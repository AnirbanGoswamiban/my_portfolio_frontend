"use client";
import React, { useState } from "react";

export default function WorkExperience() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectName) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <div className="mt-10 flex flex-col w-full space-y-6">
      {/* First Entry */}
      <div className="flex flex-col bg-gray-600 bg-opacity-20 p-4 rounded-lg">
        <div className="flex items-center space-x-4">
          <img src="/baar.jpg" alt="Logo" className="h-16 w-16" />
          <div>
            <div className="font-bold text-lg">
              BAAR Technologies | Fulltime
            </div>
            <p>Role: Full-Stack Developer</p>
            <p>Duration: Jan 2024 - present</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="font-semibold">Links:</span>
              <a
                href="https://www.linkedin.com/company/baartech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="/linkedln.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://baar.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                  <img
                  className="h-8 w-8 rounded-full"
                  src="/link.png"
                  alt="link"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-300 bg-opacity-20">
            <p className="font-bold">
              BAAR Control Assurance | A professional web platform where
              organizations can monitor compliance with government frameworks
              such as SBI and PFRDA.
            </p>
            <button
              onClick={() => toggleProject("BAARControlAssurance")}
              className="text-blue-500 hover:underline"
            >
              Details
            </button>
          </div>
          {expandedProject === "BAARControlAssurance" && (
            <div className="mt-2 bg-gray-500 bg-opacity-20 p-4 rounded-lg">
              <p className="font-bold">Key Responsibilities:</p>
              <ul className="list-disc pl-6">
                <li>Built APIs to create frameworks and their controls.</li>
                <li>
                  Assigned frameworks, monitored stats over time, and fetched
                  them using custom APIs.
                </li>
                <li>Designed and implemented the entire database structure.</li>
                <li>Created schemas for almost all project tables.</li>
                <li>Writing complex queries</li>
                <li>Maintained the codebase efficiently.</li>
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-300 bg-opacity-20">
            <p className="font-bold">
              BAAR Segregation of Duties | A web platform to monitor user roles
              and privileges effectively.
            </p>
            <button
              onClick={() => toggleProject("BAARSegragationOfDuties")}
              className="text-blue-500 hover:underline"
            >
              Details
            </button>
          </div>
          {expandedProject === "BAARSegragationOfDuties" && (
            <div className="mt-2 bg-gray-500 bg-opacity-20 p-4 rounded-lg">
              <p className="font-bold">Key Responsibilities:</p>
              <ul className="list-disc pl-6">
                <li>Designing UI pages using React</li>
                <li>Integrating APIs</li>
                <li>Testing the application</li>
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-300 bg-opacity-20">
            <p className="font-bold">
              BAAR Universal Directory | A service offering directory-based
              features to clients, similar to Active Directory.
            </p>
            <button
              onClick={() => toggleProject("BAARUniversalDirectory")}
              className="text-blue-500 hover:underline"
            >
              Details
            </button>
          </div>
          {expandedProject === "BAARUniversalDirectory" && (
            <div className="mt-2 bg-gray-500 bg-opacity-20 p-4 rounded-lg">
              <p className="font-bold">Key Responsibilities:</p>
              <ul className="list-disc pl-6">
                <li>
                  Created APIs to manage organizations, groups, and users.
                </li>
                <li>
                  Developed functionality to fetch and display organizational
                  data.
                </li>
                <li>
                  Automated the creation of Group Policy Objects (GPOs) using
                  PowerShell scripts.
                </li>
                <li>
                  Set and edited policies in the GPO using PowerShell
                  automation.
                </li>
                <li>Assigned GPOs to groups within organizations.</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Second Entry */}
      {/* NrXen-IT Technologies */}
      <div className="flex flex-col bg-gray-600 bg-opacity-20 p-4 rounded-lg">
        <div className="flex items-center space-x-4">
          <img src="/nrxen.png" alt="Logo" className="h-16 w-16" />
          <div>
            <div className="font-bold text-lg">
              NrXen-IT Technologies | Intern
            </div>
            <p>Role: Software Engineer Intern</p>
            <p>Duration: Dec 2022 – Jun 2023</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="font-semibold">Links:</span>
              <a
                href="https://www.linkedin.com/company/nrxen/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="/linkedln.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.nrxen.com/site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                  <img
                  className="h-8 w-8 rounded-full"
                  src="/link.png"
                  alt="link"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-300 bg-opacity-20">
            <p className="font-bold">
              NIMMOS | A platform for active tracking of buses and trucks,
              providing real-time data to schools and factories.
            </p>
            <button
              onClick={() => toggleProject("NIMMOS")}
              className="text-blue-500 hover:underline"
            >
              Details
            </button>
          </div>
          {expandedProject === "NIMMOS" && (
            <div className="mt-2 bg-gray-500 bg-opacity-20 p-4 rounded-lg">
              <p className="font-bold">Key Responsibilities:</p>
              <ul className="list-disc pl-6">
                <li>
                  Built APIs using GraphQL to manage data integrity and
                  durability in the database.
                </li>
                <li>
                  Assisted in creating the UI of the web app using Appsmith, a
                  low-code tool.
                </li>
                <li>
                  Designed live vehicle tracking features using Google Maps API
                  and Leaflet.js.
                </li>
                <li>
                  Developed scripts to convert CSV data into objects and insert
                  bulk data into the PostgreSQL database.
                </li>
                <li>
                  Implemented role-based login, enabling differentiated views
                  for employees based on roles.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Third Entry */}
      {/* Modgenics Technology Solutions */}
      <div className="flex flex-col bg-gray-600 bg-opacity-20 p-4 rounded-lg">
        <div className="flex items-center space-x-4">
          <img src="/modgenics.png" alt="Logo" className="h-16 w-16" />
          <div>
            <div className="font-bold text-lg">
              Modgenics Technology Solutions | Intern
            </div>
            <p>Role: Web Developer Intern</p>
            <p>Duration: Aug 2023 – Nov 2023</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="font-semibold">Links:</span>
              <a
                href="https://www.linkedin.com/company/modgenics-technology-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="/linkedln.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.modgenics.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                  <img
                  className="h-8 w-8 rounded-full"
                  src="/link.png"
                  alt="link"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-300 bg-opacity-20">
            <p className="font-bold">
              E-commerce Platform | A marketplace enabling local vendors to sign
              up and list their products.
            </p>
            <button
              onClick={() => toggleProject("EcommercePlatform")}
              className="text-blue-500 hover:underline"
            >
              Details
            </button>
          </div>
          {expandedProject === "EcommercePlatform" && (
            <div className="mt-2 bg-gray-500 bg-opacity-20 p-4 rounded-lg">
              <p className="font-bold">Key Responsibilities:</p>
              <ul className="list-disc pl-6">
                <li>
                  Developed RESTful APIs to ensure seamless communication
                  between frontend and backend components.
                </li>
                <li>
                  Collaborated with frontend developers to integrate APIs
                  efficiently.
                </li>
                <li>
                  Designed well-structured and normalized database schemas to
                  ensure data integrity and optimize performance.
                </li>
                <li>
                  Created and maintained comprehensive API documentation aligned
                  with evolving project requirements.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
