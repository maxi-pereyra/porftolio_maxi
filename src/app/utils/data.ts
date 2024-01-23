import React from "react";
import dogImg from '../../../public/dog.png'
import porfolioImg from '../../../public/portfolio.png'
import autopartImg from '../../../public/autopart.png'

export const links = [
  {
    name: "Hola",
    hash: "#home",
  },
  {
    name: "Sobre mi",
    hash: "#about"
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Contacto",
    hash: "#contact",
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
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;