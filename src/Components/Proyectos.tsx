import { Project } from "@/types";
import React from "react";
import ProjectCard from "./ProjectCard";

function Proyectos() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Tablero de tarjetas",
      icon: "https://cdn-icons-png.freepik.com/256/4161/4161941.png?semt=ais_white_label",
      pic: "https://i.imgur.com/VR0fFBO.png",
      date: "Sep 2025",
      desc: "Un tablero tipo Trello para organizar actividades en estados y columnas",
      tech: "Next, Typescript, Prisma, Vercel, Netlify, Tailwind",
      url: "https://tablerodetarjetas.netlify.app/",
      git: "https://github.com/JoseFong/tablero-trello",
    },
    {
      id: 2,
      name: "Inventario para tiendas",
      icon: "https://cdn-icons-png.flaticon.com/512/2897/2897785.png",
      pic: "https://i.imgur.com/dc26c3a.png",
      date: "Jun 2025",
      desc: "Sistema de gestión de inventarios para productos, proveedores y ventas para tiendas o negocios.",
      tech: "Next, Typescript, Prisma, Vercel, Netlify, Tailwind",
      url: "https://inventario-tienda-fong.netlify.app",
      git: "https://github.com/JoseFong/inventario-tienda",
    },
    {
      id: 3,
      name: "Agenda",
      icon: "https://images.vexels.com/media/users/3/206164/isolated/preview/9c2166c157dce721fdaaeec772e03c0b-icono-de-trazo-de-agenda-rosa.png",
      pic: "https://i.imgur.com/QjmtCpU.png",
      date: "Abr-May 2025",
      desc: "Agenda para llevar control de eventos o pendientes de forma organizada y estilizada.",
      tech: "Next, Typescript, Prisma, Vercel, Netlify, Tailwind",
      url: "https://agendajosefong.netlify.app/",
      git: "https://github.com/JoseFong/event-test",
    },
  ];

  return (
    <>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="proyectos"
      >
        Proyectos Personales
      </h1>
      <div className="w-full flex items-center justify-center">
        <p className="text-center w-2/3 mt-5 mb-6 hidden sm:block">
          Los siguientes proyectos son prototipos que he desarrollado como
          pasatiempo y para poner en práctica mis habilidades en el desarrollo
          de aplicaciones con Next, TypeScript y la gestión de datos con el ORM
          Prisma
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-0 mt-5">
        {projects.map((p: Project) => (
          <ProjectCard project={p} />
        ))}
      </div>
    </>
  );
}

export default Proyectos;
