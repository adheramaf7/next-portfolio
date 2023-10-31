import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import Career1 from "@/public/career1.png";
import Career2 from "@/public/career2.png";
import Career3 from "@/public/career3.png";

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
    title: "Programmer",
    location: "PT Renjana Abi Yasa, Indonesia",
    description:
      "Developed web applications using .NET, Javascript, jQuery, and HTML/CSS",
    icon: React.createElement(FaRegCalendarTimes),
    date: "Aug - Oct 2018",
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
    title: "Programmer Specialist",
    location: "Tancorp, Indonesia",
    description:
      "Developed web applications using PHP, Laravel, Javascript, jQuery, React JS, and HTML/CSS. Also developed mobile applications using Dart, and Flutter.",
    icon: React.createElement(FaRegCalendarCheck),
    date: "Jul 2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Recruitment Management System",
    description:
      "The system for managing recruitment process from request until sorting candidates.",
    tags: ["PHP", "Laravel", "Livewire", 'JavaScript', 'MySQL'],
    imageUrl: Career1,
  },
  {
    title: "E-Learning (TETRA)",
    description:
      "E-Learning for internal Tancorp Company Needed.",
    tags: ["PHP", "Laravel", "Livewire", 'JavaScript', 'MySQL'],
    imageUrl: Career2,
  },
  {
    title: "Employee Self Service",
    description:
      "A mobile for employee to submit permits, annual leaves, and recording attendance. Already used in five companies under Tancorp.",
    tags: ["Dart", "Flutter",],
    imageUrl: Career3,
  },
  {
    title: "Central Kitchen & POS",
    description:
      "Central Kitchen system for managing multiple restaurants centrally alongside with Point of Sales System for transaction on outlet.",
    tags: ["Dart", "Flutter", 'PHP', 'Laravel', 'REST API'],
    imageUrl: Career3,
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