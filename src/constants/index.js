import qubcab1 from "../assets/qubcab1.png";
import qubcab2 from "../assets/qubcab2.png";
import grosp1 from "../assets/grosp1.png";
import grosp2 from "../assets/grosp2.png";
import warTrackerImg from "../assets/demo-preview.png";

import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react"; // Install lucide-react

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/anjali-gupta-3004/", // Replace with your link
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/AnjaliGupta3004",
    color: "#333",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/__anjaligupta123/", // Replace with your link
    color: "#E4405F",
  },
  {
    name: "Email",
    icon: Mail,
    link: "anjaligupta02099@gmail.com",
    color: "#EA4335",
  },
 
];
export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Personal Projects" },
];

export const personalInfo = {
  name: "Anjali Gupta",
  college: "Astral Institute of Technology and Research (AITR), Indore",
  year: "3rd Year, B.Tech (CSE)",
  summary: "Highly motivated Android and React Native Developer. Specializing in Native Kotlin development and cross-platform solutions with React Native and Tailwind CSS.",
};

export const experiences = [
  {
    title: "App Developer (React Native)",
    company: "Navkar Infotech Services",
    date: "08/2025 – 02/2026",
    details: [
      {
        name: "Qubcab Application",
        desc: "Cab booking app with Google Maps API and Redux.",
        images: [qubcab1, qubcab2]
      },
      {
        name: "Grosp Application",
        desc: "3-tier ecosystem for Customers, Vendors, and Partners.",
        images: [grosp1, grosp2]
      }
    ]
  },
  {
    title: "Android Intern (Native Kotlin)",
    company: "Dollop Infotech",
    date: "06/2024 – 07/2025",
    projectTitle: "Global Super Market (GSM)",
    projectDesc: "Developed a high-performance Native Android application using Kotlin and Java. Managed dual modules for Drivers and Users, focusing on real-time grocery logistics and seamless UI navigation.",
    features: ["Native Android (Kotlin/Java)", "Driver & User Modules", "Real-time Tracking", "SQLite/Room Database"]
  }
];

export const personalProjects = [
  {
    name: "Global Sentinel (War Tracker)",
    description: "Real-time war intelligence dashboard built with React.js & Tailwind CSS. Tracks global conflicts using live API data.",
    link: "https://github.com/AnjaliGupta3004/war-tracker-project",
    image: warTrackerImg,
    tags: ["React.js", "Tailwind", "Vite", "API"]
  }
];