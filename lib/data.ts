
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TwiiterCraft from "@/public/twittercraft.png"
import colorai from "@/public/colorai.png";
import color from "@/public/color.png";

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
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "TwitterCraft",
        description:
            "I worked as a full-stack developer on this  project for 2 months. AI-powered tool that crafts personalized Twitter bios based on user-provided roles.",
        tags: ["React", "Next.js", "ChatGPT", "Tailwind", "Shadcn"],
        imageUrl: TwiiterCraft,
        liveUrl: "https://twitter-craft-gm3yobyjv-zaidbhati10114s-projects.vercel.app/",
    },
    {
        title: "Color AI",
        description:
            "I was the full-stack developer. It has features like generating color pallets using Gemini AI,based on your website input",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Gemini AI", "Vercel"],
        imageUrl: colorai,
        liveUrl: "https://color-pallete-ai.vercel.app/",
    },
    {
        title: "Color Pallets",
        description:
            "A public web app which displays color pallets for all web developers/designers. It shows cards hex codes, copy and use it in your projects..",
        tags: ["React", "Next.js", "SQL", "Tailwind", "MongoDB", "Vercel", "Shadcn"],
        imageUrl: color,
        liveUrl: "https://colorpalletes.vercel.app/",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Framer Motion",
] as const;
