import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dogImg from '../../../public/dog.png'
import porfolioImg from '../../../public/portfolio.png'
import autopartImg from '../../../public/autopart.png'

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
    title: "API Dogs",
    description:
      "Una pequeña aplicacion que realice en el bootcamp de Henry que me ayudo a entender y aplicar peticiones al back-end ",
    tags: ["React", "Redux" , "Node js", "Postgres", "boostrap", "Sequelize"],
    imageUrl: dogImg,
  },
  {
    title: "Autopat-Express",
    description:
      "Una Aplicacion tipo E-commerce donde trabaje en equipo aplicando metodologias agiles (SCRUM), Mercado Pago, Notificaciones, autenticacion de terceros, github.",
    tags: ["React",  "Next.js", "Tipescript" , "Tailwind", "Prisma" ],
    imageUrl: autopartImg,
  },
  {
    title: "Word Analytics",
    description:
      "Este mismo portfolio el cual lo seguire desarrollando para mejorar el diseño y experiencia de usuario.",
    tags: ["React", "Next.js", "Tipescript", "Tailwind", "Motion"],
    imageUrl: porfolioImg,
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
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;