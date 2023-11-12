import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import CoverCareer from "@/public/cover-career.png";
import CoverTetra from "@/public/cover-tetra.png";
import CoverPos from "@/public/cover-pos.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [

  {
    title: "Programmer Specialist",
    location: "Tancorp, Indonesia",
    description:
      "Developed web applications using PHP, Laravel, Javascript, jQuery, React JS, and HTML/CSS. Also developed mobile applications using Dart, and Flutter.",
    icon: React.createElement(FaRegCalendarCheck),
    date: "Jul 2021 - present",
  },

  {
    title: "Programmer Staff",
    location: "Dinamika University, Indonesia",
    description:
      "Developed web applications using PHP, CodeIgniter 3, Laravel, Javascript, jQuery, and HTML/CSS.",
    icon: React.createElement(FaRegCalendarTimes),
    date: "Nov 2018 - Jul 2021",
  },
  {
    title: "Programmer",
    location: "PT Renjana Abi Yasa, Indonesia",
    description:
      "Developed web applications using .NET, Javascript, jQuery, and HTML/CSS",
    icon: React.createElement(FaRegCalendarTimes),
    date: "Aug - Oct 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Recruitment Management System",
    description:
      "Recruitment management process from request to sorting candidates.",
    tags: ["PHP", "Laravel", "Livewire", 'JavaScript', 'MySQL'],
    imageUrl: CoverCareer,
  },
  {
    title: "E-Learning (TETRA)",
    description:
      "E-Learning platform for employee development.",
    tags: ["PHP", "Laravel", "Livewire", 'JavaScript', 'MySQL'],
    imageUrl: CoverTetra,
  },
  {
    title: "POS & Web Dashboard",
    description:
      "Mobile App POS and Web Dashboard.",
    tags: ["Dart", "Flutter", 'PHP', 'Laravel', 'REST API'],
    imageUrl: CoverPos,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express JS",
  "Dart",
  "Flutter",
  "MySQL",
] as const;