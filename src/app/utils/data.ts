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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "operario maquinaria",
    description:
      "3 años operario  maquinaria",
    date: "",
  },
  {
    title: "Administrativo",
    description:
      "administrativo de logistica",
  },
] as const;

export const projectsData = [
  {
    title: "API Dogs",
    description:
      "Una pequeña aplicacion que realice en el bootcamp de Henry que me ayudo a entender y aplicar peticiones al back-end ",
    tags: ["React", "Redux" , "Node js", "Postgres", "boostrap", "Sequelize"],
    imageUrl: dogImg,
    link: "https://dogs-pi-client.vercel.app/home"
  },
  {
    title: "Autopat-Express",
    description:
      "Una Aplicacion tipo E-commerce donde trabaje en equipo aplicando metodologias agiles (SCRUM), Mercado Pago, Notificaciones, autenticacion de terceros, github.",
    tags: ["React",  "Next.js", "Tipescript" , "Tailwind", "Prisma" ],
    imageUrl: autopartImg,
    link:"https://autopart-express.vercel.app/"
  },
  {
    title: "Portfolio",
    description:
      "Este mismo portfolio el cual lo seguire desarrollando para mejorar el diseño y experiencia de usuario.",
    tags: ["React", "Next.js", "Tipescript", "Tailwind", "Motion"],
    imageUrl: porfolioImg,
    link:"https://porftolio-maxi.vercel.app/"
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